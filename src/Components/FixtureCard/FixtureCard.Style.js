import { StyleSheet } from 'react-native';
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import { Colors, Typography } from '../../Styles/index';


const styles = StyleSheet.create({
    container: {
        width: 210,
        height: 120,
        marginRight: 10,
        borderRadius: 8
    },
    topSection: {
        color: Colors.colors.primaryFont,
        backgroundColor: Colors.colors.primaryFont,
        flex: 3,
        flexDirection: 'row',
        alignContent: 'space-between',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
    },

    topSectionText: {
        ...Typography.FontSize.md,
        ...Typography.Transform.upperCase,
        ...Typography.FontWeight.bold      
    },
    versusBox: {
        backgroundColor: Colors.colors.secondaryComponentBackground,
        color: Colors.colors.primaryFont,
        width: 20,
        height: 20,
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
        color: Colors.colors.secondaryFont,
        marginTop: 8,
        ...Typography.FontSize.sm,
        ...Typography.FontWeight.bold
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