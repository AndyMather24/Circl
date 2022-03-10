import { View, Text } from 'react-native';

import { styles } from '../FixturePanel/FixturePanel.Style';

const FixturePanel = () => {
    return (
        <View style={styles.container}>
            <View style={styles.topSection}>
                <View style={styles.detailWrapper}>
                <Text style={styles.fixtureDetail}> NEW </Text>
                </View>            
                <Text style={styles.scoreBox}>
                    -
                </Text>
                <Text style={styles.time}>
                    19:30
                </Text>
                <Text style={styles.scoreBox}>
                    -
                </Text>
                <View style={styles.detailWrapper}>
                <Text style={styles.fixtureDetail}> MAN </Text>
                </View>
            </View>
            <View style={styles.middleSection}>
            <Text style={[styles.teamName, styles.homeTeam]}>Newcastle</Text>
            <Text  style={[styles.teamName, styles.awayTeam]} >Manchester Utd</Text>
            </View>
        </View>
    )
}


export default FixturePanel;
