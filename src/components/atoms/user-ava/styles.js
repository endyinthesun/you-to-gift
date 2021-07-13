import EStyleSheet from 'react-native-extended-stylesheet';

export const generateStyles = size =>
    EStyleSheet.create({
        userAvaContainer: {
            height: size,
            width: size,
            borderRadius: 46,
            overflow: 'hidden',
            padding: 3,
            marginRight: 11,
        },
        userAva: {
            backgroundColor: 'green',
            flex: 1,
            borderRadius: size,
            borderColor: 'white',
            borderWidth: 2,
            overflow: 'hidden',
        },
    });
