import React from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
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
      return <ActivityIndicator size="large" color="#FFB400" />;
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
  error: {
    fontSize: 18,
    color: "red",
    alignSelf: "center",
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
