import EStyleSheet from 'react-native-extended-stylesheet';
export const styles = EStyleSheet.create({
    headerContainer: {
        height: 64,
        backgroundColor: 'white',
        flexDirection: 'row',
        paddingHorizontal: 22,
        paddingVertical: 15,
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
    headerTitleLink: {
        fontSize: '$FONT_SIZE_16',
        fontFamily: '$FONT_ROBOTO_300',
        color: '$fontColorLink',
        textDecorationLine: 'underline',
    },

    btn: {
        padding: 5,
    },
});
