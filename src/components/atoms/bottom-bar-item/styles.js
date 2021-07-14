import EStyleSheet from 'react-native-extended-stylesheet';

export const generateStyles = (isFocused, menuItemTranslateY) =>
    EStyleSheet.create({
        tabItemContainer: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: isFocused ? 0 : '11rem',
            transform: [{translateY: menuItemTranslateY}],
        },
        tabItem: {
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: isFocused ? '$WHITE' : '$SECONDARY',
            width: isFocused ? '70rem' : '55rem',
            height: isFocused ? '70rem' : '55rem',
            borderRadius: '100rem',
        },
    });
