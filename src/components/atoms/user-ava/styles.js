import EStyleSheet from 'react-native-extended-stylesheet';

export const generateStyles = size =>
    EStyleSheet.create({
        userAvaContainer: {
            height: size,
            width: size,
            borderRadius: size,
            overflow: 'hidden',
            padding: '3rem',
            marginRight: '11rem',
        },
        userAva: {
            // backgroundColor: 'green',
            flex: 1,
            borderRadius: size,
            borderColor: 'white',
            borderWidth: '2rem',
            overflow: 'hidden',
        },
        noImageContainer: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: '1rem',
            backgroundColor: '#dbdbdb',
        },
        noImageText: {
            fontSize: '$FONT_SIZE_9',
            color: '#4b4b4b',
            fontFamily: '$FONT_ROBOTO_300',
        },
    });
