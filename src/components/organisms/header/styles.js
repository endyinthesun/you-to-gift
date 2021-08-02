import EStyleSheet from 'react-native-extended-stylesheet';
export const styles = EStyleSheet.create({
    headerContainer: {
        height: '64rem',
        backgroundColor: 'white',
        flexDirection: 'row',
        paddingHorizontal: '22rem',
        paddingVertical: '15rem',
        alignItems: 'center',
    },
    headerTitle: {
        color: '$fontColor',
        textTransform: 'uppercase',
        fontSize: '$FONT_SIZE_18',
        letterSpacing: '$LETTER_SPACING',
    },
    headerTitleBold: {
        fontFamily: '$FONT_ROBOTO_500',
    },
    headerTitleMedium: {
        fontFamily: '$FONT_ROBOTO_400',
    },
    headerTitleLight: {
        fontFamily: '$FONT_ROBOTO_300',
    },
    headerTitleLink: {
        fontSize: '$FONT_SIZE_16',
        fontFamily: '$FONT_ROBOTO_300',
        color: '$BLUE',
        textDecorationLine: 'underline',
    },

    btn: {
        padding: '5rem',
    },
});
