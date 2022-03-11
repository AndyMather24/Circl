import { View, Text, TouchableOpacity} from 'react-native';
import { styles } from '../FixturePanel/FixturePanel.Style';

const FixturePanel = ({navigation, match}) => {
    return (
            <View >
                <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('login')}>   
                    <View style={styles.topSection}>
                    <View style={[styles.detailWrapper, {borderBottomColor : match.homeColour} ]}>
                        <Text style={styles.fixtureDetail}>  {match.home.substring(0,3)} </Text>
                    </View>            
                        <Text style={styles.scoreBox}>
                            -
                        </Text>
                        <Text style={styles.time}>
                            {match.kickOff.substring(7,13)}
                        </Text>
                        <Text style={styles.scoreBox}>
                            -
                        </Text>
                    <View style={[styles.detailWrapper, {borderBottomColor : match.awayColour} ]}>
                        <Text style={styles.fixtureDetail}>   {match.away.substring(0,3)}  </Text>
                    </View>
                    </View>
                    <View style={styles.middleSection}>
                        <Text style={[styles.teamName, styles.homeTeam]}>{match.home}</Text>
                        <Text  style={[styles.teamName, styles.awayTeam]} >{match.away}</Text>
                    </View>
                </TouchableOpacity>
            </View>    
    )
}


export default FixturePanel;
