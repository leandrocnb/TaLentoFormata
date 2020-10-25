//Importa funções de Actions;
import {
  SET_FIELD_CALLS,
  CALL_SAVED_SUCESS,
  SET_ALL_FIELDS_CALLS,
  RESET_FORM_CALL,
} from "../actions";

//Criação de um estado inicial vazio;
const INITIAL_STATE = {
  id: null,
  client: "",
  date: "",
  time: "",
  address: "",
  status: "Agendada",
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_FIELD_CALLS:
      const clonedState = { ...state };
      clonedState[action.field] = action.value;
      return clonedState;
    case CALL_SAVED_SUCESS:
      return INITIAL_STATE;
    case RESET_FORM_CALL:
      return INITIAL_STATE;
    case SET_ALL_FIELDS_CALLS:
      return action.call;
    default:
      return state;
  }
}
