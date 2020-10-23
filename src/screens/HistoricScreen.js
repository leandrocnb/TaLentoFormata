import React from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import axios from "axios";
import HistoricList from "../components/HistoricList";

import series from "../../series.json";

export default class HistoricScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      historic: series,
      loading: false,
      error: false,
    };
  }

  // componentDidMount() {
  //   this.setState({ loading: true });
  //   axios
  //     .get("https://randomuser.me/api/?nat=br&results=20")
  //     .then((response) => {
  //       const { results } = response.data;
  //       this.setState({
  //         historic: results,
  //         loading: false,
  //       });
  //     })
  //     .catch((error) => {
  //       this.setState({
  //         error: true,
  //         loading: false,
  //       });
  //     });
  // }

  renderList() {
    const textElements = this.state.historic.map((historicItem) => {
      const { id } = historicItem.id;
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
            Erro ao carregar lista de históricos...
          </Text>
        ) : (
          <HistoricList
            historic={this.state.historic}
            //Implementar Toque
          />
        )}
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
