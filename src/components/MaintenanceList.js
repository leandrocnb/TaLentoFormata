import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import MaintenanceListItem from './MaintenanceListItem';

const MaintenanceList = props => {
    const {maintenance} = props;

    return(
        <FlatList 
            style={styles.container}
            data={maintenance}
            renderItem={({item}) => (
                <MaintenanceListItem 
                    maintenanceItem={item}
                />
            )}
            keyExtractor={ (item, index) => item.name.first+index } 
        />
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#E5E5E5',
    }
});

export default MaintenanceList;
