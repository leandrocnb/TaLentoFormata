import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

//Stateless Component
const Title = (props) => {
    return (
        <View style={styles.container}>
            <Text style={
                props.label.length > 15 ? styles.longText : styles.text
            }>{props.label}</Text>
            <Text style={styles.line}>{'_______________________'}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 1,
        marginBottom: 1,
        alignItems: 'center', 
    },
    text: {
        fontSize: 40,
        padding: 0,
        fontFamily: 'Revalia',
        color: '#070C2B',
    },
    longText: {
        fontSize: 26,
        padding: 0,
        fontFamily: 'Revalia',
        color: '#070C2B',
    },
    line: {
        fontWeight: 'bold', 
        fontSize: 35,
        padding: 0,
        marginTop: -30
    }

})

export default Title;