import React, { useState } from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import FormRow from "../components/FormRow";

function EditMaintenanceScreen({ route }) {
  //   const { parameters } = route.params;
  //   const { id, title } = parameters.maintenanceItem;
  const teste = {
    id: 1,
    title: "Black Mirror",
    gender: "Ficção Científica",
    rate: 100,
    img:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BNTEwYzNiMGUtNzRlYS00MTMzLTliNzgtOGUxZGZiNThlNWYwXkEyXkFqcGdeQXVyMjYwNDA2MDE@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
    description:
      "Black Mirror é uma série de televisão britânica antológica de ficção científica criada por Charlie Brooker e centrada em temas obscuros e satíricos que examinam a sociedade moderna, particularmente a respeito das consequências imprevistas das novas tecnologias. Os episódios são trabalhos autônomos, que geralmente se passam em um presente alternativo ou em um futuro próximo.",
  };
  return (
    <View style={styles.container}>
      <View style={styles.containerRow}>
        <TouchableOpacity onPress={() => console.log("Clicou na imagem")}>
          <Image source={{ uri: teste.img }} style={styles.equipament} />
        </TouchableOpacity>
        <View style={styles.alignRightContainer}>
          <Text style={styles.textStyle}>Status</Text>
          <Text style={styles.textStyle}>Aqui vai um picker</Text>
        </View>
      </View>
      <ScrollView style={styles.container}>
        <View style={styles.inputsContainer}>
          <Text style={styles.textStyle}>Cliente</Text>
          <Text style={styles.textStyle}>Equipamento</Text>
          <Text style={styles.textStyle}>Tipo de Reparo</Text>
        </View>
        <View style={styles.alignRightContainer}>
          <Text style={styles.textStyle}>Valor</Text>
          <Text style={styles.textStyle}>R$ 30,00</Text>
        </View>
        <View style={styles.inputsContainer}>
          <Text style={styles.textStyle}>Observações</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5E5E5",
    marginTop: 5,
    padding: 10,
  },
  containerRow: {
    flex: 0.5,
    flexDirection: "row",
  },
  inputsContainer: {
    alignItems: "flex-start",
    margin: 4,
  },
  alignRightContainer: {
    alignItems: "flex-end",
    margin: 4,
  },
  textStyle: {
    fontFamily: "Revalia",
    fontSize: 20,
    fontWeight: "bold",
  },
  textInput: {
    borderWidth: 1,
    borderBottomColor: "gray",
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 20,
  },
  equipament: {
    flex: 5,
    borderRadius: 5,
    aspectRatio: 1.2,
    resizeMode: "contain",
  },
});

export default EditMaintenanceScreen;
