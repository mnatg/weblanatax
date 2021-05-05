import { takeLatest, all } from 'redux-saga/effects'

import { SIGNUP, LOGIN, LOGOUT, LOAD_ROOM} from "./Types"
import { signUp, logOut, SignIn} from "./sagas/Auth.js";
import { loadRoom } from "./sagas/Room.js";
export default function* rootSaga() {
  yield all([
    takeLatest(SIGNUP, signUp),
    takeLatest(LOAD_ROOM, loadRoom),
    takeLatest(LOGOUT, logOut),
    takeLatest(LOGIN, SignIn),
  ])
}
