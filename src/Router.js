import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  MaintenanceScreen,
  NewMaintenanceScreen,
  EditMaintenanceScreen,
  HistoricScreen,
  ExtractScreen,
  LoginScreen,
} from "./screens";
import { Text, View } from "react-native";

// Rotas de Navegação Manutenções
const MaintenanceStack = createStackNavigator();

function MaintenanceTabStack() {
  return (
    <MaintenanceStack.Navigator>
      <MaintenanceStack.Screen
        name="NewMaintenanceScreen"
        component={NewMaintenanceScreen}
        options={{
          title: "ADICIONAR",
          headerStyle: {
            backgroundColor: "#747474",
          },
          headerTitleStyle: {
            fontSize: 25,
            fontFamily: "Revalia",
          },
          headerTintColor: "#FFB400",
          headerTitleAlign: "center",
        }}
      />
      <MaintenanceStack.Screen
        name="MANUTENÇÕES"
        component={MaintenanceScreen}
        options={{
          title: "MANUTENÇÕES",
          headerStyle: {
            backgroundColor: "#747474",
          },
          headerTitleStyle: {
            fontSize: 30,
            fontFamily: "Revalia",
          },
          headerTintColor: "#FFB400",
          headerTitleAlign: "center",
        }}
      />
      <MaintenanceStack.Screen
        name="EditMaintenance"
        component={EditMaintenanceScreen}
        options={{
          title: "EDITAR",
          headerStyle: {
            backgroundColor: "#747474",
          },
          headerTitleStyle: {
            fontSize: 25,
            fontFamily: "Revalia",
          },
          headerTintColor: "#FFB400",
          headerTitleAlign: "center",
        }}
      />
    </MaintenanceStack.Navigator>
  );
}

//Rotas de Navegação Histórico
const HistoricStack = createStackNavigator();

function HistoricTabStack() {
  return (
    <HistoricStack.Navigator>
      <HistoricStack.Screen
        name="HISTÓRICO"
        component={HistoricScreen}
        options={{
          title: "HISTÓRICO",
          headerStyle: {
            backgroundColor: "#747474",
          },
          headerTitleStyle: {
            fontSize: 30,
            fontFamily: "Revalia",
          },
          headerTintColor: "#FFB400",
          headerTitleAlign: "center",
        }}
      />
    </HistoricStack.Navigator>
  );
}

//Rotas de Navegação Extrato
const ExtractStack = createStackNavigator();

function ExtractTabStack() {
  return (
    <ExtractStack.Navigator>
      <ExtractStack.Screen
        name="EXTRATO"
        component={ExtractScreen}
        options={{
          title: "EXTRATO",
          headerStyle: {
            backgroundColor: "#747474",
          },
          headerTitleStyle: {
            fontSize: 30,
            fontFamily: "Revalia",
          },
          headerTintColor: "#FFB400",
          headerTitleAlign: "center",
        }}
      />
    </ExtractStack.Navigator>
  );
}

//Rotas de Navegação Extrato
const LoginStack = createStackNavigator();

// Rotas de Navegação em Abas (Manutenções/Histórico/Extrato)
const Tab = createBottomTabNavigator();

//Navegação Principal
function MainNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: "#FFB400",
        labelStyle: {
          fontSize: 12,
          fontFamily: "Revalia",
          paddingBottom: 5,
        },
        style: {
          backgroundColor: "#747474",
        },
      }}
    >
      <Tab.Screen name="Home" component={MaintenanceTabStack} />
      <Tab.Screen name="Histórico" component={HistoricTabStack} />
      <Tab.Screen name="Extrato" component={ExtractTabStack} />
    </Tab.Navigator>
  );
}

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <LoginStack.Navigator>
          <LoginStack.Screen
            name="MainNavigation"
            component={MainNavigation}
            options={{
              headerShown: false,
            }}
          />
          <LoginStack.Screen
            name="Login"
            component={LoginScreen}
            options={{
              title: "TaLentoFormata",
              headerStyle: {
                backgroundColor: "#747474",
              },
              headerTitleStyle: {
                fontSize: 30,
                fontFamily: "Revalia",
              },
              headerTintColor: "#FFB400",
              headerTitleAlign: "center",
            }}
          />
        </LoginStack.Navigator>
      </NavigationContainer>
    );
  }
}
