import 'react-native-gesture-handler';
import * as React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MaintenanceScreen, HistoricScreen, ExtractScreen} from './src/screens';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Histórico" component={HistoricScreen}/>
        <Tab.Screen name="Manutenções" component={MaintenanceScreen}/>
        <Tab.Screen name="Extrato" component={ExtractScreen}/>        
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// export default class App extends Component {
//   render() {
//     return (
//       <View>
        
//       </View>
//     );
//   }
// }
