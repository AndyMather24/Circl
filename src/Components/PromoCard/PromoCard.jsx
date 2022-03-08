import { View, Text } from 'react-native';
import { styles } from './PromoCard.Style';
import { FontAwesome } from '@expo/vector-icons';
const PromoCard = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>
                Give £5, get £5
            </Text>
            <Text style={styles.description}>
                Refer a friend you’ll both earn a
                £5 free bet!
            </Text>
        </View>
    );

}


export default PromoCard;
