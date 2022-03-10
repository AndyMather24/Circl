
import { ScrollView, StyleSheet } from "react-native";
import FixturePanel from "../FixturePanel/FixturePanel";
import SubHeader from "../SubHeader/SubHeader"


const FixtureList = () => {
    return (
        <ScrollView contentContainerStyle={styles.container} >
            <SubHeader >
            </SubHeader>
            <FixturePanel></FixturePanel>
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