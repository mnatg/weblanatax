import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// Auth
import { useFirestore, useFirebaseApp, useAuth } from 'reactfire';
import 'firebase/firestore';
import { useDocument } from 'react-firebase-hooks/firestore';
import { useIdleTimer } from 'react-idle-timer';
// import GetConsultancyRoomService from '../../../Services/ConsultancyRoom/GetConsultancyRoom';
// import GetAviserService from '../../../Services/Adviser/GetAdviser';
import ListTaxes from '../../../Services/Taxes/ListTaxes';
import { onAddTaxes } from '../../../Store/actions/Taxes';
import avatar from '../../../assets/images/Common/avatar.png';

//Navigation
import { Link, useHistory } from 'react-router-dom';
import { ContactSupportOutlined } from '@material-ui/icons';

const Lobby = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.user);
    const [open, setOpen] = useState(true);
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
        // LobbyContainer
        // let consultancy = await GetConsultancyRoomService(user.uid);
        // setConsultancyRoom(consultancy);
        // let adviser = await GetAviserService(consultancy.adviserid);
        // setAdviser(adviser);
        // if (!adviserPopUp && consultancyRoom.state) {
        //     setAdviserPopUp(true);
        //     alert(
        //         "Se le acaba de asignar un asesor",
        //         "Desea entrar a video llamada con el",
        //         [
        //             {
        //                 text: "No",
        //                 onPress: () => console.log("No, continue editing"),
        //                 style: "cancel"
        //             },
        //             {
        //                 text: "Si",
        //                 onPress: () => videoCall(),
        //             }
        //         ],
        //         { cancelable: false }
        //     );
        // }
    }

    // In LobbyContainer
    const videoCall = async () => {
        // const resolution = await getResolution();
        // history.push('VideoCall', {
        //     sessionId: consultancyRoom.sessionid,
        //     token: consultancyRoom.usertoken,
        //     uid: user.uid,
        //     type: 'consultancy',
        //     employee: consultancyRoom.adviserid,
            // resolution: resolution
        // });
    }

    return (
        <div>
            {
                photoURL != null ?
                    <img source={{ uri: photoURL }} ></img>
                    :
                    <img source={avatar} ></img>
            }
            <h1 > Bienvenido {name} </h1>
        </div>
    )
}

export default Lobby
