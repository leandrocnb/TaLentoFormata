import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ExtractListItem = props => {
    return(
        <View>
            <View style={styles.colum}>
                <Text style={styles.label}>Data</Text>
                <Text style={styles.label}>Serviço</Text>
                <Text style={styles.label}>Valor</Text> 
            </View>
            <Text style={styles.divLine}>{'_______________________________________'}</Text>
            <View style={styles.colum}>
                <Text style={styles.item}>31/08/20</Text>
                <Text style={styles.item}>Formatação e Limpeza</Text>
                <Text style={styles.item}>100,00</Text> 
            </View>
            <View style={styles.colum}>
                <Text style={styles.item}>31/08/20</Text>
                <Text style={styles.item}>Formatação e Limpeza</Text>
                <Text style={styles.item}>100,00</Text> 
            </View>
            <View style={styles.colum}>
                <Text style={styles.item}>31/08/20</Text>
                <Text style={styles.item}>Formatação e Limpeza</Text>
                <Text style={styles.item}>100,00</Text> 
            </View>
            <Text style={styles.divLine}>{'_______________________________________'}</Text>
            <View style={styles.colum}>
                <Text style={styles.total}>Total</Text>
                <Text style={styles.total}>R$ 300</Text> 
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    colum: {
        flexDirection: 'row',
        alignSelf: 'center'
    },
    line: {
        flexDirection: 'column',
        flex: 1,
    },
    label: {
        fontFamily: 'Revalia',
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 50,
        marginRight: 50,
    },
    item: {
        fontFamily: 'Revalia',
        fontSize: 13,
        margin: 9
    },
    total: {
        fontFamily: 'Revalia',
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 125,
        marginRight: 125,
    },
    divLine: {
        fontFamily: 'Revalia',
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 20,
        marginRight: 20,
        alignSelf: 'center'
    }
});

export default ExtractListItem;