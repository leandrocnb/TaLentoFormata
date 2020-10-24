import firebase from "firebase";
import { Alert } from "react-native";

export const SET_MAINTENANCES = "SET_MAINTENANCES";

const setMaintenances = (maintenances) => ({
  type: SET_MAINTENANCES,
  maintenances,
});

export const watchMaintenance = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/maintenance`)
      .on("value", (snapshot) => {
        {
          const maintenances = snapshot.val();
          const action = setMaintenances(maintenances);
          dispatch(action);
        }
      });
  };
};

export const deleteMaintenance = (maintenance) => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      Alert.alert(
        "Aviso",
        `Deseja realmente excluir ${maintenance.typeRepair}?`,
        [
          {
            text: "Não",
            onPress: () => {
              resolve(true);
            },
            style: "cancel", //IOS
          },
          {
            text: "Sim",
            onPress: async () => {
              const { currentUser } = firebase.auth();

              try {
                await firebase
                  .database()
                  .ref(
                    `/users/${currentUser.uid}/maintenance/${maintenance.id}`
                  )
                  .remove();

                resolve(true);
              } catch (error) {
                reject(error);
              }
            },
          },
        ],
        { cancelable: false }
      );
    });
  };
};
