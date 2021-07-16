import EStyleSheet from 'react-native-extended-stylesheet';

export const styles = EStyleSheet.create({
    btnContainer: {
        overflow: 'hidden',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: '25rem',
        paddingVertical: '14rem',
        borderRadius: '10rem',
        backgroundColor: '#E4E0FD',
    },
    btnIcon: {
        marginRight: '17rem',
    },
    btnTitle: {
        fontSize: '$FONT_SIZE_14',
        fontFamily: '$FONT_ROBOTO_400',
        textTransform: 'uppercase',
        color: '$BLACK',
    },
});
