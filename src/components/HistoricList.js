import React from "react";
import { StyleSheet, FlatList } from "react-native";
import HistoricListItem from "./HistoricListItem";

const HistoricList = (props) => {
  const { historic } = props;

  return (
    <FlatList
      style={styles.container}
      data={historic}
      renderItem={({ item }) =>
        item.status === "Concluído" ? (
          <HistoricListItem historicItem={item} />
        ) : null
      }
      keyExtractor={(item, index) => item.client + index}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E5E5E5",
  },
});

export default HistoricList;
