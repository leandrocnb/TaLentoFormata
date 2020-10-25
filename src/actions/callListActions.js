import firebase from "firebase";
import { Alert } from "react-native";

export const SET_CALLS = "SET_CALLS";

const setCalls = (calls) => ({
  type: SET_CALLS,
  calls,
});

//Fica escutando a cada atualização de uma Chamada de Manutenção no Firebase;
export const watchCall = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/call`)
      .on("value", (snapshot) => {
        {
          const calls = snapshot.val();
          const action = setCalls(calls);
          dispatch(action);
        }
      });
  };
};

//Deleta uma chamada de manutenção passada por parâmetro;
export const deleteCall = (call) => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      Alert.alert(
        "Aviso",
        `Deseja realmente excluir a chamada de manutenção para ${call.client}?`,
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
                  .ref(`/users/${currentUser.uid}/call/${call.id}`)
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
