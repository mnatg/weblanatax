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
import HomeP from '../Home/Home';


//Auth Redux
import { useDispatch } from 'react-redux'
import { onSignUp } from '../../../Store/actions/Auth'
import { Home } from '@material-ui/icons';


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

const SignUp = () => {

    const dispatch = useDispatch();
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    

    const firebase = useFirebaseApp();
    const provider = new firebaseG.auth.GoogleAuthProvider();
    var user = useUser();
    var autenticacion = false;

    const validation = async () => {
        if (email.length === 0 || password.length === 0) {
            return Toast('Todos los campos son requeridos.', "error");
        }
        else if (password.length < 6) {
            return Toast('La contraseña es demasiado corta. \nDebe tener más de 6 caracteres.', "error");
        }
        else {
            return handleForm();
        }
    }

    // Registro de usuario
    const handleForm = async () => {
        //setLoading(true);
        if (email == '' || password == '' || fullName == '') {
          Toast("Todos los campos son requridos","error");
          //setLoading(false);
          return
        } else if ( password.length < 6 ) {
          Toast("La contraseña debe tener 6 caracteres minimo","error");
          //setLoading(false);
          return
        }
        try {
          await dispatch(onSignUp({
            email: email,
            password: password,
            fullName: fullName
          }));
          setTimeout(() => {
            //setLoading(false)
          }, 5000);
        
        } catch (error) {
          //setLoading(false);
        }
      }


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

   

    console.log("hola sign in");
    {user.data?console.log("usuario: "+user.data):console.log("no hay usuario")}



   if(!autenticacion){
    return (
        <div className='signin-background'>

            <Grid container direction="column" justify="center" alignItems="center" className="sign-in-parent" >
                <div className="imgs">
                    <img className="logo-lana" src={logoLana} alt="LANA TAX logo"/>
                    <img src={logo}  alt="M&A TAX GROUP logo" />
                </div>
                <Grid className="label-container" container direction="column" justify="flex-start">
                    <label className="label-text" htmlFor="FullName">FullName</label>
                    <input className="input-text" type="FullName" name="FullName" id="FullName" placeholder="Usuario" value={fullName}
                        onChange={(e) => setFullName(e.target.value)} />
                    <label className="label-text" htmlFor="Email">Correo</label>
                    <input className="input-text" type="email" name="email" id="Email" placeholder="Correo" value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                    <label className="label-text" htmlFor="Password">Contraseña</label>
                    <input className="input-text" type="password" name="password" id="Password" placeholder="Contraseña" value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                </Grid>
                <button className="button-green" onClick={validation}>! Registrarse</button>
            </Grid>
            <PopUpForgot open={open}  onClose={handleClose} title='Recuperar Contraseña'  />
        </div>
    )}
    else{
      return(
        <HomeP></HomeP>
      )
    }

}


export default SignUp;