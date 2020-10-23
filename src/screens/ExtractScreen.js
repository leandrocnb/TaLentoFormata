import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ExtractList from "../components/ExtractList";

export default class ExtractScreen extends React.Component {
  render() {
    return (
      <View style={{ marginTop: 20 }}>
        <ExtractList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#E5E5E5",
  },
});
