
import { View, StyleSheet } from "react-native";
import FixturePanel from "../FixturePanel/FixturePanel";

const FixtureList = ({navigation, matches}) => {
    return (
        <View style={styles.container}>
            {
                matches.map((match, i) => {
                    return (
                        <FixturePanel key={i} navigation={navigation} match={match}/>
                    )
                })
            }
        </View>
    )
}   

const styles = StyleSheet.create({

    container: {
        flexDirection: 'column',
        justifyContent:"center", 
        alignItems:"center" 
     
    }



})

export default FixtureList;