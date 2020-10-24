import React from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Button,
} from "react-native";

import { connect } from "react-redux";
import { deleteMaintenance } from "../actions";

function DetailsMaintenanceScreen({ route, navigation, deleteMaintenance }) {
  const { parameters } = route.params;
  const {
    client,
    equipment,
    typeRepair,
    img,
    status,
    note,
    price,
  } = parameters.maintenanceItem;
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container}>
        <View style={styles.containerRow}>
          <Image
            source={{ uri: `data:image/jpeg;base64,${img}` }}
            style={styles.equipament}
          />
          <View style={styles.alignRightContainer}>
            <Text style={styles.textStyle}>Status</Text>
            {status === "Em andamento" ? (
              <Text style={styles.textEmAndamento}>{status}</Text>
            ) : (
              <Text style={styles.textAguardando}>{status}</Text>
            )}
          </View>
        </View>

        <View style={styles.inputsContainer}>
          <Text style={styles.textStyle}>Cliente: </Text>
          <Text style={styles.textStyleInfo}>{client}</Text>
          <Text style={styles.textStyle}>Equipamento: </Text>
          <Text style={styles.textStyleInfo}>{equipment}</Text>
          <Text style={styles.textStyle}>Tipo de Reparo: </Text>
          <Text style={styles.textStyleInfo}>{typeRepair}</Text>
        </View>
        <View style={styles.alignRightContainer}>
          <Text style={styles.textStyle}>Valor</Text>
          <Text style={styles.textStyleInfo}>{"R$ " + price}</Text>
        </View>
        <View style={styles.inputsContainer}>
          <Text style={styles.textStyle}>Observações</Text>
          <Text style={styles.textStyleInfo}>{note}</Text>
        </View>
        <View style={styles.containerRow}>
          <View style={styles.buttonContaier}>
            <Button
              title="Editar"
              color="#747474"
              onPress={() => {
                navigation.replace("NewMaintenanceScreen", {
                  maintenanceToEdit: parameters,
                });
              }}
            />
          </View>
          <View style={styles.buttonContaier}>
            <Button
              title="Excluir"
              color="#FF0000"
              onPress={async () => {
                const hasDeleted = await deleteMaintenance(
                  parameters.maintenanceItem
                );

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
  },
  inputsContainer: {
    alignItems: "flex-start",
    margin: 4,
  },
  alignRightContainer: {
    alignItems: "flex-end",
    margin: 4,
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
  textEmAndamento: {
    fontFamily: "Revalia",
    padding: 4,
    fontSize: 15,
    color: "#00C213",
  },
  textAguardando: {
    fontFamily: "Revalia",
    padding: 4,
    fontSize: 15,
    color: "#FF0000",
  },
  equipament: {
    flex: 5,
    borderRadius: 5,
    aspectRatio: 1.2,
    resizeMode: "contain",
  },
  buttonContaier: {
    flex: 2,
    margin: 30,
  },
});

export default connect(null, { deleteMaintenance })(DetailsMaintenanceScreen);
