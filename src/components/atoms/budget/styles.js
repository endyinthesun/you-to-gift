import EStyleSheet from 'react-native-extended-stylesheet';

export const generateStyles = fontSize =>
    EStyleSheet.create({
        budgetContainer: {
            flexDirection: 'row',
            // backgroundColor: 'red',
            justifyContent: 'center',
        },
        number: {
            marginRight: '3rem',
            color: '$RED',
            fontSize: `$FONT_SIZE_${fontSize}`,
            fontFamily: '$FONT_ROBOTO_400',
        },
        currency: {
            color: '$BLACK',
            fontSize: `$FONT_SIZE_${fontSize}`,
            fontFamily: '$FONT_ROBOTO_100',
        },
    });
