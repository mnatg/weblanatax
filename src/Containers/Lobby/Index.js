// React
import React, { useEffect, useState } from 'react'
import {
    Text,
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    ImageBackground,
    Alert,
} from 'react-native'

// Redux
import { useDispatch, useSelector } from 'react-redux'
// Styles
import {
    Images,
    Common,
    Colors,
    Layout,
    FontSize,
    MetricsSizes,
    MetricsSizesW,
    dimensions,
    sizeResponsive
} from '@/Theme'
import { PixelRatio, Platform } from 'react-native'
// Services
import GetAviserService from '../../Services/Adviser/GetAdviser'
import GetConsultancyRoomService from '../../Services/ConsultancyRoom/GetConsultancyRoom'
import ListTaxes from '../../Services/Taxes/ListTaxes'
import { onAddTaxes } from '../../Store/actions/Taxes'
//Firebase
import firestore from '@react-native-firebase/firestore';
import { useCollectionData, useDocument } from 'react-firebase-hooks/firestore'
import NetInfo from "@react-native-community/netinfo";

const LobbyContainer = ({ navigation }) => {
    const dispatch = useDispatch()
    const user = useSelector((state) => state.auth.user)
    const [open, setOpen] = useState(true)
    const [adviser, setAdviser] = useState({})
    const [consultancyRoom, setConsultancyRoom] = useState({});
    const [photoURL, setPhotoURL] = useState('');
    const [name, setName] = useState('');
    const [adviserPopUp, setAdviserPopUp] = useState(false);
    const userStateQuery = firestore().doc('userState/' + (user != null ? user.uid : 'empty'));
    const [userState] = useDocument(userStateQuery);

    useEffect(() => {
        if (user) {
            init();
            setName(user.name)
            setPhotoURL(user.photoURL);
        }
    }, []);

    useEffect(() => {
        if(userState){
            if (userState.data().state == 'initial') {
                navigation.replace('Dashboard');
            } else if(userState.data().state == 'consultancy') {
                consultancyData();
            } else if (userState.data().state == 'tax') {
              addTaxes();
            }
        }
    }, [userState]);

    const addTaxes = async () => {
        let taxes = await ListTaxes(user.uid);
        if (taxes && taxes.length > 0) {
            try {
                await dispatch(onAddTaxes(taxes));
                navigation.replace('Main');
            } catch (error) {
                console.error(error);
            }
        }
    }

    const consultancyData = async () =>{
        setOpen(false);
            let consultancy = await GetConsultancyRoomService(user.uid);
            setConsultancyRoom(consultancy);
            let adviser = await GetAviserService(consultancy.adviserid);
            setAdviser(adviser);
            if (!adviserPopUp && consultancyRoom.state) {
                setAdviserPopUp(true);
                Alert.alert(
                    "Se le acaba de asignar un asesor",
                    "Desea entrar a video llamada con el",
                    [
                        {
                            text: "No",
                            onPress: () => console.log("No, continue editing"),
                            style: "cancel"
                        },
                        {
                            text: "Si",
                            onPress: () => videoCall(),
                        }
                    ],
                    { cancelable: false }
                );
            }
    }

    const init = async () => {
        
    }

    const videoCall = async () => {
        const resolution = await getResolution();
        navigation.navigate('VideoCall', {
            sessionId: consultancyRoom.sessionid,
            token: consultancyRoom.usertoken,
            uid: user.uid,
            type: 'consultancy',
            employee: consultancyRoom.adviserid,
            resolution:resolution
        });
    }

    const getResolution = async () =>{
        const state = await NetInfo.fetch();
        if (state.details.strength >= 0 && state.details.strength < 10) {
          return "320x240";
        }
        else if (state.details.strength >= 10 && state.details.strength < 20) {
          return "426x240";
        }
        else if (state.details.strength >= 20 && state.details.strength < 30) {
          return "640x360";
        }
        else if (state.details.strength >= 30 && state.details.strength < 40) {
          return "800x600";
        }
        else if (state.details.strength >= 40 && state.details.strength < 50) {
          return "854x480";
        }
        else if (state.details.strength >= 50 && state.details.strength < 60) {
          return "1280x720";
        }
        else if (state.details.strength >= 60 && state.details.strength < 70) {
          return "1280x720";
        }
        else if (state.details.strength >= 70 && state.details.strength < 80) {
          return "1920x1080";
        }
        else if (state.details.strength >= 80 && state.details.strength < 90) {
          return "1920x1080";
        }
        else if (state.details.strength >= 90) {
          return "2560x1440";
        }
      }

    return (
        <ImageBackground source={open ? Images.standbg : Images.greenHeader} style={{ flex: 1 }} imageStyle={ open ?  styles_stand.background  : styles.bgHeaderGreen } >
            {
                open ?
                    <View style={styles_stand.text_container}>
                        <View style={styles.flex_content}>
                        <View style={styles.flex_header}>
                        {
                            photoURL != null ?
                                <Image source={{ uri: photoURL }} style={styles_stand.image}></Image>
                                :
                                <Image source={Images.avatar} style={styles_stand.image}></Image>
                        }
                        <Text style={styles_stand.label_name}> Bienvenido {name} </Text>
                        <Text style={styles_stand.label_subtype}>Tus impuestos serán más simples con el asesoramiento que te damos.</Text>
                        <View style={styles_stand.lineHorizontal}></View>
                        </View>
                        <View style={styles.flex_boddy}>
                        <Text style={styles_stand.header}>Aun no se ha asignado un asesor, en un momento estaremos con usted </Text>
                        <Text style={styles_stand.label_second}>Expertos dedicados a tus impuestos de principio a fin</Text>
                        <Text style={styles_stand.label_third}>Disponibilidad todo el año</Text>
                        <Text style={styles_stand.label_second}>¡Comencemos!</Text>
                        </View>
                        </View>
                    </View>

                    : //OR
                    <View style={styles.container} >
                        <View style={[styles.header, Layout.row]}>
                            <Text style={styles.name}>
                                {adviser.fullname}
                                {"\n"}
                                <Text style={styles.nameA}>
                                    Asesor Comercial
                                </Text>
                            </Text>

                            <Image source={Images.avatar} style={styles.image} />
                        </View>
                        <View style={styles.content}>
                            <Text style={styles.title}>
                                Su asesor {adviser.state ? 'está disponible' : 'no está disponible'}
                            </Text>
                            <Text style={styles.subTitle}>
                                Tenemos tos caneles de comunicación disponibles para usted
                                
                            </Text>
                            <View style={styles.lineHorizontal}></View>
                            <View>
                                <TouchableOpacity onPress={videoCall} style={styles.imageBtn}>
                                    <Image source={Images.callBtn} style={styles.imageCallButton} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
            }
        </ImageBackground >
    );
}

