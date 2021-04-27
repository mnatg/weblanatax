import {
  LOGIN,
  LOGOUT,
  UPDATE_USER,
  SIGNUP,
  GOOGLE_SIGN_IN,
  FACEBOOK_SIGN_IN,
  GOOGLE_SIGN_UP,
  FACEBOOK_SIGN_UP
} from "main/Store/Types";

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

export const onGoogleSignUp = payload => ({
  type: GOOGLE_SIGN_UP,
  payload
})

export const onFacebookSignUp = payload => ({
  type: FACEBOOK_SIGN_UP,
  payload
})

export const onGoogleSignIn = payload => ({
  type: GOOGLE_SIGN_IN,
  payload
})

export const onFacebookSignIn = payload => ({
  type: FACEBOOK_SIGN_IN,
  payload
})
