import React from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import ActionButton from "react-native-action-button";
import MaintenanceList from "../components/MaintenanceList";
import { connect } from "react-redux";
import { watchMaintenance } from "../actions";

class MaintenanceScreen extends React.Component {
  componentDidMount() {
    this.props.watchMaintenance();
  }

  render() {
    if (this.props.maintenance === null) {
      return <ActivityIndicator size="large" color="#FFB400" />;
    }
    return (
      <View style={styles.container}>
        <MaintenanceList
          maintenance={this.props.maintenance}
          onPressItem={(maintenanceItem) =>
            this.props.navigation.navigate("DetailsMaintenance", {
              parameters: maintenanceItem,
            })
          }
        />
        <ActionButton
          buttonColor="#747474"
          size={70}
          onPress={() => {
            this.props.navigation.navigate("NewMaintenanceScreen");
          }}
        />
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
  error: {
    fontSize: 18,
    color: "red",
    alignSelf: "center",
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

export default connect(mapStateToProps, { watchMaintenance })(
  MaintenanceScreen
);
