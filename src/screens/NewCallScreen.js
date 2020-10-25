import React from "react";
import {
  Picker,
  View,
  TextInput,
  Text,
  StyleSheet,
  ScrollView,
  Button,
  ActivityIndicator,
  Alert,
} from "react-native";
import {
  setFieldCalls,
  saveCall,
  setAllFieldsCalls,
  resetFormCall,
} from "../actions";
import { connect } from "react-redux";
import FormRow from "../components/FormRow";

class NewCallScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
    };
  }

  componentDidMount() {
    const { route, setAllFieldsCalls, resetFormCall } = this.props;
    const params = route.params;
    if (route && params) {
      setAllFieldsCalls(params.callToEdit.callItem);
    } else {
      resetFormCall();
    }
  }

  viewForm() {
    const { callForm, setFieldCalls, saveCall, navigation } = this.props;

    return (
      <ScrollView style={styles.container}>
        <View style={styles.containerPicker}>
          <Picker
            selectedValue={callForm.status}
            onValueChange={(itemValue) => setFieldCalls("status", itemValue)}
          >
            <Picker.Item label="Agendada" value={"Agendada"} />
            <Picker.Item label="Concluída" value={"Concluída"} />
          </Picker>
        </View>
        <FormRow>
          <Text style={styles.textStyle}>Cliente</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Informe o Cliente"
            value={callForm.client}
            onChangeText={(value) => setFieldCalls("client", value)}
          />
        </FormRow>
        <FormRow>
          <Text style={styles.textStyle}>Data</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Informe a Data"
            value={callForm.date}
            onChangeText={(value) => setFieldCalls("date", value)}
          />
        </FormRow>
        <FormRow>
          <Text style={styles.textStyle}>Horário</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Informe o Horário"
            value={callForm.time}
            onChangeText={(value) => setFieldCalls("time", value)}
          />
        </FormRow>
        <FormRow>
          <Text style={styles.textStyle}>Endereço</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Informe o Endereço"
            value={callForm.address}
            onChangeText={(value) => setFieldCalls("address", value)}
          />
        </FormRow>
        <View style={styles.buttonContainer}>
          {this.state.isLoading ? (
            <ActivityIndicator size="large" color="#FFB400" />
          ) : (
            <Button
              title="Salvar"
              color="#FFB400"
              onPress={async () => {
                this.setState({ isLoading: true });
                try {
                  await saveCall(callForm);
                  navigation.goBack();
                } catch (error) {
                  Alert.alert("Error", error.message);
                } finally {
                  this.setState({ isLoading: false });
                }
              }}
            />
          )}
        </View>
      </ScrollView>
    );
  }

  render() {
    return this.viewForm();
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
    flexDirection: "column",
    backgroundColor: "#E5E5E5",
  },
  textStyle: {
    fontFamily: "Revalia",
    fontSize: 20,
    fontWeight: "bold",
  },
  textInput: {
    borderBottomWidth: 1.5,
    borderBottomColor: "gray",
    fontSize: 18,
  },
  textLong: {
    borderBottomWidth: 1.5,
    borderBottomColor: "gray",
    paddingBottom: -15,
    fontSize: 18,
  },
  buttonContainer: {
    marginBottom: 20,
  },
});

const mapStateToProps = (state) => {
  return {
    callForm: state.callForm,
  };
};

const mapDispatchToProps = {
  setFieldCalls,
  saveCall,
  setAllFieldsCalls,
  resetFormCall,
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCallScreen);
