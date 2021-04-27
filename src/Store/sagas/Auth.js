//React Common
import { useDispatch } from 'react-redux'
//Services
import createUserService from '../../Services/User/CreateUser'
import LoginService from '../../Services/User/LogIn'
//Sagas - Redux
import { UPDATE_USER, ERROR } from "../../Store/Types"
import { put, call } from "redux-saga/effects"
//Login frameworks
import auth from 'firebase';
import { GoogleSignin } from 'react-google-login';
//import { LoginManager, AccessToken, AppEventsLogger } from 'react-fbsdk';
import Toast from '../../utils/Toast';

const signInEmailStrategy = (email, password) => (
  auth()
    .signInWithEmailAndPassword(email, password)
    .then(async (data) => {
      //console.log("Inicio sesion el usuario: " + data.additionalUserInfo.profile.email);
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
        Toast.show("El correo ingresado ya esta en uso");
        console.log('That email address is already in use!');
      } else if (error.code === 'auth/invalid-email' || error.code === 'auth/user-not-found') {
        Toast.show("El correo ingresado no es valido");
      } else if (error.code === 'auth/wrong-password') {
        Toast.show("La clave ingresada no es correcta");
      } else {
        Toast.show("Ocurrio un error al ingresar");
        console.error(error);
      }
      throw error;
    })
)

const signUpEmailStrategy = (email, password, fullName) => (
  auth()
    .createUserWithEmailAndPassword(email, password)
    .then(async (data) => {
      let user_object = {
        email: data.user.email,
        uid: data.user.uid,
        photoURL: data.user.photoURL,
        name: fullName
      }
      return (user_object)
    }).catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        Toast.show("El usuario ya esta registrado en la plataforma");
      } else if (error.code === 'auth/invalid-email' || error.code === 'auth/user-not-found') {
        Toast.show("El correo ingresado no es valido");
      } else {
        Toast.show("Ocurrio un error al ingresar");
        console.error("error al crear usuario:", error)
      }

      throw (error);
    })
)

const googleSignInStrategy = () => {
  return GoogleSignin.signIn().then(idToken => {
    const googleCredential = auth.GoogleAuthProvider.credential(idToken.idToken);
    return auth().signInWithCredential(googleCredential).then((data) => {
      console.log("Inicio sesion el usuario: " + data.additionalUserInfo.profile.email);
      let user_object = {
        email: data.additionalUserInfo.profile.email,
        uid: data.user.uid,
        photoURL: data.user.photoURL,
        name: data.user.displayName
      }
      return (user_object)
    }).catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        Toast.show("El correo ingresado ya se encuentra en uso");
        console.error('That email address is already in use!');
      } else if (error.code === 'auth/invalid-email') {
        Toast.show("El correo ingresado no es valido");
        console.error('That email address is invalid!');
      } else {
        Toast.show("Ocurrio un error al ingresar");
        console.error(error);
      }
      throw (error)
    });
  });
}

const facebookSignInStrategy = () => {
  
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
    try {
      yield call(createUserService, service_user);
      yield put({ type: UPDATE_USER, payload: user })
     // AppEventsLogger.logEvent("fb_mobile_complete_registration");
    } catch (e) {
      Toast.show("Ocurrio un error al registrar");
      throw e;
    }
  } catch (error) {
    yield put({ type: ERROR, payload: error })
  }
}

export function* logOut(action) {
  auth()
    .signOut()
}

export function* signIn(action) {
  let { email, password, strategy } = action.payload
  try {
    if (strategy == "email") {
      const user = yield call(signInEmailStrategy, email, password)
      try {
        yield call(LoginService, user.uid);
        yield put({ type: UPDATE_USER, payload: user })
      } catch (e) {
        Toast.show("Ocurrio un error al ingresar");
        throw e;
      }
    }
  } catch (error) {
    yield put({ type: ERROR, payload: error })
  }
}

export function* googleSignIn(action) {
  let { strategy } = action.payload
  try {
    if (strategy == "email") {
      const user = yield call(googleSignInStrategy);
      try {
        yield call(LoginService, user.uid);
        yield put({ type: UPDATE_USER, payload: user })
      } catch (e) {
        Toast.show("Ocurrio un error al ingresar");
        throw e;
      }
    }
  } catch (error) {
    yield put({ type: ERROR, payload: error })
  }
}

export function* googleSignUp(action) {
  let { strategy } = action.payload
  try {
    if (strategy == "email") {
      const user = yield call(googleSignInStrategy);
      let service_user = {
        uid: user.uid,
        lastsign: new Date(),
        fullname: user.name
      }
      try {
        yield call(createUserService, service_user);
        yield put({ type: UPDATE_USER, payload: user })
        //AppEventsLogger.logEvent("fb_mobile_complete_registration");
      } catch (e) {
        Toast.show("Ocurrio un error al registrar");
        throw e;
      }
    }
  } catch (error) {
    yield put({ type: ERROR, payload: error })
  }
}

export function* facebookSignIn(action) {
  let { strategy } = action.payload
  try {
    if (strategy == "email") {
      const user = yield call(facebookSignInStrategy);
      try {
        yield call(LoginService, user.uid);
        yield put({ type: UPDATE_USER, payload: user })
      } catch (e) {
        Toast.show("Ocurrio un error al ingresar");
        throw e;
      }
    }
  } catch (error) {
    yield put({ type: ERROR, payload: error })
  }
}

export function* facebookSignUp(action) {
  let { strategy } = action.payload
  try {
    if (strategy == "email") {
      const user = yield call(facebookSignInStrategy);
      let service_user = {
        uid: user.uid,
        lastsign: new Date(),
        fullname: user.name
      }
      try {
        yield call(createUserService, service_user);
        yield put({ type: UPDATE_USER, payload: user })
        //AppEventsLogger.logEvent("fb_mobile_complete_registration");
      } catch (e) {
        Toast.show("Ocurrio un error al registrar");
        throw e;
      }
    }
  } catch (error) {
    yield put({ type: ERROR, payload: error })
  }
}