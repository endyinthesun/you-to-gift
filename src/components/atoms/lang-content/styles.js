import EStyleSheet from 'react-native-extended-stylesheet';

export const styles = EStyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: '25rem',
    },
    btn: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnIcon: {
        height: '56rem',
        width: '56rem',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '$GRAY',
        borderWidth: '2rem',
        borderRadius: '56rem',
        overflow: 'hidden',
    },
    btnTitle: {
        fontSize: '$FONT_SIZE_13',
        fontFamily: '$FONT_ROBOTO_400',
        color: '$WHITE',
        marginTop: '13rem',
    },
});
