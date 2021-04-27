import { takeLatest, all } from 'redux-saga/effects'

import { SIGNUP, LOGIN, LOGOUT, LOAD_ROOM, GOOGLE_SIGN_IN, FACEBOOK_SIGN_IN,GOOGLE_SIGN_UP, FACEBOOK_SIGN_UP } from "../Store/Types"
import { signUp, logOut, signIn, googleSignIn, facebookSignIn,googleSignUp, facebookSignUp } from "./sagas/Auth.js";
import { loadRoom } from "./sagas/Room.js";
export default function* rootSaga() {
  yield all([
    takeLatest(SIGNUP, signUp),
    takeLatest(LOAD_ROOM, loadRoom),
    takeLatest(LOGOUT, logOut),
    takeLatest(LOGIN, signIn),
    takeLatest(GOOGLE_SIGN_IN, googleSignIn),
    takeLatest(FACEBOOK_SIGN_IN, facebookSignIn),
    takeLatest(GOOGLE_SIGN_UP, googleSignUp),
    takeLatest(FACEBOOK_SIGN_UP, facebookSignUp),
  ])
}
