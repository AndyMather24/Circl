import { Text, View } from 'react-native';
import { styles } from './SubHeader.Style';

const SubHeader = ({ league, date }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.subHeader}>{league}</Text>
      <Text style={styles.dateHeader}>{date}</Text>
    </View>
  );
};

export default SubHeader;
