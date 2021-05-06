import {
  LOGIN,
  LOGOUT,
  UPDATE_USER,
  SIGNUP
} from "../../Store/Types";

export const onLogin = payload => ({
  type: LOGIN,
  payload
});

export const onLogout = () => ({
  type: LOGOUT
});

export const updateUser = payload => ({
  type: UPDATE_USER,
  payload
});

export const onSignUp = payload => ({
  type: SIGNUP,
  payload
})