import EStyleSheet from 'react-native-extended-stylesheet';

export const styles = EStyleSheet.create({
    btnContainer: {
        backgroundColor: '$WHITE',
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 21,
        paddingVertical: 17,
        borderRadius: 10,
    },
    btnTitle: {
        fontSize: '$FONT_SIZE_16',
        fontFamily: '$FONT_ROBOTO_500',
        textTransform: 'uppercase',
        letterSpacing: '$LETTER_SPACING',
        color: '$DARK_GRAY',
    },
});
