import { StyleSheet } from 'react-native'
import { backgroundColor, borderColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

const styles = StyleSheet.create({
    container: {
        width: 200,
        height: 120,
        marginRight: 10,
        borderRadius: 8
    },
    topSection: {
        flex: 3,
        flexDirection: 'row',
        alignContent: 'space-between',
        backgroundColor: 'white',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
    },

    topSectionText: {
        fontSize: 16
    },

    versusBox: {
        width: 20,
        height: 20,
        color: 'white',
        backgroundColor: "black",
        textAlign: 'center',
        margin: 5
    },

    lowerBanner: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#020018',
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8
    },

    lowerText: {
        fontSize: 10,
        color: '#B3B2BD',
        marginTop: 8
    },

    boldUpperCase: {
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },

    alignLeft: {
        flex: 1,
        marginRight: 10,
        textAlign: 'left',
        paddingLeft: 5
    },

    alignRight: {
        flex: 1,
        marginLeft: 10,
        textAlign: 'left'
    },

})

export { styles };