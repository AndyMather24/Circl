import { StyleSheet } from 'react-native'
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import { Colors, Typography } from '../../Styles';

const styles = StyleSheet.create({
    top: {
        height: 230,
        backgroundColor: "#1B192F",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    hideTop : {
        height: 100,
        backgroundColor: "#1B192F",
    },

    header: {
        ...Typography.Header.main,
        marginTop: 55,
        marginLeft: 10,
        marginBottom: 10,
    },

    headerRow: {
        flexDirection: 'row',
        height:100
    }, 

    chevron: {
        ...Typography.FontSize.md,
        color: Colors.colors.primaryFont,
        marginTop: 55,
        marginLeft: 240,
        marginBottom: 10,
    }
})

export { styles };