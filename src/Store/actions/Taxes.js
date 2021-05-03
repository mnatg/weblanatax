import {
  ADD_TAXES
} from "../../Store/Types";

export const onAddTaxes = payload => ({
  type: ADD_TAXES,
  payload
});