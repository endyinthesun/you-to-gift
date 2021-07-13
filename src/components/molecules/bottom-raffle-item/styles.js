import EStyleSheet from 'react-native-extended-stylesheet';

export const styles = EStyleSheet.create({
    container: {
        // height: 50,
        paddingVertical: 15,
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
        marginLeft: 20,
    },
    dateText: {
        marginLeft: 7,
        color: '$DARK_GRAY',
        fontSize: '$FONT_SIZE_15',
        fontFamily: '$FONT_ROBOTO_400',
    },
    right: {
        flexDirection: 'row',
    },
    budget: {
        color: '$RED',
        fontSize: '$FONT_SIZE_24',
        fontFamily: '$FONT_ROBOTO_500',
    },
    currency: {
        color: '$BLACK',
        fontSize: '$FONT_SIZE_24',
        fontFamily: '$FONT_ROBOTO_100',
    },
});
