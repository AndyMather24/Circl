import { Text, View } from "react-native";
import { styles } from "./SubHeader.Style";

const SubHeader = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.subHeader}>
             Premier League 
            </Text>
            <Text style={styles.dateHeader} >
            Thu 10, 19:45
            </Text>
        </View >
    );
};


export default SubHeader;