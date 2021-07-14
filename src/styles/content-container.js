import EStyleSheet from 'react-native-extended-stylesheet';

export const contentContainerStyles = EStyleSheet.create({
    container: {
        paddingHorizontal: '$PADDING_HORIZONTAL_CONTAINER',
        paddingTop: '$PADDING_VERTICAL_CONTAINER',
        paddingBottom: '79 + $PADDING_VERTICAL_CONTAINER',
        flex: 1,
    },
});
