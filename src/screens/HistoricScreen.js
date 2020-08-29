import React from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import TitlePage from '../components/TitlePage';
import axios from 'axios';
import HistoricList from '../components/HistoricList';

export default class HistoricScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            historic: [],
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
                historic: results,
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
        const textElements = this.state.historic.map(historicItem => {
            const {first} = historicItem.name;
            return <Text key={first}>{first}</Text>
        })

        return textElements;
    }

    render() {
        return (      
            <View style={styles.container}>
                <View style={{marginTop: 20}}>
                    <TitlePage label={'Histórico'}/>
                </View>
                {
                    this.state.loading
                    ?
                    <ActivityIndicator size="large" color='#FFB400' />
                    :
                        this.state.error
                        ?
                        <Text style={styles.error}>Erro ao carregar lista de históricos...</Text>
                        :
                        <HistoricList 
                            historic={this.state.historic}
                            //Implementar Toque
                        />
                }
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
  