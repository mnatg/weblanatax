import {
  LOAD_ROOM
} from "main/Store/Types";


export const loadingRoom = payload => ({
  type: LOAD_ROOM,
  payload
});
