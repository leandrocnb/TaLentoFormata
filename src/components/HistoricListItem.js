import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const HistoricListItem = props => {

    const {historicItem} = props;
    const {title, first, last} = historicItem.name;
    const {thumbnail} = historicItem.picture;

    return(
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
                <TouchableOpacity onPress={ () => {
                    console.log('');
                }}>
                    <View style={{alignSelf: 'flex-end', marginRight: 20}}>
                        <Text style={styles.lineText4}>
                            {'Detalhes [+]'}
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
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
    },
    equipament: {
        aspectRatio: 1,
        flex: 1,
        marginLeft: 15,
        borderRadius: 5
    }
})

export default HistoricListItem;