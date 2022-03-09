import { View, Text } from 'react-native';
import { styles } from './FixtureCard.Style';


const FixtureCard = () => {
    return (
        <View style={styles.container}>
            <View style={styles.topSection}>
                <Text style={[styles.topSectionText, styles.boldUpperCase]}>
                    NEW
                </Text>
                <Text style={[styles.topSectionText, styles.boldUpperCase, styles.versusBox]}>
                    V
                </Text>
                <Text style={[styles.topSectionText, styles.boldUpperCase]}>
                    MUN
                </Text>


            </View>
            <View style={styles.lowerBanner}>
                <Text style={[styles.lowerText, styles.boldUpperCase, styles.alignLeft]}>
                    date
                </Text>
                <Text style={[styles.lowerText, styles.boldUpperCase, styles.alignRight]}>
                    broadcaster
                </Text>
            </View>
        </View>

    )
}


export default FixtureCard;
