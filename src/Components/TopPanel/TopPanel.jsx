import { View, Text, ScrollView } from 'react-native'
import PromoCard from '../PromoCard/PromoCard';
import { styles } from './TopPanel.Style'

const TopPanel = () => {
    return (
        <View style={styles.top}>
            <Text style={styles.header}>Fixtures</Text>
            <ScrollView horizontal={true} style={styles.flexRow}>
                <PromoCard></PromoCard>
            </ScrollView>

        </View>
    )
}



export default TopPanel;

