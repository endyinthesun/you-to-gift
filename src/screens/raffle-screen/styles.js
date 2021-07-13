import EStyleSheet from 'react-native-extended-stylesheet';

export const styles = EStyleSheet.create({
    post: {
        borderRadius: 10,
        backgroundColor: '#FDEDF7',
        overflow: 'hidden',
        paddingHorizontal: 30,
        paddingVertical: 24,
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
});
