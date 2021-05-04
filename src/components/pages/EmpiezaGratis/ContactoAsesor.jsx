import React, { useState, useEffect } from 'react';
import '../../../assets/styles/Home/Home.scss'
import '../../../assets/styles/QuienesSomos/QuienesSomos.scss'
import imagenB from '../../../assets/images/QuienesSomos/free-phone-12-mockup.png'
import { Link } from 'react-router-dom';
import { Grid, Paper } from '@material-ui/core';

//images
import callBtn from  '../../../assets/images/EmpiezaGratis/callBtn.png';
//Services
import GetTalkSessionsService from '../../../Services/TalkSession/GetTalkSessions'
import ListTaxes from '../../../Services/Taxes/ListTaxes'
import SendNotification from '../../../Services/Notication/SendNotification'
import { onAddTaxes } from '../../../Store/actions/Taxes'
// Util
import Toast from '../../../utils/Toast';
import 'firebase/firestore';
import firebase from 'firebase/app';
//import { useCollectionData, useDocument } from 'react-firebase-hooks/firestore'
//import NetInfo from "@react-native-community/netinfo";

function ContactoAsesor (props)  {

  const name = props.name;
  const apellido = props.apellido;

  console.log("nombre: ",name);
  console.log("apellido: ",apellido);



  const firestore = firebase.firestore();
  const [loading, setLoading] = useState(false);

  //const talkSessionRef = firestore().collection('TalkSession');

  const talkSessionquery = firestore.collection('TalkSession').where('avaliable', '==', true);

  //const [talkSessions] = useCollectionData(talkSessionquery, { idField: 'sessionId' });

  const [talkSessions] = '';

  const [offRedirect, setOffRedirect] = useState(false);

  const getResolution = async () =>{
  
      return "1920x1080";
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

        /*
        navigation.replace('VideoCall', {
          sessionId: first_session.sessionid,
          token: first_session.usertoken,
          uid: user.uid,
          type: 'reception',
          employee: talkSession.receptionist,
          resolution: resolution
        });*/
        break;
      }
    } else {
      Toast("En este momento ninguno de nuestros recepcionistas esta disponible por favor intente nuevamente mas tarde","error")
    }
  }




  return (
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
          <Link to={{pathname: '/empieza-gratis-videollamada/7'}}>
          <img onClick={handleContacWithUs} className="btn-start" src={callBtn} alt="callBtn"/>
        </Link>
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
          <Link to='/'>
          <img onClick={handleContacWithUs} className="btn-start" src={callBtn} alt="callBtn"/>
        </Link>
        </div>
      
      </Grid>
    </div>



  );
}

export default ContactoAsesor;