export default LobbyContainer

const heighDimension = dimensions.height * PixelRatio.get();
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around'
    },
    header: {
        flex: 0.5,
        alignItems: 'flex-start',
        justifyContent: 'space-around'
    },
    content: {
        height: dimensions.height * 0.4 * sizeResponsive,
    },
    name: {
        color: 'white',
        fontSize: MetricsSizes.regularMoreLarge,
        textAlign: 'left',
        fontWeight: 'bold',
    },
    nameA: {
        color: 'white',
        fontSize: MetricsSizes.regular,
        textAlign: 'left',
        fontWeight: 'normal',
        width: dimensions.width * sizeResponsive
    },
    lineHorizontal: {
        width: MetricsSizesW.maxLargeW * 0.82,
        height: MetricsSizes.tiny * 0.8,
        borderBottomColor: Colors.yellow,
        borderBottomWidth: MetricsSizesW.tinyW * 0.4,
        position: 'relative',
        top: '2%',
        marginLeft: '3%'
    },
    imageBtn: {
        marginTop: '10%',
        alignSelf: 'center'
    },
    title: {
        marginTop: dimensions.height * -0.05* sizeResponsive,
        color: Colors.gray,
        fontSize: FontSize.regularLarge,
        marginLeft: '3%',
        fontWeight: 'bold'
    },
    subTitle: {
        color: Colors.textGray,
        fontFamily: 'Roboto',
        fontSize: FontSize.regular,
        lineHeight: MetricsSizes.regularLarge,
        paddingLeft: '3%',
        paddingRight: '3%'
    },
    image: {
        width: dimensions.width * 0.15,
        height: dimensions.width * 0.15,
        marginLeft: dimensions.width * 0.1
    },
    imageCallButton: {
        width: dimensions.width * 0.85,
        height: dimensions.width * 0.3,
        resizeMode: 'contain'
    },
    bgHeaderGreen:{
        height: 
        Platform.OS === 'android' && heighDimension > 2800 ? dimensions.height * sizeResponsive * 0.8 :
            Platform.OS === 'android' && heighDimension > 2200 && heighDimension < 2800 ? dimensions.height * sizeResponsive * 0.85 :
                Platform.OS === 'android' && heighDimension > 2000 && heighDimension < 2200 ? dimensions.height * sizeResponsive * 0.9 :
                    Platform.OS === 'android' && heighDimension > 1400 && heighDimension < 1800 ? dimensions.height * sizeResponsive * 0.9 :
                        Platform.OS === 'android' && heighDimension > 1200 && heighDimension < 1401 ? dimensions.height * sizeResponsive * 1:
                            Platform.OS === 'android' && heighDimension > 800 && heighDimension < 1200 ? dimensions.height * sizeResponsive * 0.9 :
                                heighDimension > 2400 && heighDimension < 2800 ? dimensions.height * sizeResponsive :
                                    heighDimension > 2200 && heighDimension < 2400 ? dimensions.height * sizeResponsive * 1.12 :                
                                        heighDimension > 1400 && heighDimension < 1800 ? dimensions.height * sizeResponsive * 0.99 :
                                            heighDimension > 1200 && heighDimension < 1400 ? dimensions.height * sizeResponsive * 1.14 :
                                                dimensions.height * sizeResponsive * 0.92,
        width: dimensions.width
      },
      flex_content: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
      },
      flex_header: {
        width: dimensions.width,
        height: dimensions.height * 0.25,
      },
      flex_boddy:{
          width:dimensions.width,
          height:dimensions.height * 0.75
      }
});
const styles_stand = StyleSheet.create({
    header: {
        width: dimensions.width * 0.9,
        fontSize: FontSize.extraLarge, // 35
        fontWeight: 'bold',
        color: 'white',
        marginLeft: dimensions.width * 0.05,
        marginRight: dimensions.width * 0.05
    },
    label_second: {
        fontSize: FontSize.regularLarge,
        fontWeight: 'bold',
        color: 'white',
        marginTop: dimensions.height * 0.01,
        marginLeft: dimensions.width * 0.05,
        marginRight: dimensions.width * 0.06
    },
    label_third: {
        fontSize: FontSize.tiny,
        color: 'white',
        marginTop: dimensions.height * 0.01,
        marginLeft: dimensions.width * 0.05,
        marginRight: dimensions.width * 0.05
    },
    text_container: {
        marginTop: dimensions.height * 0.01,
        marginLeft: dimensions.width * 0.05,
        marginRight: dimensions.width * 0.05
    
    },
    image: {
        borderRadius: 200
    },
    label_name: {
        fontSize: FontSize.regularLarge,
        fontWeight: 'bold',
        color: Colors.gray,
    },
    label_subtype: {
        fontFamily: 'Roboto',
        fontSize: FontSize.regular,
        color: Colors.textGray,
        
    },
    lineHorizontal: {
        width: dimensions.width * 0.1,
        borderBottomColor: Colors.yellow,
        borderBottomWidth: MetricsSizesW.tinyW * 0.4,
        position: 'relative',
        top: dimensions.height * 0.01,
        marginLeft: dimensions.width * 0.01,
    },
    background: {
    height:
    Platform.OS === 'android' && heighDimension > 2800 ? dimensions.height * sizeResponsive * 0.96 :
      Platform.OS === 'android' && heighDimension > 2600 && heighDimension < 2800 ? dimensions.height * sizeResponsive * 1.06 :
        Platform.OS === 'android' && heighDimension > 2400 && heighDimension < 2600 ? dimensions.height * sizeResponsive * 1.1 :
          Platform.OS === 'android' && heighDimension > 2200 && heighDimension < 2400 ? dimensions.height * sizeResponsive * 1.1 :
            Platform.OS === 'android' && heighDimension > 2000 && heighDimension < 2200 ? dimensions.height * sizeResponsive * 1.1 :
              Platform.OS === 'android' && heighDimension > 1400 && heighDimension < 1800 ? dimensions.height * sizeResponsive * 1.2 :
                Platform.OS === 'android' && heighDimension > 800 && heighDimension < 1200 ? dimensions.height * sizeResponsive * 1.18 :
                    heighDimension > 2400 && heighDimension < 2800 ? dimensions.height * sizeResponsive :
                        heighDimension > 2200 && heighDimension < 2400 ? dimensions.height * sizeResponsive * 1.1 :                
                            heighDimension > 1400 && heighDimension < 1800 ? dimensions.height * sizeResponsive :
                                heighDimension > 1200 && heighDimension < 1400 ? dimensions.height * sizeResponsive * 1.12 :
                                    dimensions.height * sizeResponsive * 1.2,
        width: dimensions.width
    }
})