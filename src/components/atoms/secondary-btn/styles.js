import EStyleSheet from 'react-native-extended-stylesheet';

export const styles = EStyleSheet.create({
    containerBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: '21rem',
        backgroundColor: '$WHITE',
        paddingRight: '28rem',
        paddingLeft: '70rem',
        borderRadius: 10,
        overflow: 'hidden',
    },
    iconContainer: {
        position: 'absolute',
        left: '28rem',
    },
    title: {
        fontSize: '$FONT_SIZE_16',
        fontFamily: '$FONT_ROBOTO_300',
        color: '$BLACK',
    },
});
