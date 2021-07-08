import EStyleSheet from 'react-native-extended-stylesheet';

export const generateStyles = isOpen =>
    EStyleSheet.create({
        container: {
            borderRadius: 10,
            backgroundColor: '$WHITE',
            opacity: 0.9,
            flexDirection: 'row',
            paddingHorizontal: 21,
            paddingVertical: 14,
            alignItems: 'center',
            justifyContent: 'space-between',
        },
        wrapper: {
            flexDirection: 'row',
        },
        icon: {
            height: 23,
            width: 23,
            marginRight: 25,
        },
        title: {
            fontSize: '$FONT_SIZE_18',
            color: '$fontColor',
            fontFamily: '$FONT_ROBOTO_300',
        },
        arrows: {
            // transform: [{rotate: 'isOpen'}],
        },
    });
