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
import { useCollectionData, useDocument } from 'react-firebase-hooks/firestore'
//import NetInfo from "@react-native-community/netinfo";

function ContactoAsesorData() {

  const firestore = firebase.firestore();

  const [loading, setLoading] = useState(false);

  const talkSessionRef = firestore().collection('TalkSession');
  const talkSessionquery = talkSessionRef.where('avaliable', '==', true);
  const [talkSessions] = useCollectionData(talkSessionquery, { idField: 'sessionId' });

  const [offRedirect, setOffRedirect] = useState(false);


const videoCallObject = {
  sessionId: first_session.sessionid,
        token: first_session.usertoken,
        uid: user.uid,
        type: 'reception',
        employee: talkSession.receptionist,
        resolution: resolution
};

}

export default videoCallObject;
