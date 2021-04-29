import {
  ADD_TAXES,
  ERROR
} from "../../Store/Types";

const initialState = {
  taxes: [],
  error: ""
};

const taxesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TAXES:
      return {
        ...state,
        taxes: action.payload
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

export default taxesReducer;
