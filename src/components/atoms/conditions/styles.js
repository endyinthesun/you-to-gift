import EStyleSheet from 'react-native-extended-stylesheet';

export const styles = EStyleSheet.create({
    iconWarning: {
        width: '28rem',
        height: '26rem',
    },
    iconQuestionMark: {
        width: '21rem',
        height: '21rem',
    },

    container: {
        marginTop: '21rem',
    },
    topWarning: {
        paddingHorizontal: '22rem',
        paddingVertical: '22rem',
        backgroundColor: '$WHITE',
        borderRadius: 10,
    },
    topWarningText: {
        color: '$BLACK',
        marginTop: '12rem',
        fontSize: '$FONT_SIZE_14',
        fontFamily: '$FONT_ROBOTO_300',
    },
    topWarningPlace: {
        color: '$BLACK',
        marginTop: '12rem',
        fontSize: '$FONT_SIZE_14',
        fontFamily: '$FONT_ROBOTO_500',
    },

    conditionsContainer: {
        marginTop: '21rem',
        backgroundColor: '$WHITE',
        borderRadius: 10,
        overflow: 'hidden',
    },

    conditions: {
        paddingHorizontal: '22rem',
        paddingVertical: '22rem',
        backgroundColor: '$WHITE',
        borderRadius: 10,
        overflow: 'hidden',
    },
    conditionsText: {
        color: '$BLACK',
        fontSize: '$FONT_SIZE_16',
        fontFamily: '$FONT_ROBOTO_300',
    },
    hashtags: {
        color: '$hashtag',
    },
    bottomWarning: {
        paddingHorizontal: '30rem',
        paddingVertical: '20rem',
        backgroundColor: '$BLUE_LIGHT',
    },
    warningTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    warningTitleLeft: {
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    warningTitleText: {
        color: '$BLACK',
        textTransform: 'uppercase',
        fontSize: '$FONT_SIZE_18',
        fontFamily: '$FONT_ROBOTO_400',
        marginLeft: '17rem',
    },
    warningText: {
        color: '$BLACK',
        marginTop: '10rem',
        fontSize: '$FONT_SIZE_14',
        fontFamily: '$FONT_ROBOTO_300',
    },
});
