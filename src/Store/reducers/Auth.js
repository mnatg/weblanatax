import {
  LOGIN,
  LOGOUT,
  ERROR,
  UPDATE_USER,
  SIGNUP,
  GOOGLE_SIGN_IN,
  FACEBOOK_SIGN_IN,
  GOOGLE_SIGN_UP,
  FACEBOOK_SIGN_UP
} from "../../Store/Types";

const initialState = {
  loading: false,
  loggedIn: false,
  user: null,
  error: ""
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user: action.payload
      };
    case LOGOUT:
      return {
        ...state,
        loggedIn: false,
        user: null
      };
    case UPDATE_USER:
      return {
        loggedIn: true,
        user: { ...state.user, ...action.payload }
      };
    case SIGNUP:
      return {
        ...state,
        user: { ...state.user, ...action.payload }
      };
    case ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default authReducer;
