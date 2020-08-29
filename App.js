import 'react-native-gesture-handler';
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
    MaintenanceScreen,
    NewMaintenanceScreen, 
    HistoricScreen, 
    ExtractScreen, 
} from './src/screens';


// Rotas de Navegação Manutenções
const MaintenanceStack = createStackNavigator();

function MaintenanceTabStack() {
    return (
        <MaintenanceStack.Navigator>
            <MaintenanceStack.Screen 
                name="MANUTENÇÕES" 
                component={MaintenanceScreen}
                options={{ 
                    title: 'TaLentoFormata',
                    headerStyle: {
                        backgroundColor: '#747474',
                    },
                    headerTitleStyle: {
                        fontSize: 30,
                        fontFamily: 'Revalia'
                    },
                    headerTintColor: '#FFB400',
                    headerTitleAlign: 'center'
                }}
            />
            <MaintenanceStack.Screen 
                name="AddMaintenance" 
                component={NewMaintenanceScreen}
                options={{ 
                    title: 'TaLentoFormata',
                    headerStyle: {
                        backgroundColor: '#747474',
                    },
                    headerTitleStyle: {
                        fontSize: 25,
                        fontFamily: 'Revalia'
                    },
                    headerTintColor: '#FFB400',
                    headerTitleAlign: 'center'
                }}
            />
        </MaintenanceStack.Navigator>
    )
}

//Rotas de Navegação Histórico
const HistoricStack = createStackNavigator();

function HistoricTabStack() {
    return(
        <HistoricStack.Navigator>
            <HistoricStack.Screen 
                name="HISTÓRICO" 
                component={HistoricScreen}
                options={{ 
                    title: 'TaLentoFormata',
                    headerStyle: {
                        backgroundColor: '#747474',
                    },
                    headerTitleStyle: {
                        fontSize: 30,
                        fontFamily: 'Revalia'
                    },
                    headerTintColor: '#FFB400',
                    headerTitleAlign: 'center'
                }}
            />
        </HistoricStack.Navigator>
    )
}

//Rotas de Navegação Extrato
const ExtractStack = createStackNavigator();

function ExtractTabStack() {
    return(
        <ExtractStack.Navigator>
            <ExtractStack.Screen 
                name="HISTÓRICO" 
                component={ExtractScreen}
                options={{ 
                    title: 'TaLentoFormata',
                    headerStyle: {
                        backgroundColor: '#747474',
                    },
                    headerTitleStyle: {
                        fontSize: 30,
                        fontFamily: 'Revalia'
                    },
                    headerTintColor: '#FFB400',
                    headerTitleAlign: 'center'
                }}
            />
        </ExtractStack.Navigator>
    )
}

// Rotas de Navegação em Abas (Manutenções/Histórico/Extrato)
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
            activeBackgroundColor: '#E5E5E5',
            labelStyle: {
                fontSize: 15,
                fontFamily: 'Revalia',
                color: '#070C2B'
            },
            style: {
                backgroundColor: '#747474'
            }
        }}
      >
        <Tab.Screen name="Manutenções" component={MaintenanceTabStack}/>
        <Tab.Screen name="Histórico" component={HistoricTabStack}/>
        <Tab.Screen name="Extrato" component={ExtractTabStack}/>        
      </Tab.Navigator>
    </NavigationContainer>
  );
}
