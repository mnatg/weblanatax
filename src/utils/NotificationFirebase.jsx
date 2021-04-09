import firebase from 'firebase/app';
import 'firebase/messaging';

const notification = async () => {
    
try{
    const messaging = firebase.messaging()
    Notification.requestPermission().then(()=>{
      return messaging.getToken()
    })
}catch(error){
    console.error("Error al enviar notificacion: ", error);

}
};



export default notification;