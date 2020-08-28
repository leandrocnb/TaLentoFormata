import React from 'react';
import {View, Text} from 'react-native';

export default class MaintenanceScreen extends React.Component {
    render () {
        return (
            <View style={{flex: 1, justifyContent: 'center'}}>
                <View style={{alignItems: 'center'}}>
                    <Text style={{fontSize: 50}}>Tela Manutenção</Text>
                </View>
            </View>
        );
    }
}