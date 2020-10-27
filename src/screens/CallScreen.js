import React from "react";
import { View, StyleSheet, Text } from "react-native";
import ActionButton from "react-native-action-button";
import CallList from "../components/CallList";
import { connect } from "react-redux";
import { watchCall } from "../actions";

class CallScreen extends React.Component {
  componentDidMount() {
    this.props.watchCall();
  }

  render() {
    if (this.props.call === null) {
      return (
        <View style={styles.container}>
          <Text style={styles.textStyle}>
            Nenhuma chamada encontrada, por enquanto!
          </Text>
          <ActionButton
            buttonColor="#747474"
            size={70}
            onPress={() => {
              this.props.navigation.navigate("NewCallScreen");
            }}
          />
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <CallList
          call={this.props.call}
          onPressItem={(callItem) =>
            this.props.navigation.navigate("DetailsCall", {
              parameters: callItem,
            })
          }
        />
        <ActionButton
          buttonColor="#747474"
          size={70}
          onPress={() => {
            this.props.navigation.navigate("NewCallScreen");
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
    padding: 20,
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
  const { callList } = state;

  if (callList === null) {
    return { call: callList };
  }

  const keys = Object.keys(callList);
  const callListWithId = keys.map((key) => {
    return { ...callList[key], id: key };
  });

  return { call: callListWithId };
};

export default connect(mapStateToProps, { watchCall })(CallScreen);
