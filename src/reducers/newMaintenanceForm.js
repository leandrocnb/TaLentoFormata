import {
  SET_FIELD,
  MAINTENANCE_SAVED_SUCESS,
  SET_ALL_FIELDS,
  RESET_FORM,
} from "../actions";

const INITIAL_STATE = {
  id: null,
  client: "",
  equipment: "",
  typeRepair: "",
  price: "",
  note: "",
  img: "",
  status: "Aguardando",
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_FIELD:
      const clonedState = { ...state };
      clonedState[action.field] = action.value;
      return clonedState;
    case MAINTENANCE_SAVED_SUCESS:
      return INITIAL_STATE;
    case RESET_FORM:
      return INITIAL_STATE;
    case SET_ALL_FIELDS:
      return action.maintenance;
    default:
      return state;
  }
}
