import EStyleSheet from 'react-native-extended-stylesheet';

export const generateStyles = (isFocused, menuItemTranslateY) =>
    EStyleSheet.create({
        tabItemContainer: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: isFocused ? 0 : 11,
            transform: [{translateY: menuItemTranslateY}],
        },
        tabItem: {
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: isFocused ? '$WHITE' : '$SECONDARY',
            width: isFocused ? 70 : 55,
            height: isFocused ? 70 : 55,
            borderRadius: 100,
        },
    });
