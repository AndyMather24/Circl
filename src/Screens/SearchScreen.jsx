import React from 'react';
import { View, StyleSheet } from 'react-native';
import TopPanel from '../Components/TopPanel/TopPanel';

const SearchScreen = () => {
    return (
        <View style={styles.container}>
            <TopPanel></TopPanel>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(0, 2, 26,1)",

    },
});

export default SearchScreen;