import EStyleSheet from 'react-native-extended-stylesheet';

export const styles = EStyleSheet.create({
    post: {
        borderRadius: '10rem',
        overflow: 'hidden',
    },
    info: {
        paddingHorizontal: '30rem',
        paddingTop: '30rem',
        paddingBottom: '24rem',
        backgroundColor: '#FDEDF7',
    },
    userInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    userInfoBlock: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    userName: {
        fontSize: '$FONT_SIZE_16',
        fontFamily: '$FONT_ROBOTO_400',
        textDecorationLine: 'underline',
    },
    amountSubs: {
        fontSize: '$FONT_SIZE_12',
        fontFamily: '$FONT_ROBOTO_300',
    },
    budget: {
        color: '$RED',
        fontSize: '$FONT_SIZE_40',
        textAlign: 'center',
    },
    details: {
        backgroundColor: 'white',
        paddingHorizontal: '30rem',
        paddingTop: '33rem',
        paddingBottom: '25rem',
    },
    detailsActual: {
        color: '$BLACK',
        textAlign: 'center',
        textTransform: 'uppercase',
        fontFamily: '$FONT_ROBOTO_100',
        fontSize: '$FONT_SIZE_16',
    },
    timeInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: '12rem',
        paddingHorizontal: '10rem',
    },
    detailsTime: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    detailsTimeText: {
        marginLeft: '10rem',
        color: '$BLACK',
        fontFamily: '$FONT_ROBOTO_400',
        fontSize: '$FONT_SIZE_16',
    },
    addFavoriteBtn: {
        marginTop: '23rem',
    },
});
