//Importar a constante SET_EXTRACTS de actions;
import { SET_EXTRACTS } from "../actions";

//Exportar uma função de acordo com o tipo da action
export default function (state = {}, action) {
  switch (action.type) {
    case SET_EXTRACTS:
      return action.extracts;
    default:
      return state;
  }
}
