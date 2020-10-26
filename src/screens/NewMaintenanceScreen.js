import React, { useState, useEffect } from "react";
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
  Image,
  TouchableOpacity,
  PermissionsAndroid,
} from "react-native";
import { TextInputMask } from "react-native-masked-text";
import {
  setField,
  setFieldExtracts,
  saveExtract,
  saveMaintenance,
  setAllFields,
  resetForm,
} from "../actions";
import { connect } from "react-redux";
import FormRow from "../components/FormRow";
import { RNCamera } from "react-native-camera";
import CameraRollPicker from "react-native-camera-roll-picker";
import ImgToBase64 from "react-native-image-base64";

class NewMaintenanceScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      isCamera: false,
      isCameraRoll: false,
    };
  }

  componentDidMount() {
    const { route, setAllFields, resetForm } = this.props;
    const params = route.params;
    if (route && params) {
      setAllFields(params.maintenanceToEdit.maintenanceItem);
    } else {
      resetForm();
    }
  }

  takePicture = async () => {
    if (this.camera) {
      const options = {
        quality: 0.5,
        base64: true,
        forceUpOrientation: true,
        fixOrientation: true,
      };
      const data = await this.camera.takePictureAsync(options);

      if (data) {
        this.props.setField("img", data.base64);

        this.setState({ isCamera: false });
      }
      console.log(data.uri);
    }
  };

  viewGallery() {
    this.requestExternalStorageAccess();

    return (
      <CameraRollPicker
        maximum={1}
        selectSingleItem={true}
        callback={(volta) => {
          if (volta.length > 0) {
            console.log(volta);
            ImgToBase64.getBase64String(volta[0].uri)
              .then((stringConvertida) => {
                this.props.setField("img", stringConvertida);
              })
              .catch((err) => {
                console.log(err);
              });
          }
          this.setState({
            isCameraRoll: false,
          });
        }}
      />
    );
  }

  async requestExternalStorageAccess() {
    try {
      const permission = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE
      );
      if (permission !== PermissionsAndroid.RESULTS.GRANTED) {
        Alert.alert("Permissão negada");
      }
    } catch (error) {
      console.log(error);
    }
  }

  viewCamera() {
    return (
      <View style={styles.containerRNCamera}>
        <RNCamera
          ref={(ref) => {
            this.camera = ref;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          androidCameraPermissionOptions={{
            title: "Permission to use camera",
            message: "Nós precisamos de sua permissão para usar a câmera",
            buttonPositive: "Aceitar",
            buttonNegative: "Recusar",
          }}
          androidRecordAudioPermissionOptions={{
            title: "Permission to record audio",
            message: "Nós precisamos de sua permissão para gravar áudio",
            buttonPositive: "Aceitar",
            buttonNegative: "Recusar",
          }}
        />
        <View>
          <TouchableOpacity
            style={styles.capture}
            onPress={this.takePicture.bind(this)}
          >
            <Text>Tirar foto!</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  viewForm() {
    const {
      maintenanceForm,
      extractForm,
      setField,
      setFieldExtracts,
      saveMaintenance,
      saveExtract,
      navigation,
    } = this.props;

    return (
      <ScrollView style={styles.container}>
        <View style={styles.containerPicker}>
          <Picker
            selectedValue={maintenanceForm.status}
            onValueChange={(itemValue) => {
              setField("status", itemValue);
              setFieldExtracts("client", maintenanceForm.client);
              setFieldExtracts("typeRepair", maintenanceForm.typeRepair);
              setFieldExtracts("price", maintenanceForm.price);
              setFieldExtracts(
                "date",
                new Date().getDate() +
                  "/" +
                  (new Date().getMonth() + 1) +
                  "/" +
                  new Date().getFullYear()
              );
            }}
          >
            <Picker.Item label="Aguardando" value={"Aguardando"} />
            <Picker.Item label="Em andamento" value={"Em andamento"} />
            <Picker.Item label="Concluído" value={"Concluído"} />
          </Picker>
        </View>
        <FormRow>
          {maintenanceForm.img ? (
            <Image
              source={{
                uri: `data:image/jpeg;base64,${maintenanceForm.img}`,
              }}
              style={styles.img}
            />
          ) : (
            <Text style={styles.textStyle}>Insira uma imagem</Text>
          )}
          <View style={{ paddingTop: 10 }}>
            <Button
              title="Anexar Imagem"
              color="#FFB400"
              onPress={() => {
                Alert.alert("Anexar Imagem", "Onde deseja pegar a imagem?", [
                  {
                    text: "Camera",
                    onPress: () => {
                      this.setState({
                        isCamera: true,
                      });
                    },
                  },
                  {
                    text: "Galeria",
                    onPress: () => {
                      this.setState({
                        isCameraRoll: true,
                      });
                    },
                  },
                ]);
              }}
            />
          </View>
        </FormRow>
        <FormRow>
          <Text style={styles.textStyle}>Cliente</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Informe o Cliente"
            value={maintenanceForm.client}
            onChangeText={(value) => setField("client", value)}
          />
        </FormRow>
        <FormRow>
          <Text style={styles.textStyle}>Equipamento</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Informe o Equipamento"
            value={maintenanceForm.equipment}
            onChangeText={(value) => setField("equipment", value)}
          />
        </FormRow>
        <FormRow>
          <Text style={styles.textStyle}>Tipo de Reparo</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Informe o Tipo de Reparo"
            value={maintenanceForm.typeRepair}
            onChangeText={(value) => setField("typeRepair", value)}
          />
        </FormRow>
        <FormRow>
          <Text style={styles.textStyle}>Valor</Text>
          <TextInputMask
            style={styles.textInput}
            placeholder="Informe o Valor"
            type={"money"}
            value={maintenanceForm.price}
            onChangeText={(value) => setField("price", value)}
          />
        </FormRow>
        <FormRow>
          <Text style={styles.textStyle}>Observações</Text>
          <TextInput
            style={styles.textLong}
            placeholder="Informe as Observações"
            value={maintenanceForm.note}
            onChangeText={(value) => setField("note", value)}
            numberOfLines={3}
            multiline={true}
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
                  await saveMaintenance(maintenanceForm);
                  if (maintenanceForm.status === "Concluído") {
                    await saveExtract(extractForm);
                  }
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
    if (this.state.isCameraRoll) {
      return this.viewGallery();
    }
    if (this.state.isCamera) {
      return this.viewCamera();
    }
    return this.viewForm();
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
    paddingTop: 16,
    paddingBottom: 16,
    flexDirection: "column",
    backgroundColor: "#E5E5E5",
  },
  containerRNCamera: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "black",
  },
  preview: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  capture: {
    flex: 0,
    backgroundColor: "#ffff",
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: "center",
    margin: 20,
  },
  containerPicker: {
    alignSelf: "flex-end",
    width: "50%",
    backgroundColor: "#FFB400",
    borderRadius: 10,
    marginEnd: 10,
    paddingLeft: 25,
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
  img: {
    aspectRatio: 1,
    width: "100%",
  },
  buttonContainer: {
    marginBottom: 40,
  },
});

const mapStateToProps = (state) => {
  return {
    maintenanceForm: state.maintenanceForm,
    extractForm: state.extractForm,
  };
};

const mapDispatchToProps = {
  setField,
  saveExtract,
  setFieldExtracts,
  saveMaintenance,
  setAllFields,
  resetForm,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewMaintenanceScreen);
