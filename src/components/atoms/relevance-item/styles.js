import EStyleSheet from 'react-native-extended-stylesheet';

export const generateStyles = isActive =>
    EStyleSheet.create({
        item: {
            height: '45rem',
            width: '100%',
            flexDirection: 'row',
            marginBottom: '15rem',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingLeft: '24rem',
            paddingRight: '16rem',
            borderRadius: '10rem',
            borderWidth: isActive ? '2rem' : 0,
            borderColor: '$WHITE_TRANSPARENT',
            backgroundColor: isActive ? '$TRANSPARENT' : '$WHITE',
        },
        itemTitle: {
            fontSize: '$FONT_SIZE_18',
            color: isActive ? '$WHITE' : '$fontColor',
            fontFamily: isActive ? '$FONT_ROBOTO_500' : '$FONT_ROBOTO_300',
        },
    });
