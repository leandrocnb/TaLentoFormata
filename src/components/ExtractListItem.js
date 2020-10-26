import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ExtractListItem = (props) => {
  const { extractItem } = props;
  const { date, price, typeRepair } = extractItem;

  return (
    <View>
      <View style={styles.colum}>
        <View style={{ flex: 3 }}>
          <Text style={styles.item}>{date}</Text>
        </View>
        <View style={{ flex: 4 }}>
          <Text style={styles.item}>{typeRepair}</Text>
        </View>
        <View style={{ flex: 2 }}>
          <Text style={styles.item}>{price.replace("R$", "")}</Text>
        </View>
      </View>
      <Text style={styles.divLine}>
        {"_______________________________________"}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  colum: {
    flexDirection: "row",
    alignSelf: "center",
    marginStart: 20,
  },
  line: {
    flexDirection: "column",
    flex: 1,
  },
  label: {
    fontFamily: "Revalia",
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 50,
    marginRight: 50,
  },
  item: {
    fontFamily: "Revalia",
    fontSize: 13,
    margin: 9,
  },
  total: {
    fontFamily: "Revalia",
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 125,
    marginRight: 125,
  },
  divLine: {
    fontFamily: "Revalia",
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 20,
    marginRight: 20,
    alignSelf: "center",
  },
});

export default ExtractListItem;
