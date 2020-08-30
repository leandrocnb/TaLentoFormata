import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Collapsible from 'react-native-collapsible';

export default class HistoricListItem extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            isExpanded: true,
            detail: "",
        }
    }

    detail = () => {
        return(
            <Collapsible collapsed={this.state.isExpanded}>
                <View style={styles.detail}>
                    <Text style={styles.lineText1}>
                        {'Aqui vai os detalhes'}
                    </Text>
                </View>
            </Collapsible>
        );
    }

    render() {
        const {historicItem} = this.props;
        const {title, first, last} = historicItem.name;
        const {thumbnail} = historicItem.picture;
        const {isExpanded} = this.state;

        return(
            <View style={styles.container}>
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
                    </View>
                </View>
                {this.detail()}
                <TouchableOpacity onPress={ () => {
                    this.setState({isExpanded:  !this.state.isExpanded})
                }}>
                    <View style={{alignSelf: 'flex-end', marginRight: 20}}>
                        <Text style={styles.lineText4}>
                            {'Detalhes [+]'}
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        borderBottomColor: '#bbb',
    },
    detail: {
        flex: 1,
        marginLeft: 20,
    },
    line: {
        height: 100, 
        
        alignItems: 'center',
        flexDirection: 'row',
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
    },
    collapsed: {
        maxHeight: 60,
    },
    expanded: {
        flex: 1,
    }
})

// export default HistoricListItem;