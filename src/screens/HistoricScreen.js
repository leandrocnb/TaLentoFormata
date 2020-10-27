import React from "react";
import { View, StyleSheet, Text } from "react-native";
import HistoricList from "../components/HistoricList";
import { connect } from "react-redux";
import { watchMaintenance } from "../actions";

class HistoricScreen extends React.Component {
  componentDidMount() {
    this.props.watchMaintenance();
  }
  render() {
    if (this.props.maintenance === null) {
      return (
        <View style={styles.container}>
          <Text style={styles.textStyle}>
            Nenhum histórico encontrado, por enquanto!
          </Text>
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <HistoricList historic={this.props.maintenance} />
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
  textStyle: {
    fontFamily: "Revalia",
    fontSize: 20,
    fontWeight: "bold",
    padding: 4,
    textAlign: "center",
  },
});

const mapStateToProps = (state) => {
  const { maintenanceList } = state;

  if (maintenanceList === null) {
    return { maintenance: maintenanceList };
  }

  const keys = Object.keys(maintenanceList);
  const maintenanceListWithId = keys.map((key) => {
    return { ...maintenanceList[key], id: key };
  });

  return { maintenance: maintenanceListWithId };
};

export default connect(mapStateToProps, { watchMaintenance })(HistoricScreen);
