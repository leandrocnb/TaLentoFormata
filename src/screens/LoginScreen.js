import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  ActivityIndicator,
  Image,
} from "react-native";
import FormRow from "../components/FormRow";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import firebase from "firebase";

import { processLogin } from "../actions";
import { connect } from "react-redux";

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "user@mail.com",
      password: "userteste",
      isLoading: false,
      message: "",
    };
  }

  componentDidMount() {
    var firebaseConfig = {
      apiKey: "AIzaSyAEy9d1egth2GalkNHJUUf6_vngWIudWtk",
      authDomain: "apptalentoformata.firebaseapp.com",
      databaseURL: "https://apptalentoformata.firebaseio.com",
      projectId: "apptalentoformata",
      storageBucket: "apptalentoformata.appspot.com",
      messagingSenderId: "780964463828",
      appId: "1:780964463828:web:658661ef9c7e9806ee2741",
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }

  onChangeHandler(field, valor) {
    this.setState({
      [field]: valor,
    });
  }

  processLogin() {
    this.setState({ isLoading: true });
    const { email, password } = this.state;

    this.props
      .processLogin({ email, password })
      .then((user) => {
        if (user) {
          this.setState({ isLoading: false });
          this.props.navigation.replace("MainNavigation");
        } else {
          this.setState({ isLoading: false, message: "" });
        }
      })
      .catch((error) => {
        this.setState({
          isLoading: false,
          message: this.getMessageByError(error.code),
        });
      });
  }

  getMessageByError(code) {
    switch (code) {
      case "auth/user-not-found":
        return "E-mail inexistente.";
      case "auth/invalid-email":
        return "E-mail inválido.";
      case "auth/wrong-password":
        return "Senha inválida.";
      default:
        return "Erro desconhecido";
    }
  }

  renderButton() {
    if (this.state.isLoading)
      return <ActivityIndicator size="large" color="#FFB400" />;

    return (
      <View style={styles.button}>
        <Button
          title="Entrar"
          color="#FFB400"
          onPress={() => this.processLogin()}
        />
      </View>
    );
  }

  renderMessage() {
    const { message } = this.state;

    if (!message) return null;

    return (
      <View style={styles.message}>
        <Text style={styles.messageText}>{message}</Text>
      </View>
    );
  }

  render() {
    return (
      <KeyboardAwareScrollView style={styles.container}>
        <View style={styles.logoImage}>
          <Image source={require("../images/logo.png")} />
        </View>
        {this.renderMessage()}
        <FormRow>
          <TextInput
            style={styles.textInput}
            placeholder="E-mail"
            value={this.state.email}
            onChangeText={(valor) => {
              this.onChangeHandler("email", valor);
            }}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </FormRow>
        <FormRow>
          <TextInput
            style={styles.textInput}
            placeholder="Senha"
            secureTextEntry
            value={this.state.password}
            onChangeText={(valor) => {
              this.onChangeHandler("password", valor);
            }}
          />
        </FormRow>
        {this.renderButton()}
      </KeyboardAwareScrollView>
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderBottomColor: "gray",
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 20,
  },
  container: {
    backgroundColor: "#E5E5E5",
    flex: 1,
  },
  button: {
    marginHorizontal: 100,
    marginTop: 30,
  },
  logoImage: {
    alignItems: "center",
  },
  message: {
    flex: 1,
    alignItems: "center",
    margin: 5,
  },
  messageText: {
    fontFamily: "Revalia",
    fontSize: 20,
    color: "red",
  },
});

export default connect(null, { processLogin })(LoginScreen);
