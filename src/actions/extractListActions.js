//Importando o Firebase;
import firebase from "firebase";

//Criando uma função para setar meus extratos vindo do firebase;
export const SET_EXTRACTS = "SET_EXTRACTS";
const setExtracts = (extracts) => ({
  type: SET_EXTRACTS,
  extracts,
});

//Fica escutando a cada atualização de Extrato;
export const watchExtract = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/extract`)
      .on("value", (snapshot) => {
        {
          const extracts = snapshot.val();
          const action = setExtracts(extracts);
          dispatch(action);
        }
      });
  };
};
