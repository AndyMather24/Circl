import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import FixtureList from '../Components/FixtureList/FixtureList';
import SubHeader from '../Components/SubHeader/SubHeader';
import TopPanel from '../Components/TopPanel/TopPanel';


const FixturesOverview = [
    {
        league: "Premier League",
        matches:[
            {
                home: "Chelsea",
                homeColour: "blue",
                away: "Liverpool",
                awayColour: "red",
                kickOff: "Thu 10, 19:45",
                broadcaster: "Sky Sports"
            },
            {
                home: "Leeds",
                homeColour: "white",
                away: "Liverpool",
                awayColour: "red",
                kickOff: "Thu 10, 19:45",
                broadcaster: "Amazon Prime"
            }              
        ],

    }, {
        league: "Championship",
        matches:[
            {
                home: "Middlesborough",
                homeColour: "red",
                away: "Birmingham",
                awayColour: "blue",
                kickOff: "Thu 10, 19:45",
                broadcaster: "Amazon Prime"
            },   
            {
                home: "Hull City",
                homeColour: "orange",
                away: "Preston",
                awayColour: "blue",
                kickOff: "Thu 10, 19:45",
                broadcaster: "Sky Sports"
            },               
            {
                home: "Chelsea",
                homeColour: "blue",
                away: "Liverpool",
                awayColour: "red",
                kickOff: "Thu 10, 19:45",
                broadcaster: "Sky Sports"
            },
            {
                home: "Leeds",
                homeColor: "white",
                away: "Liverpool",
                awayColour: "red",
                kickOff: "Thu 10, 19:45",
                broadcaster: "Amazon Prime"
            }      
        ] 
    },
        
]

const UpcomingFixtures = [
        {
            home: "Middlesborough",
            homeColour: "red",
            away: "Birmingham",
            awayColour: "blue",
            kickOff: "Thu 10, 19:45",
            broadcaster: "Amazon Prime"
        },   
        {
            home: "Hull City",
            homeColour: "orange",
            away: "Preston",
            awayColour: "blue",
            kickOff: "Thu 10, 19:45",
            broadcaster: "Sky Sports"
        },
        {
            home: "Leeds",
            homeColour: "white",
            away: "Liverpool",
            awayColour: "red",
            kickOff: "Thu 10, 19:45",
            broadcaster: "Amazon Prime"
        }  
    ]
const SearchScreen = ({navigation}) => {

    return (
        <View style={styles.container}>
            <TopPanel navigation={navigation} matches={UpcomingFixtures}></TopPanel>
            <ScrollView >
            {              
                    FixturesOverview.map((fixture, i) => {
                        return ([
                            <SubHeader league={fixture.league}/>,
                            <FixtureList key={i} navigation={navigation} matches={fixture.matches}/>
                        ])
                    })
                }  
            </ScrollView>

                   
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