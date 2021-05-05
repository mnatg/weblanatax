// React
import React from 'react'
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  PermissionsAndroid,
} from 'react-native';
// Redux
import { useSelector } from 'react-redux'
// Components
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
// Firebase
import storage from '@react-native-firebase/storage';
// Util
import moment from "moment";
import DocumentPicker from 'react-native-document-picker';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import getPath from '@flyerhq/react-native-android-uri-path';
import Toast from 'react-native-simple-toast';
// Styles
import {
  Colors,
  FontSize,
  MetricsSizes,
  MetricsSizesW
} from '@/Theme';
import Icon from 'react-native-vector-icons/Ionicons';

const ChatActions = ({
  sendImage
}) => {
  const userInfo = useSelector((state) => state.auth.user)

  const chooseDocument = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        {
          title: "App STORAGE Permission",
          message: "App needs access to your STORAGE ",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("STORAGE permission given");
      } else {
        console.error("STORAGE permission denied");
      }
    } catch (err) {
      console.error('Error al solicitar los permisos de la camara', err);
    }

    try {
      const granted2 = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: "App STORAGE Permission",
          message: "App needs access to your STORAGE ",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      );
      if (granted2 === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("STORAGE permission given");
      } else {
        console.error("STORAGE permission denied");
      }
    } catch (err) {
      console.error('Error al solicitar los permisos de la camara', err);
    }

    try {
      const response = await DocumentPicker.pick({
        type: [DocumentPicker.types.pdf,
        DocumentPicker.types.doc,
        DocumentPicker.types.docx,
        DocumentPicker.types.xlsx,
        DocumentPicker.types.xls,
        DocumentPicker.types.csv],
      });

      let email = userInfo.email;
      let currentDate = moment().format('yyyy-MM-DD');
      let reference = storage().ref(email + '/' + currentDate + '/' + response.name);
      const path = getPath(response.uri)
      Toast.show("Debe ingresar usuario y constraseña");
      await reference.putFile(path);
      const url = await reference.getDownloadURL();
      sendImage([{
        _id: email + '/' + currentDate + '/' + response.name,
        text: url,
        createdAt: new Date(),
        user: {
          name: email,
          avatar: userInfo.photoURL
        }
      }], true);


    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log("El usuario cancelo la operacion");
      } else {
        console.error('Error al cargar documento', err);
      }
    }
  }

  const chooseImage = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: "App Camera Permission",
          message: "App needs access to your camera ",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("Camera permission given");
      } else {
        console.error("Camera permission denied");
      }
    } catch (err) {
      console.error('Error al solicitar los permisos de la camara', err);
    }

    var options = {
      mediaType: 'photo',
      saveToPhotos: true
    };

    launchImageLibrary(options, async (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.error('ImagePicker Error: ', response.error);
      } else {

        let user = userInfo.email;
        let currentDate = moment().format('yyyy-MM-DD');
        let reference = storage().ref(user + '/' + currentDate + '/' + response.fileName);
        try {
          Toast.show("Cargando archivos por favor espere");
          await reference.putFile(response.uri)
          const url = await reference.getDownloadURL();
          sendImage([{
            _id: user + '/' + currentDate + '/' + response.fileName,
            image: url,
            createdAt: new Date(),
            user: {
              name: user,
              avatar: userInfo.photoURL
            }
          }]);
        } catch (ex) {
          console.error('Error al guardar imagen en storage: ', ex);
        }
      }
    });
  }

  const pickImage = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: "App Camera Permission",
          message: "App needs access to your camera ",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("Camera permission given");
      } else {
        console.error("Camera permission denied");
      }
    } catch (err) {
      console.error('Error al solicitar los permisos de la camara', err);
    }

    var options = {
      mediaType: 'photo',
      saveToPhotos: true
    };

    launchCamera(options, async (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.error('ImagePicker Error: ', response.error);
      } else {
        let user = userInfo.email;
        let currentDate = moment().format('yyyy-MM-DD');
        let reference = storage().ref(user + '/' + currentDate + '/' + response.fileName);
        try {
          Toast.show("Cargando archivos por favor espere");
          await reference.putFile(response.uri);
          const url = await reference.getDownloadURL();
          sendImage([{
            _id: user + '/' + currentDate + '/' + response.fileName,
            image: url,
            createdAt: new Date(),
            user: {
              name: user,
              avatar: userInfo.photoURL
            }
          }]);
        } catch (ex) {
          console.error('Error al guardar imagen en storage: ', ex);
        }
      }
    });
  }
  return (
    <TouchableOpacity
      style={[styles.container]}
    >
      <Menu
        rendererProps={{ anchorStyle: styles.anchorStyle }}
      >
        <MenuTrigger>
          <Icon
            name='attach-outline'
            size={FontSize.large}
            color={Colors.secundary}
          />
        </MenuTrigger>
        <MenuOptions customStyles={{ optionText: [styles.text, styles.slideInOption] }}>
          <MenuOption onSelect={() => pickImage()} customStyles={optionStyles}>
            <Icon
              name='camera-outline'
              size={MetricsSizes.regularLarge}
              color={Colors.secundary}
            />
            <Text style={styles.menuLabel}>Cámara</Text>
          </MenuOption>

          <MenuOption onSelect={() => chooseImage()} customStyles={optionStyles}>
            <Icon
              name='image-outline'
              size={MetricsSizes.regularLarge}
              color={Colors.secundary}
            />
            <Text style={styles.menuLabel} >Fotos y Videos</Text>
          </MenuOption>

          <MenuOption onSelect={() => chooseDocument()} customStyles={optionStyles}>
            <Icon
              name='document-outline'
              size={MetricsSizes.regularLarge}
              color={Colors.secundary}
            />
            <Text style={styles.menuLabel}>Documentos</Text>
          </MenuOption>
        </MenuOptions>
      </Menu>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width: MetricsSizesW.regularMoreLargeW * 1.04,
    height: MetricsSizes.regularMoreLarge * 1.04,
    marginLeft: MetricsSizesW.smallW,
    marginBottom: MetricsSizes.small,
  },
  menuLabel: {
    marginHorizontal: MetricsSizesW.smallW
  }
})

const optionStyles = {
  optionTouchable: {
    underlayColor: 'red',
    activeOpacity: 40,
  },
  optionText: {
    color: Colors.secundary,
  },
};

export default ChatActions
