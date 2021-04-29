// React
import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  PixelRatio
} from 'react-native'
// Redux
import { useDispatch, useSelector } from 'react-redux'
// Auth
import { onLogout } from '@/Store/actions/Auth'
// Components
import { BgContainer, Loading } from '@/Components'
// Styles
import {
  Images,
  Colors,
  FontSize,
  MetricsSizes,
  MetricsSizesW,
  dimensions,
  sizeResponsive
} from '@/Theme'

//Services
import GetTalkSessionsService from '../../Services/TalkSession/GetTalkSessions'
import ListTaxes from '../../Services/Taxes/ListTaxes'
import SendNotification from '../../Services/Notication/SendNotification'
import { onAddTaxes } from '../../Store/actions/Taxes'
// Util
import Toast from 'react-native-simple-toast';
import firestore from '@react-native-firebase/firestore';
import { useCollectionData, useDocument } from 'react-firebase-hooks/firestore'
import NetInfo from "@react-native-community/netinfo";

const DashboardContainer = ({ navigation }) => {

  const dispatch = useDispatch()
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const user = useSelector((state) => state.auth.user)
  const [photoURL, setPhotoURL] = useState('');

  const userStateQuery = firestore().doc('userState/' + (user != null ? user.uid : 'empty'));
  const [userState] = useDocument(userStateQuery);

  const talkSessionRef = firestore().collection('TalkSession');
  const talkSessionquery = talkSessionRef.where('avaliable', '==', true);
  const [talkSessions] = useCollectionData(talkSessionquery, { idField: 'sessionId' });

  const [offRedirect, setOffRedirect] = useState(false);

  useEffect(() => {
    if (!offRedirect) {
      if (userState) {
        if (userState.data().state == 'lobby' || userState.data().state == 'consultancy') {
          navigation.replace('Lobby');
        } else if (userState.data().state == 'tax') {
          addTaxes();
        }
      }
    }
  }, [userState]);

  useEffect(() => {
    init();
  }, [])

  const init = async () => {
    setName(user.name)
    setPhotoURL(user.photoURL);
  }

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

  const logOut = () => {
    dispatch(onLogout());
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

  const handleContacWithUs = async () => {
    if (talkSessions.length > 0) {
      setLoading(true);
      setOffRedirect(true);
      let resolution = await getResolution();
      for (let talkSession of talkSessions) {
        let first_session = await GetTalkSessionsService(talkSession.receptionist);
        let message = {
          tittle: "¡Tienes un nuevo cliente!",
          content: "Revisa tú lobby.",
          to: talkSession.receptionist
        }
        SendNotification(message);
        firestore().collection('TalkSession').doc(first_session.sessionid).update({
          avaliable: false
        })
        navigation.replace('VideoCall', {
          sessionId: first_session.sessionid,
          token: first_session.usertoken,
          uid: user.uid,
          type: 'reception',
          employee: talkSession.receptionist,
          resolution: resolution
        });
        break;
      }
    } else {
      Toast.show("En este momento ninguno de nuestros recepcionistas esta disponible por favor intente nuevamente mas tarde")
    }
  }

  return (
    <BgContainer style={styles.bgSize}
      url={Images.grayBg}>
      <Loading show={loading} />
      <View style={styles.text_container}>
        {
          photoURL != null ?
            <Image source={{ uri: photoURL }} style={styles.image}></Image>
            :
            <Image source={Images.avatar} style={styles.image}></Image>
        }
        <Text style={styles.label_name}> Bienvenido {name} </Text>
        <Text style={styles.label_subtype}>Tus impuestos serán más simples con el asesoramiento que te damos.</Text>
        <View style={styles.lineHorizontal}></View>
        <Text style={styles.big_tittle}>
          Bienvenidos a M&A Tax Group
        </Text>
        <Text style={styles.label_name}>
          Expertos dedicados a tus impuestos de principio a fin
        </Text>
        <Text style={styles.label_subtype}>Disponibles todo el año</Text>
        <Text style={styles.label_green}>¡Comencemos!</Text>
        <TouchableOpacity
          onPress={handleContacWithUs}
        >
          <Image
            source={Images.callBtn}
            resizeMode="contain"
            style={styles.callImg} />
        </TouchableOpacity>
        <TouchableOpacity onPress={logOut}>
          <Text style={styles.textBack}>
            Cerrar Sesion
          </Text>
        </TouchableOpacity>
      </View>
    </BgContainer >
  )
}

const heighDimension = dimensions.height * PixelRatio.get();
const styles = StyleSheet.create({
  text_container: {
    marginLeft: dimensions.width * 0.05,
    marginRight: dimensions.width * 0.05,
    flex: 1,
    justifyContent: 'center'
  },
  image: {
    width: MetricsSizesW.largeW * 2,
    height: MetricsSizesW.largeW * 2,
    borderRadius: 200,
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
    width: MetricsSizesW.maxLargeW * 0.82,
    height: MetricsSizes.tiny * 0.8,
    borderBottomColor: Colors.yellow,
    borderBottomWidth: MetricsSizesW.tinyW * 0.4,
    marginTop: dimensions.height * 0.02,
    marginLeft: dimensions.width * 0.01,
    flex: 0.02
  },
  big_tittle: {
    fontSize: FontSize.maxLarge,
    fontWeight: 'bold',
    color: Colors.gray,
    marginLeft: dimensions.width * 0.01,
    letterSpacing: -1.62,
    lineHeight: MetricsSizes.maxLarge * 1,
    marginTop: dimensions.height * 0.1,
  },
  label_green: {
    fontSize: FontSize.regularLarge,
    fontWeight: 'bold',
    color: Colors.aquamarine,
    marginTop: dimensions.height * 0.04
  },
  callImg: {
    marginTop: dimensions.height * 0.0085,
    width: dimensions.width * 0.85,
    height: dimensions.width * 0.3,
    resizeMode: 'contain'
  },
  bgSize: {
    height:
      Platform.OS === 'android' && heighDimension > 2800 ? dimensions.height * sizeResponsive * 1 :
        Platform.OS === 'android' && heighDimension > 2600 && heighDimension < 2800 ? dimensions.height * sizeResponsive * 1.08 :
          Platform.OS === 'android' && heighDimension > 2400 && heighDimension < 2600 ? dimensions.height * sizeResponsive * 1.08 :
            Platform.OS === 'android' && heighDimension > 2200 && heighDimension < 2400 ? dimensions.height * sizeResponsive * 1.1 :
              Platform.OS === 'android' && heighDimension > 2000 && heighDimension < 2200 ? dimensions.height * sizeResponsive * 1.09 :
                Platform.OS === 'android' && heighDimension > 1400 && heighDimension < 1800 ? dimensions.height * sizeResponsive * 1.13 :
                  Platform.OS === 'android' && heighDimension > 1200 && heighDimension < 1401 ? dimensions.height * sizeResponsive * 1.1 :
                    Platform.OS === 'android' && heighDimension > 800 && heighDimension < 1200 ? dimensions.height * sizeResponsive * 1.14 :
                      heighDimension > 2400 && heighDimension < 2800 ? dimensions.height * sizeResponsive :
                        heighDimension > 1400 && heighDimension < 1800 ? dimensions.height * sizeResponsive :
                          dimensions.height * sizeResponsive * 1.13,
    width: dimensions.width
  },
  textBack: {
    fontSize: FontSize.small,
    marginBottom: dimensions.height * 0.01
  }
});


export default DashboardContainer

