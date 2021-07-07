import EStyleSheet from 'react-native-extended-stylesheet';

export const generateStyles = isActive =>
    EStyleSheet.create({
        itemContainer: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        },
        item: {
            height: 70,
            width: 70,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
            borderWidth: isActive ? 2 : 0,
            borderColor: '$WHITE_TRANSPARENT',
            backgroundColor: isActive ? '$TRANSPARENT' : '$WHITE',
        },
        itemTitle: {
            textTransform: 'capitalize',
            fontSize: '$FONT_SIZE_18',
            color: '$fontColor',
            fontFamily: '$FONT_ROBOTO_400',
        },
    });
