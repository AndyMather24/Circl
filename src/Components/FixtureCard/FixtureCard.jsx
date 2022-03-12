import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './FixtureCard.Style';

const FixtureCard = ({ navigation, match }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('login')}>
        <View style={styles.topSection}>
          <Text style={[styles.topSectionText]}>{match.home.substring(0, 3)}</Text>
          <Text style={[styles.topSectionText, styles.versusBox]}>V</Text>
          <Text style={[styles.topSectionText]}>{match.away.substring(0, 3)}</Text>
        </View>
        <View style={styles.lowerBanner}>
          <Text style={[styles.lowerText, styles.alignLeft]}>{match.kickOff}</Text>
          <Text style={[styles.lowerText, styles.alignRight]}>{match.broadcaster}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default FixtureCard;
