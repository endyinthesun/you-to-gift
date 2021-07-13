import EStyleSheet from 'react-native-extended-stylesheet';
export const styles = EStyleSheet.create({
    navContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        height: '$bottomBarHeight',
    },
    nav: {
        paddingHorizontal: '$PADDING_HORIZONTAL_TAB_MENU',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
});
