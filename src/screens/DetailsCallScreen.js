import React from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  Image,
  Button,
} from "react-native";

import { connect } from "react-redux";
import { deleteCall } from "../actions";

function DetailsCallScreen({ route, navigation, deleteCall }) {
  const { parameters } = route.params;
  const { client, date, time, address, status } = parameters.callItem;
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container}>
        <View style={styles.alignRightContainer}>
          <View style={styles.containerRow}>
            <Text style={styles.textStyle}>Status: </Text>
            {status === "Agendada" ? (
              <Text style={styles.lineTextAgendada}>{status}</Text>
            ) : (
              <Text style={styles.lineTextConcluida}>{status}</Text>
            )}
          </View>
        </View>
        <View style={styles.inputsContainer}>
          <Text style={styles.textStyle}>Cliente: </Text>
          <Text style={styles.textStyleInfo}>{client}</Text>
          <Text style={styles.textStyle}>Data: </Text>
          <Text style={styles.textStyleInfo}>{date}</Text>
          <Text style={styles.textStyle}>Horário: </Text>
          <Text style={styles.textStyleInfo}>{time}</Text>
          <Text style={styles.textStyle}>Endereço: </Text>
          <Text style={styles.textStyleInfo}>{address}</Text>
        </View>
        <View style={styles.containerRow}>
          <View style={styles.buttonContaier}>
            <Button
              title="Editar"
              color="#747474"
              onPress={() => {
                navigation.replace("NewCallScreen", {
                  callToEdit: parameters,
                });
              }}
            />
          </View>
          <View style={styles.buttonContaier}>
            <Button
              title="Excluir"
              color="#FF0000"
              onPress={async () => {
                const hasDeleted = await deleteCall(parameters.callItem);

                if (hasDeleted) {
                  navigation.goBack();
                }
              }}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5E5E5",
    marginTop: 5,
    padding: 10,
  },
  containerRow: {
    flex: 0.5,
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
  },
  inputsContainer: {
    alignItems: "flex-start",
    margin: 4,
  },
  alignRightContainer: {
    alignItems: "flex-end",
  },
  textStyle: {
    fontFamily: "Revalia",
    fontSize: 20,
    fontWeight: "bold",
    padding: 4,
  },
  textStyleInfo: {
    fontFamily: "Revalia",
    padding: 4,
    fontSize: 15,
  },
  lineTextConcluida: {
    color: "#00C213",
    fontSize: 15,
    fontFamily: "Revalia",
  },
  lineTextAgendada: {
    color: "#FFB400",
    fontSize: 15,
    fontFamily: "Revalia",
  },
  buttonContaier: {
    flex: 2,
    margin: 30,
  },
});

export default connect(null, { deleteCall })(DetailsCallScreen);
