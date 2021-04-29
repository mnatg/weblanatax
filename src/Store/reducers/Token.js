import {
  ADD_TOKEN,
  ERROR
} from "../../Store/Types";

const initialState = {
  token: {},
  error: ""
};

const tokenReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TOKEN:
      return {
        ...state,
        token: action.payload
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

export default tokenReducer;
