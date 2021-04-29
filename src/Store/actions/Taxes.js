import {
  ADD_TAXES
} from "main/Store/Types";

export const onAddTaxes = payload => ({
  type: ADD_TAXES,
  payload
});