import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './FixtureCard.Style';


const FixtureCard = ({navigation}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('login')}>   
                <View style={styles.topSection}>
                    <Text style={[styles.topSectionText]}>
                        NEW
                    </Text>
                    <Text style={[styles.topSectionText, styles.versusBox]}>
                        V
                    </Text>
                    <Text style={[styles.topSectionText]}>
                        MUN
                    </Text>
                </View>
                <View style={styles.lowerBanner}>
                    <Text style={[styles.lowerText, styles.alignLeft]}>
                        Thu 10, 19:45
                    </Text>
                    <Text style={[styles.lowerText, styles.alignRight]}>
                        Prime Video
                    </Text>
                </View>
            </TouchableOpacity>
        </View>

    )
}


export default FixtureCard;
