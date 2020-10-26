import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const MaintenanceListItem = (props) => {
  const { maintenanceItem, onPressItem } = props;
  const { client, typeRepair, price, status } = maintenanceItem;
  const { img } = maintenanceItem;

  return (
    <TouchableOpacity
      onPress={() => {
        onPressItem({ maintenanceItem });
      }}
    >
      <View style={styles.line}>
        <Image
          source={{ uri: `data:image/jpeg;base64,${img}` }}
          style={styles.equipament}
          aspectRatio={1}
          resizeMode="contain"
        />
        <View style={styles.colum}>
          <Text style={styles.lineText1}>{typeRepair}</Text>
          <Text style={styles.lineText2}>{client}</Text>
          <Text style={styles.lineText3}>{price}</Text>
          <View style={{ alignSelf: "flex-end", marginRight: 20 }}>
            {status === "Em andamento" ? (
              <Text style={styles.textEmAndamento}>{status}</Text>
            ) : (
              <Text style={styles.textAguardando}>{status}</Text>
            )}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  line: {
    height: 100,
    borderBottomWidth: 1,
    borderBottomColor: "#bbb",
    alignItems: "center",
    flexDirection: "row",
  },
  colum: {
    flexDirection: "column",
    flex: 4,
    padding: 10,
  },
  status: {
    fontSize: 15,
    fontFamily: "Rivalia",
    flexDirection: "row",
  },
  lineText1: {
    fontSize: 20,
    fontFamily: "Revalia",
    fontWeight: "bold",
  },
  lineText2: {
    fontSize: 17,
    fontFamily: "Revalia",
    fontWeight: "bold",
  },
  lineText3: {
    fontSize: 15,
    fontFamily: "Revalia",
    fontWeight: "bold",
  },
  textEmAndamento: {
    fontSize: 16,
    fontFamily: "Revalia",
    fontWeight: "bold",
    color: "#00C213",
  },
  textAguardando: {
    fontSize: 16,
    fontFamily: "Revalia",
    fontWeight: "bold",
    color: "#FF0000",
  },
  equipament: {
    aspectRatio: 1,
    flex: 1,
    marginLeft: 15,
    borderRadius: 5,
  },
});

export default MaintenanceListItem;
