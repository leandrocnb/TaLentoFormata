import React from 'react';
import {StyleSheet, FlatList, View, Text} from 'react-native';
import ExtractListItem from './ExtractListItem';

const ExtractList = props => {
    return(
        <View>
            <View style={styles.filter}>
                <Text style={styles.textFilter}>[ ] Ordenar</Text>
            </View>
            <ExtractListItem />
        </View>
    )
}

const styles = StyleSheet.create({
    filter: {
        flex: 1,
        alignSelf: 'flex-end',
        paddingEnd: 20,
        paddingBottom: 40,
        paddingTop: 10
        
    },
    textFilter: {
        fontFamily: 'Revalia',
        fontSize: 20,
        fontWeight: 'bold'
    }
});

export default ExtractList;