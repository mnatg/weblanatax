import firebase from 'firebase/app';
import 'firebase/messaging';
import 'firebase/firestore';
const notification = async (uid) => {
    try {
        const messaging = firebase.messaging();
        Notification.requestPermission().then(() => {
            let token = messaging.getToken({ vapidKey: 'BM7blrW3tiAfXuqOTw4IpbMrLNlCH7ljFlE9EDMkPqevXuUWByJb57RW6Gz4dtbBnZ884QCCn_8jICxKmq0YE3A' })
            .then((currentToken) => {
              if(currentToken){
                console.log('currentToken:['+currentToken+']');
                setData(currentToken, uid);
              } else {
                console.log ('No registration token available. Request permission to generate one.')
              }  
            }).catch((err) => {
              console.log('An error occurred while retrieving token. ', err);
      
            });
            console.log('TOKEN' + token);
            return token;
          });
          messaging.onMessage((payload) => {
            console.log("payload");
            console.log(payload);
          });
        } catch (error) {
          console.error("Error al enviar notificacion: ", error);
        }
      };
      const setData = async (t, UID) => {
        const firestore = firebase.firestore();
        const data = {
          userId: UID, 
          token: t
        }
        firestore.collection('FMC_Tokens').doc(UID).set(data)
        .then(docRef => {
          console.log("Se ha escrito en: "+ docRef)
        }).catch(e => {
          console.log("Error adding: " + e)
        })
      }
export default notification;