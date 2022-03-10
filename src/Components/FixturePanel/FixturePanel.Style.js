import { StyleSheet } from 'react-native'
import { Typography, Colors } from '../../Styles';
import { colors } from '../../Styles/colors';

const styles = StyleSheet.create({
    container: {
        alignContent: 'center',
        width: '86%',
        height: 100,
        margin: 10,
        borderRadius: 8,
        backgroundColor: '#0F0D24',
        flexDirection: 'column'
    },

    topSection: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'center',
    },


    detailWrapper: {
        borderColor: 'red',
        borderBottomColor: 'blue',
        borderStyle: 'solid',
        padding:  2
    },

    fixtureDetail: {
        ...Typography.Header.title,
        margin: 8,
    },


    scoreBox: {
        ...Typography.FontSize.md,
        ...Typography.FontWeight.bold,
        backgroundColor: '#1B192F',
        color: Colors.colors.primaryFont,
        width: 25,
        height: 25,
        textAlign: 'center',
        margin: 10,
        padding: 2
    },

    time: {
        ...Typography.FontSize.md,
        color: Colors.colors.secondaryFont,
        textAlign: 'center',
        margin: 10,


    },

    middleSection: {
        flex: 1,
        flexDirection: 'row',
        width: '100%'
    },

    teamName: {
        ...Typography.FontSize.md,
        color: Colors.colors.primaryFont,
        marginTop: 10
    },

    homeTeam:{
        textAlign: 'left',
        marginRight: 'auto',
        paddingLeft: 15,

    },

    awayTeam: {
    textAlign: 'right',
    marginLeft: 'auto',
    paddingRight: 15,

    },


    detailWrapper: {
        borderBottomColor: 'red',
        borderBottomWidth: 3,
        borderStyle: 'solid',
        padding:  2 
    },

    bottomSection: {
        flex: 1,
        color: 'white'
    },

})

export { styles };