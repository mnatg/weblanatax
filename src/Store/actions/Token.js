import {
  ADD_TOKEN
} from "main/Store/Types";

export const onAddToken = payload => ({
  type: ADD_TOKEN,
  payload
});