import { StyleSheet } from 'react-native'
import { Typography } from '../../Styles';

const styles = StyleSheet.create({
    top: {
        height: 230,
        backgroundColor: "#1B192F",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    header: {
        ...Typography.Header.main,
        marginTop: 55,
        marginLeft: 10,
        marginBottom: 10,
    },

    flexRow: {
        flexDirection: 'column'
    }
})

export { styles };