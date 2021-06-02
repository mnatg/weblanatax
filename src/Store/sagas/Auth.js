//React Common
import { useDispatch } from 'react-redux'
//Services
import createUserService from '../../Services/User/CreateUser'
import LoginService from '../../Services/User/LogIn'
//Sagas - Redux
import { UPDATE_USER, ERROR } from "../Types"
import { put, call } from "redux-saga/effects"
//Login frameworks
import auth from 'firebase';
//import { LoginManager, AccessToken, AppEventsLogger } from 'react-fbsdk';
import Toast from '../../utils/Toast';

//Firebase Auth
import firebase from 'firebase/app';
import 'firebase/auth';



const SignInEmailStrategy = (email, password) => {
  return firebase.auth()
    .signInWithEmailAndPassword(email, password)
    .then(async (data) => {
      let user_object = {
        email: data.user.email,
        uid: data.user.uid,
        photoURL: data.user.photoURL,
        name: data.user.displayName
      }
      return (user_object)
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        Toast("El correo ingresado ya esta en uso", "error");
        console.log('That email address is already in use!', "error");
      } else if (error.code === 'auth/invalid-email' || error.code === 'auth/user-not-found') {
        Toast("El correo ingresado no es valido", "error");
      } else if (error.code === 'auth/wrong-password') {
        Toast("La clave ingresada no es correcta", "error");
      } else {
        Toast("Ocurrio un error al ingresar", "error");
        console.error(error);
      }
      throw error;
    })
}


const signUpEmailStrategy = (email, password, fullName) => {
  return firebase.auth()
    .createUserWithEmailAndPassword(email, password)
    .then(async (data) => {
      console.log("LOGIN 2")
      let user_object = {
        email: data.user.email,
        uid: data.user.uid,
        photoURL: data.user.photoURL,
        name: fullName
      }
      return (user_object)
    }).catch(error => {
      console.log("LOGIN 2")
      if (error.code === 'auth/email-already-in-use') {
        Toast("El usuario ya esta registrado en la plataforma", "error");
      } else if (error.code === 'auth/invalid-email' || error.code === 'auth/user-not-found') {
        Toast("El correo ingresado no es valido", "error");
      } else {
        Toast("Ocurrio un error al ingresar", "error");
        console.error("error al crear usuario:", error)
      }

      throw (error);
    })
}

export function* signUp(action) {
  let { email, password, fullName } = action.payload
  try {
    const user = yield call(signUpEmailStrategy, email, password, fullName)
    let service_user = {
      uid: user.uid,
      lastsign: new Date(),
      fullname: fullName
    }
    console.log(user);
    try {
      yield call(createUserService, service_user);
      yield put({ type: UPDATE_USER, payload: user })
      // AppEventsLogger.logEvent("fb_mobile_complete_registration");
    } catch (e) {
      Toast("Ocurrio un error al registrar", "error");
      throw e;
    }
  } catch (error) {
    yield put({ type: ERROR, payload: error })
  }
}

export function* logOut(action) {
  firebase.auth()
    .signOut()
}

export function* SignIn(action) {
  let { email, password, strategy } = action.payload
  try {
    if (strategy == "email") {
      const user = yield call(SignInEmailStrategy, email, password)
      console.log(user);
      try {
        yield call(LoginService, user.uid);
        yield put({ type: UPDATE_USER, payload: user })
      } catch (e) {
        Toast("Ocurrio un error al ingresar", "error");
        throw e;
      }
    }
  } catch (error) {
    yield put({ type: ERROR, payload: error })
  }
}