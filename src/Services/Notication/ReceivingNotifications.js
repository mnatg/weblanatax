// Firebase
import firestore from '@react-native-firebase/firestore';
import messaging from '@react-native-firebase/messaging';
// Show messaging
import { showMessage } from 'react-native-flash-message';
// Style
import { Colors } from '@/Theme';
import { useDispatch } from 'react-redux';
import { onAddToken } from '../../Store/actions/Token';

const notification = async (uid) => {

  try {
    const authStatus = await messaging().requestPermission();
    const enabled =
       authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
       authStatus === messaging.AuthorizationStatus.PROVISIONAL;
    const token = await messaging().getToken()
    setData(token, uid);
    await messaging().onMessage(async remoteMessage => {
      showMessage({
        message: remoteMessage.notification.title,
        description: remoteMessage.notification.body,
        backgroundColor: Colors.shadowGray,
        color: Colors.aquamarine,
        textStyle: {
          color: '#000000'
        }
      })
    });
    return token;
  } catch (error) {
    console.error("Error al recibir notificacion: ", error);
  }
};

const setData = async (token, uid) => {
  const token_data = {
    userId: uid,
    token: token
  }
  firestore().collection('FMC_Tokens').doc(token).set(token_data)
    .then(() => {
      console.log("Se ha escrito token de : " + uid)
    }).catch(e => {
      console.error("Error adding: ", e)
    })
}
export default notification;