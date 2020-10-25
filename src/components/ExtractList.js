import React, { useState } from "react";
import { StyleSheet, FlatList, View, Text } from "react-native";
import ExtractListItem from "./ExtractListItem";

class ExtractList extends React.Component {
  render() {
    const { extract } = this.props;

    let valueTotal = 0;

    extract.forEach((item) => {
      valueTotal += Number(item.price.replace(",", "."));
    });

    return (
      <View style={styles.container}>
        <View style={styles.colum}>
          <Text style={styles.label}>Data</Text>
          <Text style={styles.label}>Serviço</Text>
          <Text style={styles.label}>Valor</Text>
        </View>
        <Text style={styles.divLine}>
          {"_______________________________________"}
        </Text>
        <FlatList
          style={styles.container}
          data={extract}
          renderItem={({ item }) => <ExtractListItem extractItem={item} />}
          keyExtractor={(item, index) => item.client + index}
        />
        <View style={styles.colum}>
          <Text style={styles.total}>Total</Text>
          <Text style={styles.total}>R$ {valueTotal}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E5E5E5",
    marginTop: 10,
  },
  total: {
    fontFamily: "Revalia",
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 125,
    marginRight: 125,
  },
  label: {
    fontFamily: "Revalia",
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 50,
    marginRight: 50,
  },
  colum: {
    flexDirection: "row",
    alignSelf: "center",
  },
  divLine: {
    fontFamily: "Revalia",
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 20,
    marginRight: 20,
    alignSelf: "center",
  },
  filter: {
    flex: 1,
    alignSelf: "flex-end",
    paddingEnd: 20,
    paddingBottom: 40,
    paddingTop: 10,
  },
  textFilter: {
    fontFamily: "Revalia",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default ExtractList;
