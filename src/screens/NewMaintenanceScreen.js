import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import TitlePage from '../components/TitlePage';

export default class NewMaintenanceScreen extends React.Component {
    render () {
        return (
            <View style={styles.container}>
                <View style={{marginTop: 20}}>
                    <TitlePage label={'Adicionar Manutenção'}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E5E5E5'
    }
})