import EStyleSheet from 'react-native-extended-stylesheet';

export const generateStyles = isActive =>
    EStyleSheet.create({
        item: {
            height: 45,
            width: '100%',
            flexDirection: 'row',
            marginBottom: 15,
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingLeft: 24,
            paddingRight: 16,
            borderRadius: 10,
            borderWidth: isActive ? 2 : 0,
            borderColor: '$WHITE_TRANSPARENT',
            backgroundColor: isActive ? '$TRANSPARENT' : '$WHITE',
        },
        itemTitle: {
            fontSize: '$FONT_SIZE_18',
            color: isActive ? '$WHITE' : '$fontColor',
            fontFamily: isActive ? '$FONT_ROBOTO_500' : '$FONT_ROBOTO_300',
        },
    });
