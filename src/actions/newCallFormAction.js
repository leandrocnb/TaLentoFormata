import firebase from "firebase";

//Setar os campos de Chamada de Manutenção;
export const SET_FIELD_CALLS = "SET_FIELD_CALLS";
export const setFieldCalls = (field, value) => {
  return {
    type: SET_FIELD_CALLS,
    field,
    value,
  };
};

//
export const CALL_SAVED_SUCESS = "CALL_SAVED_SUCESS";
export const callSavedSucess = () => {
  return {
    type: CALL_SAVED_SUCESS,
  };
};

export const SET_ALL_FIELDS_CALLS = "SET_ALL_FIELDS_CALLS";
export const setAllFieldsCalls = (call) => ({
  type: SET_ALL_FIELDS_CALLS,
  call,
});

//Apaga o formulário de Chamada de Manutenção;
export const RESET_FORM_CALL = "RESET_FORM_CALL";
export const resetFormCall = () => ({
  type: RESET_FORM_CALL,
});

//Salva uma Chamada de Manutenção no Firebase passada por parâmetro;
export const saveCall = (call) => {
  const { currentUser } = firebase.auth();
  return async (dispatch) => {
    if (call.id) {
      await firebase
        .database()
        .ref(`/users/${currentUser.uid}/call/${call.id}`)
        .set(call);
    } else {
      await firebase
        .database()
        .ref(`/users/${currentUser.uid}/call`)
        .push(call);
    }

    dispatch(callSavedSucess());
  };
};
