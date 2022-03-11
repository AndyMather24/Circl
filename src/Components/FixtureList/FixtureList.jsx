
import { ScrollView, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";
import FixturePanel from "../FixturePanel/FixturePanel";
import SubHeader from "../SubHeader/SubHeader"


const FixtureList = ({navigation}) => {
    return (
        <ScrollView contentContainerStyle={styles.container} >
            <SubHeader >
            </SubHeader>
            <FixturePanel navigation={navigation}></FixturePanel>
            <SubHeader>
            </SubHeader>
            <FixturePanel></FixturePanel>
            <FixturePanel></FixturePanel>
            <SubHeader>
            </SubHeader>
            <FixturePanel></FixturePanel>
            <FixturePanel></FixturePanel>
        </ScrollView>

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