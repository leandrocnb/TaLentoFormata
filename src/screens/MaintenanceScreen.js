import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, ActivityIndicator} from 'react-native';
import ActionButton from 'react-native-action-button';
import TitlePage from '../components/TitlePage';
import axios from 'axios';
import MaintenanceList from '../components/MaintenanceList';

export default class MaintenanceScreen extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            maintenance: [],
            loading: false,
            error: false,
        };
    }

    componentDidMount() {
        this.setState({ loading: true });
        axios
        .get('https://randomuser.me/api/?nat=br&results=20')
        .then(response => {
            const {results} = response.data;
            this.setState({
                maintenance: results,
                loading: false,
            })
        }).catch(error => {
            this.setState({
                error: true,
                loading: false
            })
        });
    }
    
    renderList() {
        const textElements = this.state.maintenance.map(maintenanceItem => {
            const {first} = maintenanceItem.name;
            return <Text key={first}>{first}</Text>
        })

        return textElements;
    }

    render() {
        return (      
            <View style={styles.container}>
                <View style={{marginTop: 20}}>
                    <TitlePage label={'Manutenções'}/>
                </View>
                {
                    this.state.loading
                    ?
                    <ActivityIndicator size="large" color='#FFB400' />
                    :
                        this.state.error
                        ?
                        <Text style={styles.error}>Erro ao carregar lista de manutenções...</Text>
                        :
                        <MaintenanceList 
                            maintenance={this.state.maintenance}
                            //Implementar Toque
                        />
                }
                <ActionButton 
                    buttonColor='#747474'
                    size={70}
                    onPress={() => {
                        this.props.navigation.navigate('AddMaintenance')
                    }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#E5E5E5',
    },
    error: {
        fontSize: 18,
        color: 'red',
        alignSelf: 'center'
    }
});
  