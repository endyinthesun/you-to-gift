import EStyleSheet from 'react-native-extended-stylesheet';

export const generateStyles = isActive =>
    EStyleSheet.create({
        itemContainer: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        },
        item: {
            height: '70rem',
            width: '70rem',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '10rem',
            borderWidth: isActive ? '2rem' : 0,
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
