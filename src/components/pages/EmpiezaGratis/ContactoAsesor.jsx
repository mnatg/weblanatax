//React
import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
//Styles
import '../../../assets/styles/Home/Home.scss';
import '../../../assets/styles/QuienesSomos/QuienesSomos.scss';
import { Grid, Paper } from '@material-ui/core';

//images
import callBtn from '../../../assets/images/EmpiezaGratis/callBtn.png';
import imagenB from '../../../assets/images/QuienesSomos/free-phone-12-mockup.png'
//Services
import GetTalkSessionsService from '../../../Services/TalkSession/GetTalkSessions'
import SendNotification from '../../../Services/Notication/SendNotification'

// Util
import Toast from '../../../utils/Toast';
import ListTaxes from '../../../Services/Taxes/ListTaxes'


// Auth
import { useFirestore, useFirebaseApp, useAuth } from 'reactfire';
import 'firebase/firestore';
import { useDocument,useCollectionData  } from 'react-firebase-hooks/firestore';
import { useIdleTimer } from 'react-idle-timer';

//Auth Redux
import { useDispatch } from 'react-redux'
import { onAddTaxes } from '../../../Store/actions/Taxes'




function ContactoAsesor(props) {

  /*const name = props.name;
  const apellido = props.apellido;

  console.log("nombre: ", name);
  console.log("apellido: ", apellido);*/



  const [loading, setLoading] = useState(false);
  const talkSessionRef = useFirestore().collection('TalkSession');
  const talkSessionquery = talkSessionRef.where('avaliable', '==', true);
  const [talkSessions] = useCollectionData(talkSessionquery, { idField: 'sessionId' });

  const [offRedirect, setOffRedirect] = useState(false);


  const user = useSelector((state) => state.auth.user)
 
  const [redirectOk, setRedirectOk] = useState(false);
  const userStateQuery = useFirestore().doc('userState/' + user.uid);
  //const userStateQuery = useFirestore().doc('userState/' + "4j70DGXhFDNnyAwe7IHGbSUaln23");
  const [userState] = useDocument(userStateQuery);

  let history = useHistory();
  const dispatch = useDispatch();



  useEffect(() => {
    console.log("Contacto asesor useEffect userstate: ",userState);
    console.log("ContactoAsesor userId: ",user.uid);
    if (!offRedirect) {
      if (userState) {
        if (userState.data().state == 'lobby' || userState.data().state == 'consultancy') {
         history.push('/lobby');
        } else if (userState.data().state == 'tax') {
          addTaxes();
        }
      }
    }
  }, [userState]);


  const addTaxes = async () => {
    let taxes = await ListTaxes(user.uid);
    if (taxes && taxes.length > 0) {
      try {
        await dispatch(onAddTaxes(taxes));
        history.push('/taxes');
      } catch (error) {
        console.error(error);
      }
    }
  }



  const getResolution = async () =>{

    return "1920x1080";

}

  const handleContacWithUs = async () => {

    console.log("handleContactWithUs: talk sessions: ",talkSessions);

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
       /*SendNotification(message);
        const firestore = firebase.firestore();
        firestore.collection('TalkSession').doc(first_session.sessionid).update({
          avaliable: false
        });*/

        console.log("handleContactWithUs: messageNotification: ",message);
        console.log("handleContactWithUs: sessionId: ",first_session.sessionid);
        console.log("handleContactWithUs: token: ",first_session.usertoken);
        console.log("handleContactWithUs: uid: ",user.uid);
        console.log("handleContactWithUs: talk sessions: ",user.uid);
        console.log("handleContactWithUs: employee: ", talkSession.receptionist);

        history.push({
          pathname:'/video-call',
          search: '',
          state:{
            sessionId: first_session.sessionid,
            token: first_session.usertoken,
            uid: user.uid,
            type: 'reception',
            employee: talkSession.receptionist,
            resolution: resolution}
      });
        break;
      }

    } else {
      Toast("En este momento ninguno de nuestros recepcionistas esta disponible por favor intente nuevamente mas tarde", "error")
    }
  }

  return (
    <>
    <div className='Rectangle-quiene'>
      <Grid className="ContainerGrid">
        <div className="GridLeft">
          <img className="imagenBQuienes" src={imagenB} alt="imagenB" /></div>
        <div className="GridRight">
          <p className='SecondTitle'>Bienvenidos a M&A Tax Group</p>
          <p className='SecondText'>
            Expertos dedicados a tus impuestos de principio a fin
          <br></br>
          Disponibles todo el año<br></br>¡Comencemos!</p>
          <br></br>
         
            <img onClick={handleContacWithUs} className="btn-start" src={callBtn} alt="callBtn" />
          
        </div>

      </Grid>
      <Grid className="ContainerGridTablet">
        <div className="GridsUp">
          <img className="imagenBQuienes" src={imagenB} alt="imagenB" /></div>
        <div className="GridUnder">
          <p className='SecondTitle'>Bienvenidos a M&A Tax Group</p>
          <p className='SecondText'>
            Expertos dedicados a tus impuestos de principio a fin
          <br></br>
          Disponibles todo el año<br></br>¡Comencemos!</p>
          <br></br>
          
            <img onClick={handleContacWithUs} className="btn-start" src={callBtn} alt="callBtn" />
         
        </div>

      </Grid>
    </div>
    </>
  );
}

export default ContactoAsesor;
