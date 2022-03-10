import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 5,

    },

    subHeader: {
        marginTop: 5,
        flex: 1,
        fontWeight: 'bold',
        fontSize: 16,
        color: '#FFFFFF',
        textAlign: 'left',
        marginRight: 15,
    },

    dateHeader: {
        marginTop: 5,
        flex: 1,
        color: '#818190',
        fontWeight: 'bold',
        fontSize: 14,
        textAlign: 'right',
        marginRight: 15,

    },

})

export { styles };