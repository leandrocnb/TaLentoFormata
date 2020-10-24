import React from "react";
import { StyleSheet, FlatList } from "react-native";
import MaintenanceListItem from "./MaintenanceListItem";

const MaintenanceList = (props) => {
  const { maintenance, onPressItem } = props;

  return (
    <FlatList
      style={styles.container}
      data={maintenance}
      renderItem={({ item }) =>
        item.status !== "Concluído" ? (
          <MaintenanceListItem
            maintenanceItem={item}
            onPressItem={onPressItem}
          />
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

export default MaintenanceList;
