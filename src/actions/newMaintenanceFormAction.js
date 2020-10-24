import firebase from "firebase";

export const SET_FIELD = "SET_FIELD";

export const setField = (field, value) => {
  return {
    type: SET_FIELD,
    field,
    value,
  };
};

export const MAINTENANCE_SAVED_SUCESS = "MAINTENANCE_SAVED_SUCESS";

export const maintenanceSavedSucess = () => {
  return {
    type: MAINTENANCE_SAVED_SUCESS,
  };
};

export const SET_ALL_FIELDS = "SET_ALL_FIELDS";
export const setAllFields = (maintenance) => ({
  type: SET_ALL_FIELDS,
  maintenance,
});

export const RESET_FORM = "RESET_FORM";
export const resetForm = () => ({
  type: RESET_FORM,
});

export const saveMaintenance = (maintenance) => {
  const { currentUser } = firebase.auth();
  return async (dispatch) => {
    if (maintenance.id) {
      await firebase
        .database()
        .ref(`/users/${currentUser.uid}/maintenance/${maintenance.id}`)
        .set(maintenance);
    } else {
      await firebase
        .database()
        .ref(`/users/${currentUser.uid}/maintenance`)
        .push(maintenance);
    }

    dispatch(maintenanceSavedSucess());
  };
};
