import React from "react";
import { Picker, TextInput, Text, StyleSheet, ScrollView } from "react-native";
import { setField } from "../actions";
import { connect } from "react-redux";
import FormRow from "../components/FormRow";

const NewMaintenanceScreen = ({ maintenanceForm, setField }) => {
  return (
    <ScrollView style={styles.container}>
      <Picker
        selectedValue={maintenanceForm.client}
        onValueChange={(itemValue) => setField("client", itemValue)}
        style={styles.textStyle}
      >
        <Picker.Item label="Leandro" value={"Leandro"} />
      </Picker>
      <Text style={styles.textStyle}>Cliente</Text>
      <FormRow>
        <TextInput
          style={styles.textInput}
          placeholder="Informe o Cliente"
          onFocus={() => console.log("Clicou no campo cliente faça algo")}
          value={maintenanceForm.client}
          onChangeText={(value) => setField("client", value)}
        />
      </FormRow>
      <Text style={styles.textStyle}>Equipamento</Text>
      <FormRow>
        <TextInput
          style={styles.textInput}
          placeholder="Informe o Equipamento"
          value={maintenanceForm.equipment}
          onChangeText={(value) => setField("equipment", value)}
        />
      </FormRow>
      <Text style={styles.textStyle}>Tipo de Reparo</Text>
      <FormRow>
        <TextInput
          style={styles.textInput}
          placeholder="Informe o Tipo de Reparo"
          value={maintenanceForm.typeRepair}
          onChangeText={(value) => setField("typeRepair", value)}
        />
      </FormRow>
      <Text style={styles.textStyle}>Valor</Text>
      <FormRow>
        <TextInput
          style={styles.textInput}
          placeholder="Informe o Valor"
          value={maintenanceForm.price}
          onChangeText={(value) => setField("price", value)}
        />
      </FormRow>
      <Text style={styles.textStyle}>Imagem</Text>
      <FormRow>
        <TextInput
          style={styles.textInput}
          placeholder="Informe a URL"
          value={maintenanceForm.img}
          onChangeText={(value) => setField("img", value)}
        />
      </FormRow>
      <Text style={styles.textStyle}>Observações</Text>
      <FormRow>
        <TextInput
          style={styles.textInput}
          placeholder="Informe as Observações"
          value={maintenanceForm.note}
          onChangeText={(value) => setField("note", value)}
        />
      </FormRow>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
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
    fontSize: 20,
  },
});

const mapStateToProps = (state) => {
  return {
    maintenanceForm: state.maintenanceForm,
  };
};

const mapDispatchToProps = {
  setField,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewMaintenanceScreen);
