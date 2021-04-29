// React
import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  Linking,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet
} from 'react-native'
// Redux
import { useSelector } from 'react-redux'
// Styles
import {
  Layout,
  Images,
  Fonts,
  Colors,
  MetricsSizes,
  MetricsSizesW,
  dimensions,
  sizeResponsive,
  FontSize
} from '@/Theme'
import Icon from 'react-native-vector-icons/Ionicons';
// Utils
import moment from "moment";
import DocumentPicker from 'react-native-document-picker';
import getPath from '@flyerhq/react-native-android-uri-path'
import Toast from 'react-native-simple-toast';
// Firebase
import storage from '@react-native-firebase/storage';


const TaxController = ({ navigation, route }) => {

  const [files, setFiles] = useState([]);
  const userInfo = useSelector((state) => state.auth.user)
  const [taxId, setTaxId] = useState('');
  const [name, setName] = useState('');
  const [photoURL, setPhotoURL] = useState(''); // Cambiar por imagen de consultor

  useEffect(() => {
    getFiles();
  }, [])

  const getFiles = async () => {
    let user = userInfo.uid;
    setName(userInfo.name);
    setPhotoURL(userInfo.photoURL);
    setTaxId(route.params.id)
    let reference = storage().ref(user + "/" + route.params.id);
    let files = await reference.list();
    setFiles(files.items);
  }

  const chooseDocument = async () => {
    try {
      const response = await DocumentPicker.pick({
        type: [
          DocumentPicker.types.images,
          DocumentPicker.types.pdf,
          DocumentPicker.types.doc,
          DocumentPicker.types.docx,
          DocumentPicker.types.xlsx,
          DocumentPicker.types.xls,
          DocumentPicker.types.csv],
      });
      let user = userInfo.uid;
      let currentDate = moment().format('yyyy-MM-DD-hh:mm:ss');
      let reference = storage().ref(user + '/' + taxId + "/" + currentDate + '-' + response.name);

      const path = getPath(response.uri)
      Toast.show("Cargando archivos por favor espere");
      await reference.putFile(path)
      //const url = await reference.getDownloadURL();
      getFiles();

    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log("El usuario cancelo la operacion");
      } else {
        console.error('Error al cargar documento', err);
      }
    }
  }

  const openLink = async (url) => {
    let downloadUrl = await storage().ref(url).getDownloadURL();
    const supported = await Linking.canOpenURL(downloadUrl);
    if (supported) {
      await Linking.openURL(downloadUrl);
    } else {
      Alert.alert(`Don't know how to open this URL: ${downloadUrl}`);
    }
  }

  return (
    <View style={[Layout.bgContainerLight, styles.container ]}>
      <View style={Layout.paddingRegular} >
        {/* {
          photoURL != null ?
            <Image source={{ uri: photoURL }} ></Image>
            : */}
            <Image source={Images.avatar} ></Image>
        {/* } */}
        <Text style={styles.welcome}>
          Bienvenido {name}
        </Text>
        <Text style={styles.listTitle}>
          Tus documentos:
        </Text>
      </View>
      <View style={[styles.yellowLine]}/>
      <ImageBackground source={Images.whiteBody} style={{width: '100%'}} 
      imageStyle={styles.background}>
        <ScrollView style={[styles.documents, Layout.paddingRegular]}>
          {
            files.length > 0 ?
              files.map((item, key) => {
                let name = item.path.split('/').pop();
                return (
                  <TouchableOpacity key={key} onPress={() => openLink(item.path)} style={styles.document}>
                    <Icon name="document-outline" color={Colors.blueGray} size={MetricsSizes.regularMoreLarge} style={styles.documentIcon} />
                    <Text style={styles.documentName}>
                     {name.length > 40
                    ?name.slice(0, 33) + '..' + name.slice(-4)
                    :name
                    }
                    </Text>
                  </TouchableOpacity>)
              })
              : // OR
              <Text style={[Fonts.textSmall, Fonts.textGray, Fonts.textCenter]}>
                Aún no subes ningun documento
              </Text>
          }
        </ScrollView>
        <View style={[styles.btns, Layout.paddingRegular]}>
          <TouchableOpacity style={styles.btn}
            onPress={chooseDocument}
          >
            <Text style={styles.txtBtn}>
              Agregar documento
            </Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.btns, Layout.paddingRegular]}>
          <TouchableOpacity style={styles.btn}
            onPress={() => navigation.navigate('ChatRoom', { adviserId: route.params.adviserId })}
          >
            <Text style={styles.txtBtn}>
              Contactar asesor
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View >
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    paddingLeft: 0
  },
  welcome: {
    fontSize: FontSize.regularLarge,
    letterSpacing: -0.6,
    color: Colors.gray,
    fontWeight: 'bold',
    marginTop: dimensions.height * 0.023
  },
  listTitle: {
    fontSize: FontSize.regular,
    letterSpacing: -0.6,
    color: Colors.textGray,
    fontWeight: 'bold'
  },
  yellowLine: {
    width: MetricsSizesW.maxLargeW * 0.82,
    height: MetricsSizes.tiny * 0.8,
    borderBottomColor: Colors.yellow,
    borderBottomWidth: MetricsSizesW.tinyW * 0.4,
    marginTop: dimensions.height * 0.05,
    marginLeft: MetricsSizesW.regularLargeW
  },
  background: { 
    height: dimensions.height * sizeResponsive, 
    width: dimensions.width
  },
  documents: {
    marginTop: MetricsSizes.maxLarge,
    height: dimensions.height * 0.4
  },
  document: {
    flexDirection: "row",
    borderBottomWidth: MetricsSizesW.tinyW * 0.2,
    width: dimensions.width * 0.93,
    borderColor: Colors.textGray
  },
  documentIcon: {marginTop: MetricsSizes.small * 1.2},
  documentName: {
    paddingTop: MetricsSizes.regular,
    paddingBottom: MetricsSizes.regular,
    paddingLeft: MetricsSizesW.smallW,
    color: Colors.textGray,
    width: dimensions.width * 0.855,
    fontSize: FontSize.small
  },
  btns: {
    marginTop: MetricsSizes.regular,
    marginBottom: MetricsSizes.regular,
    width: dimensions.width * 0.95
  },
  btn: {
    backgroundColor: Colors.aquamarine,
    alignItems: 'center',
    padding: '3%',
    borderRadius: 20,
    height: dimensions.height * 0.06
  },
  txtBtn: {
    color: 'white',
    fontSize: FontSize.small
  }
})

export default TaxController
