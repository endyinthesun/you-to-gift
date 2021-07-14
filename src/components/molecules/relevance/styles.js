import EStyleSheet from 'react-native-extended-stylesheet';

export const styles = EStyleSheet.create({
    relevanceContainer: {
        marginTop: '35rem',
    },
    headTitle: {
        textTransform: 'uppercase',
        fontSize: '$FONT_SIZE_14',
        color: '$WHITE',
        fontFamily: '$FONT_ROBOTO_700',
    },
    itemsContainer: {
        marginTop: '15rem',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    divider: {
        marginTop: '34rem',
        height: '1rem',
        width: '100%',
        backgroundColor: '$GRAY',
    },
});
