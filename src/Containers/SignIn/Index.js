// React
import React, { useEffect, useState } from 'react'
// Redux
import { useDispatch } from 'react-redux'
// Components
//import { Button, Loading } from '@/Components'
//import { Button, Loading } from '../../components/pages/Home/'
// Auth
import { onLogin } from '../../Store/actions/Auth'
import { GoogleSignin } from 'react-google-login';
import { onFacebookSignIn, onGoogleSignIn } from '../../Store/actions/Auth'
//import auth from '@react-native-firebase/auth';
import auth from  'firebase/app';
// Utils
//import Toast from 'react-native-simple-toast';
import Toast from '../../utils/Toast';
//import AwesomeAlert from 'react-native-awesome-alerts';
// Styles


const SignInContainer = ({ navigation }) => {

  const dispatch = useDispatch()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [forgotEmail, setForgotEmail] = useState('');
  


  GoogleSignin.configure({
    webClientId: '1099491225094-mltd5mcaeeg0l3f0e0t4an291svb2fo3.apps.googleusercontent.com',
  });

  const signIn = async () => {
    if (email == '' || password == '') {
      Toast("Debe ingresar usuario y constraseña");
     
    } else {
      ////setLoading(true);
      const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
      if (expression.test(String(email).toLowerCase())) {
        try {
          await dispatch(onLogin({
            email: email,
            password: password,
            strategy: "email"
          }));
          setTimeout(() => {
           // //setLoading(false)
          }, 5000);
        } catch (error) {
          //setLoading(false)
        }
      } else {
        Toast("Ingrese un correo en un formato valido")
        //setLoading(false);
      }
    }
  }

  const signWithGoogle = async () => {
    //setLoading(true);
    try {
      await dispatch(onGoogleSignIn({
        strategy: "email"
      }));
      //setLoading(false)
    } catch (error) {
      //setLoading(false);
    }

  }

  const signWithFacebook = async () => {
    //setLoading(true);
    try {
      await dispatch(onFacebookSignIn({
        strategy: "email"
      }));
      //setLoading(false)
    } catch (error) {
      //setLoading(false)
    }
  }

  const keyboardDidShow = () => {
    //setKeyboard(true)
  };

  const keyboardDidHide = () => {
    //setKeyboard(false)
  };

  


  const forgotPassword = async () => {
    if (forgotEmail == '') {
      Toast("Debe ingresar un correo");
    } else {
      auth()
        .sendPasswordResetEmail(forgotEmail)
        .then()
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            Toast("Correo enviado");
          } else {
            Toast("Ocurrio un error al ingresar");
            console.error("error al crear usuario:", error)
          }
        })
    }
  }


  return (
    <div> 
    </div>
  )
}

export default SignInContainer