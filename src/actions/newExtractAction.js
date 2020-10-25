//Importa o firebase;
import firebase from "firebase";

//Setar os campos de Extrato;
export const SET_FIELD_EXTRACTS = "SET_FIELD_EXTRACTS";
export const setFieldExtracts = (field, value) => {
  return {
    type: SET_FIELD_EXTRACTS,
    field,
    value,
  };
};

//Salva um novo Extrato de Manutenção no Firebase passado por parâmetro;
export const saveExtract = (extract) => {
  const { currentUser } = firebase.auth();

  return async (dispatch) => {
    if (extract.id) {
      await firebase
        .database()
        .ref(`/users/${currentUser.uid}/extract/${extract.id}`)
        .set(extract);
    } else {
      await firebase
        .database()
        .ref(`/users/${currentUser.uid}/extract`)
        .push(extract);
    }
  };
};
