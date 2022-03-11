import React from 'react';
import { View, StyleSheet } from 'react-native';
import FixtureList from '../Components/FixtureList/FixtureList';
import TopPanel from '../Components/TopPanel/TopPanel';

const SearchScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <TopPanel navigation={navigation}></TopPanel>
            <FixtureList navigation={navigation}></FixtureList>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(0, 2, 26,1)",
        flexDirection: 'column'
    }

});


export default SearchScreen;