import { View, Text, ScrollView } from 'react-native'
import PromoCard from '../PromoCard/PromoCard';
import { styles } from './TopPanel.Style'
import FixtureCard from '../FixtureCard/FixtureCard';

const TopPanel = ({navigation}) => {
    return (
        <View style={styles.top}>
            <Text style={[styles.header]}>Fixtures</Text>
            <ScrollView horizontal style={styles.flexRow}>
                <PromoCard></PromoCard>
                <FixtureCard  navigation={navigation}></FixtureCard>
                <FixtureCard></FixtureCard>
                <FixtureCard></FixtureCard>
                <FixtureCard></FixtureCard>
            </ScrollView>
        </View>
    )
}



export default TopPanel;

