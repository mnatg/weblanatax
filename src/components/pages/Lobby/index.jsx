// React
import React, { useState, useEffect } from 'react';
// Redux
import { useSelector, useDispatch } from 'react-redux';
import { onAddTaxes } from '../../../Store/actions/Taxes';
// Components
import AdviserLobby from './AdviserLobby';
// Auth
import { useFirestore } from 'reactfire';
import 'firebase/firestore';
import { useDocument } from 'react-firebase-hooks/firestore';
// Services
import GetConsultancyRoomService from '../../../Services/ConsultancyRoom/GetConsultancyRoom';
import GetAviserService from '../../../Services/Adviser/GetAdviser';
import ListTaxes from '../../../Services/Taxes/ListTaxes';
// Assets
import avatar from '../../../assets/images/Common/avatar.png';
//Navigation
import { useHistory } from 'react-router-dom';

const Lobby = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.user);
    const [open, setOpen] = useState(true);
    const [adviserPopUp, setAdviserPopUp] = useState(false);
    const [adviser, setAdviser] = useState({});
    const [consultancyRoom, setConsultancyRoom] = useState({});
    const [name, setName] = useState('');
    const [photoURL, setPhotoURL] = useState('');
    const userStateQuery = useFirestore().doc('userState/' + user.uid);
    const [userState] = useDocument(userStateQuery);
    let history = useHistory();

    useEffect(() => {
        console.log("Lobby userid",user.uid);
        if (user) {
            setName(user.name);
            setPhotoURL(user.photoURL);
        }
    }, []);

    useEffect(() => {
        console.log("Lobby useEfffect userState: ",userState);
        console.log("Lobby userid",user.uid);
        if(userState){
        console.log("Lobby useEfffect userState IF: ",userState.data().state);
            if (userState.data().state == 'initial') {
                history.push('/empieza-gratis');
            } else if(userState.data().state == 'consultancy') {
                consultancyData();
            } else if (userState.data().state == 'tax') {
                addTaxes();
            }
        }
    }, [userState]);
    
    const addTaxes = async () => {
        let taxes = await ListTaxes(user.uid);
        if (taxes && taxes.length > 0) {
            try {
                await dispatch(onAddTaxes(taxes));
                history.push('/Main');
            } catch (error) {
                console.error(error);
            }
        }
    }
    
    const consultancyData = async () =>{
        setOpen(false);
        let consultancy = await GetConsultancyRoomService(user.uid);
        setConsultancyRoom(consultancy);
        let adviser = await GetAviserService(consultancy.adviserid);
        setAdviser(adviser);
        if (!adviserPopUp && consultancyRoom.state) {
            setAdviserPopUp(true);
            alert(
                "Se le acaba de asignar un asesor"//,
                // "Desea entrar a video llamada con el",
                // [
                //     {
                //         text: "No",
                //         onPress: () => console.log("No, continue editing"),
                //         style: "cancel"
                //     },
                //     {
                //         text: "Si",
                //         onPress: () => videoCall(),
                //     }
                // ],
                // { cancelable: false }
            );
        }
    }

    const videoCall = async () => {
        // const resolution = await getResolution();
        const resolution = '1280x720';
        history.push('VideoCall', {
            sessionId: consultancyRoom.sessionid,
            token: consultancyRoom.usertoken,
            uid: user.uid,
            type: 'consultancy',
            employee: consultancyRoom.adviserid,
            resolution: resolution
        });
    }

    return (
        open ?
        <div style={{ marginTop: '5.5em', paddingLeft: '1em' }} >
            {
                photoURL != null ?
                    <img src={{ uri: photoURL }} ></img>
                    :
                    <img src={avatar} ></img>
            }
            <h2 > Bienvenido {name} </h2>
            <h5 style={{ color: '#9b9b9b' }} >Tus impuestos serán más simples con el asesoramiento que te damos.</h5>
            <div style={{
                width: '2.5em',
                borderBottom: 'solid #f5bf21' ,
                marginTop: '1%',
                marginBottom: '1%'}} >
            </div>
            <p style={{ fontSize: '1.5em', fontWeight: 'bold', color: '#009245' }} >
                Aun no se ha asignado un asesor, en un momento estaremos con usted.
            </p>
            <p style={{ fontWeight: 'bold', color: '#808080' }} >Expertos dedicados a tus impuestos de principio a fin.</p>
            <p style={{ fontSize: '0.85em', fontWeight: 600, color: '#808080' }} >Disponibilidad todo el año.</p>
            <p style={{ fontSize: '1.5em', fontWeight: 'bold', color: '#009245' }} >¡Comencemos!</p>
        </div>
        : // OR
        <AdviserLobby />
    )
}

export default Lobby
