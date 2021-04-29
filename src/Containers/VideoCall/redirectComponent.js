// React
import React, { useEffect, useState } from 'react'
// Redux
import { useSelector } from 'react-redux'
//Components
import { Loading } from '@/Components'
// Services
import ListTaxes from '../../Services/Taxes/ListTaxes'
import GetConsultancyRoomService from '../../Services/ConsultancyRoom/GetConsultancyRoom';
//Utils
import firestore from '@react-native-firebase/firestore';
import { useCollectionData, useDocument } from 'react-firebase-hooks/firestore'

const RedirectContainer = ({ navigation, resolution }) => {

    const user = useSelector((state) => state.auth.user)
    const [redirectOk, setRedirectOk] = useState(false);
    const userStateQuery = firestore().doc('userState/' + user.uid);
    const [userState] = useDocument(userStateQuery);

    useEffect(() => { }, []);

    useEffect(() => {
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
                navigation.replace('Main');
            } catch (error) {
                console.error(error);
            }
        }
    }

    const redirect = async () => {
        const consultancyRoom = await GetConsultancyRoomService(user.uid);
        setRedirectOk(true);
        setTimeout(() => {
            navigation.replace('VideoCall', {
                sessionId: consultancyRoom.sessionid,
                token: consultancyRoom.usertoken,
                uid: user.uid,
                type: 'consultancy',
                employee: consultancyRoom.adviserid,
                resolution: resolution
            });
        }, 3000);
    }

    return (
        <Loading show={redirectOk} />
    );
}

export default RedirectContainer