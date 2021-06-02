import {
  LOAD_ROOM
} from "../../Store/Types";

const initialState = {
  loading: false,
  room_name: null,
  token: null,
  menssages: []
};

const roomReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ROOM:
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
};

export default roomReducer;
