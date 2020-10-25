//Importa as actions;
import { SET_FIELD_EXTRACTS } from "../actions";

//Criação de um estado inicial vazio
const INITIAL_STATE = {
  id: null,
  date: "",
  client: "",
  typeRepair: "",
  price: "",
};

//Exportar uma função que recebe um estado e uma ação
export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_FIELD_EXTRACTS:
      const clonedState = { ...state };
      clonedState[action.field] = action.value;
      return clonedState;
    default:
      return state;
  }
}
