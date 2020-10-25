import React from "react";
import { StyleSheet, FlatList } from "react-native";
import CallListItem from "./CallListItem";

const CallList = (props) => {
  const { call, onPressItem } = props;

  return (
    <FlatList
      style={StyleSheet.container}
      data={call}
      renderItem={({ item }) => (
        <CallListItem callItem={item} onPressItem={onPressItem} />
      )}
      keyExtractor={(item, index) => item.client + index}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E5E5E5",
  },
});

export default CallList;
