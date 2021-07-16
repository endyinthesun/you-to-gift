import EStyleSheet from 'react-native-extended-stylesheet';

export const styles = EStyleSheet.create({
    container: {
        // height: 50,
        paddingVertical: '15rem',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    left: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    date: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: '20rem',
    },
    dateText: {
        marginLeft: '7rem',
        color: '$DARK_GRAY',
        fontSize: '$FONT_SIZE_15',
        fontFamily: '$FONT_ROBOTO_400',
    },
});
