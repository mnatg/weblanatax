import firestore from '@react-native-firebase/firestore';
import messaging from '@react-native-firebase/messaging';

const deleteToken = async (token) => {
  try {
    await messaging().deleteToken();
    deleteData(token);
  } catch (error) {
    console.error("Error al eliminar notificacion: ", error);
  }
};
const deleteData = async (token) => {
  try {
    firestore().collection('FMC_Tokens').doc(token).delete();
  } catch (ex) {
    console.error("Error al eliminar token: " + ex)
  }
}
export default deleteToken;