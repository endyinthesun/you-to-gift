import EStyleSheet from 'react-native-extended-stylesheet';

export const styles = EStyleSheet.create({
    btnContainer: {
        // backgroundColor: 'red',
        // marginBottom: '20rem',
        // borderWidth: 2,
        overflow: 'hidden',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: '30rem',
        paddingVertical: '14rem',
        borderRadius: '10rem',
        backgroundColor: '#E4E0FD',
    },
    btnTitle: {
        fontSize: '$FONT_SIZE_14',
        fontFamily: '$FONT_ROBOTO_400',
        textTransform: 'uppercase',
        color: '$BLACK',
    },
});
