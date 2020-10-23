import React from "react";
import { StyleSheet, FlatList } from "react-native";
import HistoricListItem from "./HistoricListItem";

const HistoricList = (props) => {
  const { historic } = props;

  return (
    <FlatList
      style={styles.container}
      data={historic}
      renderItem={({ item }) => <HistoricListItem historicItem={item} />}
      keyExtractor={(item, index) => item.title + index}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E5E5E5",
  },
});

export default HistoricList;
