import React from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import ActionButton from "react-native-action-button";
import axios from "axios";
import MaintenanceList from "../components/MaintenanceList";

import series from "../../series.json";

export default class MaintenanceScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      maintenance: series,
      loading: false,
      error: false,
    };
  }

  renderList() {
    const textElements = this.state.maintenance.map((maintenanceItem) => {
      const { id } = maintenanceItem.id;
      return <Text key={id}>{title}</Text>;
    });

    return textElements;
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.loading ? (
          <ActivityIndicator size="large" color="#FFB400" />
        ) : this.state.error ? (
          <Text style={styles.error}>
            Erro ao carregar lista de manutenções...
          </Text>
        ) : (
          <MaintenanceList
            maintenance={this.state.maintenance}
            onPressItem={(maintenanceItem) =>
              this.props.navigation.navigate("EditMaintenance", {
                parameters: maintenanceItem,
              })
            }
          />
        )}
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
