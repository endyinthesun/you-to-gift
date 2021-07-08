import EStyleSheet from 'react-native-extended-stylesheet';

export const styles = EStyleSheet.create({
    btn: {
        alignItems: 'center',
    },
    btnIcon: {
        height: 55,
        width: 55,
        borderColor: '$GRAY',
        borderWidth: 2,
        borderRadius: 55,
    },
    btnTitle: {
        fontSize: '$FONT_SIZE_13',
        fontFamily: '$FONT_ROBOTO_400',
        color: '$WHITE',
        marginTop: 13,
    },
});
