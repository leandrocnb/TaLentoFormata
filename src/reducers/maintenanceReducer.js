import { SET_MAINTENANCES } from "../actions";

export default function (state = {}, action) {
  switch (action.type) {
    case SET_MAINTENANCES:
      return action.maintenances;
    default:
      return state;
  }
}
