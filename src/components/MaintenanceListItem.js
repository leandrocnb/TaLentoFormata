import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const MaintenanceListItem = props => {
    const {maintenanceItem} = props;
    const {title, first, last} = maintenanceItem.name;
    const {thumbnail} = maintenanceItem.picture;


    return(
        <TouchableOpacity onPress={ () => {
            console.log('');
        }}>
            <View style={styles.line}>
                <Image source={{uri: thumbnail}} style={styles.equipament}/>
                <View style={styles.colum}>
                    <Text style={styles.lineText1}>
                        {'Formatação e Limpeza'}
                    </Text>
                    <Text style={styles.lineText2}>
                        {title + ' ' + first + ' ' + last}
                    </Text>
                    <Text style={styles.lineText3}>
                        {'R$: 100,00'}
                    </Text>
                    <View style={{alignSelf: 'flex-end', marginRight: 20}}>
                        <Text style={styles.lineText4}>
                            {'Em Andamento'}
                        </Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    line: {
        height: 100, 
        borderBottomWidth: 1,
        borderBottomColor: '#bbb',
        alignItems: 'center',
        flexDirection: 'row'
    },
    colum: {
        flexDirection: 'column',
        flex: 4,
        padding: 10
    },
    status: {
        fontSize: 15,
        fontFamily: 'Rivalia',
        flexDirection: 'row'
    },
    lineText1: {
        fontSize: 20,
        fontFamily: 'Revalia',
        fontWeight: 'bold',
    },
    lineText2: {
        fontSize: 17,
        fontFamily: 'Revalia',
        fontWeight: 'bold',
    },
    lineText3: {
        fontSize: 15,
        fontFamily: 'Revalia',
        fontWeight: 'bold',
    },
    lineText4: {
        fontSize: 16,
        fontFamily: 'Revalia',
        fontWeight: 'bold',
        color: '#00C213'
    },
    equipament: {
        aspectRatio: 1,
        flex: 1,
        marginLeft: 15,
        borderRadius: 5
    }
})

export default MaintenanceListItem;