import EStyleSheet from 'react-native-extended-stylesheet';

export const styles = EStyleSheet.create({
    relevanceContainer: {
        marginTop: 35,
    },
    headTitle: {
        textTransform: 'uppercase',
        fontSize: '$FONT_SIZE_14',
        color: '$WHITE',
        fontFamily: '$FONT_ROBOTO_700',
    },
    itemsContainer: {
        marginTop: 15,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    divider: {
        marginTop: 34,
        height: 1,
        width: '100%',
        backgroundColor: '$GRAY',
    },
});
