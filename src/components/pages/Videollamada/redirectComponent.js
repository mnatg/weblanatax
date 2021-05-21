// React
import React, { useEffect, useState } from 'react'

//Components
import { loadingEmotic } from   '../../loading/loadingEmotic'
// Services
import ListTaxes from '../../../Services/Taxes/ListTaxes'
import GetConsultancyRoomService from '../../../Services/ConsultancyRoom/GetConsultancyRoom';
// Util
import Toast from '../../../utils/Toast';
// Auth
import { useFirestore, useFirebaseApp, useAuth } from 'reactfire';
import 'firebase/firestore';
import { useDocument } from 'react-firebase-hooks/firestore';
import { useIdleTimer } from 'react-idle-timer';
// Redux
import { useSelector,useDispatch } from 'react-redux'
import { onAddTaxes } from '../../../Store/actions/Taxes'

//Navigation
import { Link, useHistory, withRouter } from 'react-router-dom';
import { Navigation } from '@material-ui/icons';
//Loading
import LoadingEmotic from '../../loading/loadingEmotic';



const RedirectContainer = ({ resolution }) => {

    const dispatch = useDispatch()
    const user = useSelector((state) => state.auth.user)
    //console.log("ContactoAsesor user: ",user.uid);
    const [redirectOk, setRedirectOk] = useState(false);
    const userStateQuery = useFirestore().doc('userState/' + user.uid);
    //const userStateQuery = useFirestore().doc('userState/' + "4j70DGXhFDNnyAwe7IHGbSUaln23");
    const [userState] = useDocument(userStateQuery);
    console.log("Redirect Component userState: ",userState);

    let history = useHistory();

    useEffect(() => {
        if(userState != undefined){
     
       
            console.log("Redirect Component useEfffect userState: ",userState.data().state);
            console.log("Redirect Component redirect: ",redirectOk);
        }
        if (userState) {
            if (userState.data().state == 'initial') {
                //navigation.replace('Dashboard');
            } else if (userState.data().state == 'consultancy') {
                redirect();
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
                history.push('/taxes');
            } catch (error) {
                console.error(error);
            }
        }
    }

    const redirect = async () => {
        const resolution = '1280x720';
        const consultancyRoom = await GetConsultancyRoomService(user.uid);
        setRedirectOk(true);
        console.log("redireccionando consultancy redirect component")
        console.log("redirect component consultancy room: ", consultancyRoom)
        setTimeout(() => {
            /*history.push({
                pathname:'/Lobby',
                search: ''
            });*/
            history.push({
                pathname:'/video-call-consultor',
                state: {
                    sessionId: consultancyRoom.sessionid,
                    token: consultancyRoom.usertoken,
                    uid: user.uid,
                    type: 'consultancy',
                    employee: consultancyRoom.adviserid,
                    resolution: resolution
                }
            });
            setRedirectOk(false);
        }, 3000);
    }

  
    return (
        <>
        {redirectOk && <LoadingEmotic/>}
        </>
    );
}

export default withRouter(RedirectContainer)