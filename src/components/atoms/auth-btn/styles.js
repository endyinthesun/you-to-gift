import EStyleSheet from 'react-native-extended-stylesheet';

export const styles = EStyleSheet.create({
    btnContainer: {
        backgroundColor: '$WHITE',
        marginBottom: '20rem',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: '21rem',
        paddingVertical: '17rem',
        borderRadius: '10rem',
    },
    btnTitle: {
        fontSize: '$FONT_SIZE_16',
        fontFamily: '$FONT_ROBOTO_500',
        textTransform: 'uppercase',
        letterSpacing: '$LETTER_SPACING',
        color: '$DARK_GRAY',
    },
});
