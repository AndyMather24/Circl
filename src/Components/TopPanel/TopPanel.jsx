import { View, Text, ScrollView} from 'react-native'
import PromoCard from '../PromoCard/PromoCard';
import { styles } from './TopPanel.Style'
import FixtureCard from '../FixtureCard/FixtureCard';

const TopPanel = ({navigation, matches}) => {
        return (
        
            <View style={styles.top}>
                    <Text style={[styles.header]}>Fixtures</Text>
                <ScrollView horizontal>
                    <PromoCard/>
                  { matches.map((match, i) => {
                        return (
                             <FixtureCard key={i}  navigation={navigation} match={match}></FixtureCard>
                    )
                     })
                    }
                </ScrollView>
            </View>
        )
    }

  

export default TopPanel;

