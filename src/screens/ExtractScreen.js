import React from "react";
import { View, StyleSheet, Text } from "react-native";
import ExtractList from "../components/ExtractList";

import { connect } from "react-redux";
import { watchExtract } from "../actions";

class ExtractScreen extends React.Component {
  componentDidMount() {
    this.props.watchExtract();
  }

  render() {
    if (this.props.extract === null) {
      return (
        <View style={styles.container2}>
          <Text style={styles.textStyle}>
            Nenhum extrato encontrado, por enquanto!
          </Text>
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <ExtractList extract={this.props.extract} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5E5E5",
  },
  container2: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#E5E5E5",
  },
  textStyle: {
    fontFamily: "Revalia",
    fontSize: 20,
    fontWeight: "bold",
    padding: 10,
    textAlign: "center",
  },
});

const mapStateToProps = (state) => {
  const { extractList } = state;

  if (extractList === null) {
    return { extract: extractList };
  }

  const keys = Object.keys(extractList);
  const extractListWithId = keys.map((key) => {
    return { ...extractList[key], id: key };
  });

  return { extract: extractListWithId };
};

export default connect(mapStateToProps, { watchExtract })(ExtractScreen);
