// React
import React, { useState } from 'react';
// Components
import { Grid } from '@material-ui/core';
import Toast from '../../../utils/Toast';
import PopUpForgot from '../PopUp/PupUp-Forgot';
// Styles
import '../../../assets/styles/SignIn/sign-in.scss';
import 'react-toastify/dist/ReactToastify.css';
// Assets
import logo from '../../../assets/images/Home/signin/logo-m-a.png';
import logoLana from '../../../assets/images/Home/signin/lana.png';
import googleIcon from '../../../assets/images/Home/signin/icon-google.png';
//Auth
import firebaseG from 'firebase/app';
import 'firebase/auth';
import { useFirebaseApp } from 'reactfire';

import { useUser } from 'reactfire';
import Navbar from '../Home/Navbar';

//---------- data de usuario
export const homeObjOne = {
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'VIEW OUR PRODUCTS',
    headline: 'Shop through our catalog of products',
    description:
      'We provide worldwide shipping to all countries. If there are any issues, just issue a refund and we will process your request',
    buttonLabel: 'Shop Now',
    imgStart: '',
    img: 'images/svg-4.svg',
    alt: 'Credit Card'
  };

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const firebase = useFirebaseApp();
    const provider = new firebaseG.auth.GoogleAuthProvider();

    const validation = async () => {
        if (email.length === 0 || password.length === 0) {
            return Toast('Todos los campos son requeridos.', "error");
        }
        else if (password.length < 6) {
            return Toast('La contraseña es demasiado corta. \nDebe tener más de 6 caracteres.', "error");
        }
        else {
            return signIn();
        }
    }

    // Ingreso de usuario
    const signIn = async () => {
        await firebase.auth().signInWithEmailAndPassword(email, password)
            .catch((err) => {
                if(err.code === "auth/invalid-email"){
                    Toast('Correo invalido.', "error");
                }else if(err.code === "auth/user-not-found" || err.code === "auth/wrong-password"){
                    Toast('Correo o contraseña incorrectos.', "error");
                }else if (err.code === "auth/too-many-requests"){
                    Toast('Ha superado el número de intentos.\nIntente de nuevo más tarde.', "error");
                }else{
                    Toast(err.message, "error");
                }
            });
            
    };


    // Ingreso por google de usuario
    const google = () => {
        firebaseG.auth().signInWithPopup(provider)
            .catch((err) => {
                console.error("Error al iniciar sesión con google: " + err)
            });
    }

    const [open, setOpen] = useState(false);

    const handleClickOpen = (open) => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    var user = useUser();

    console.log("hola sign in");
    {user.data?console.log("usuario: "+user.data):console.log("no hay usuario")}

    return (
        <div className='signin-background'>

            <Grid container direction="column" justify="center" alignItems="center" className="sign-in-parent" >
                <div className="imgs">
                    <img className="logo-lana" src={logoLana} alt="LANA TAX logo"/>
                    <img src={logo}  alt="M&A TAX GROUP logo" />
                </div>
                <Grid className="label-container" container direction="column" justify="flex-start">
                    <label className="label-text" htmlFor="Email">Correo</label>
                    <input className="input-text" type="email" name="email" id="Email" placeholder="Correo" value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                    <label className="label-text" htmlFor="Password">Contraseña</label>
                    <input className="input-text" type="password" name="password" id="Password" placeholder="Contraseña" value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                </Grid>
                <button className="button-green" onClick={validation}>Ingresar</button>
                <button className="forgot-password"  onClick={handleClickOpen}>¿Olvidaste tu contraseña?</button>
                <button className="button-google" onClick={google}>
                    <img src={googleIcon}  alt="Icono de Google" />
                    <p>Ingresar con Google</p>
                </button>
            </Grid>
            <PopUpForgot open={open}  onClose={handleClose} title='Recuperar Contraseña'  />



        </div>
    )

}


export default SignIn;