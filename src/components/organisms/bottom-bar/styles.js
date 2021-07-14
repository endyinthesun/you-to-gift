import EStyleSheet from 'react-native-extended-stylesheet';
export const styles = EStyleSheet.create({
    navContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        // flexWrap: 'wrap',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    },
    nav: {
        paddingHorizontal: '$PADDING_HORIZONTAL_TAB_MENU',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
});
