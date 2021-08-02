import EStyleSheet from 'react-native-extended-stylesheet';

export const contentContainerStyles = EStyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: '$PADDING_HORIZONTAL_CONTAINER',
    paddingTop: '$PADDING_VERTICAL_CONTAINER',
    paddingBottom: '79 + $PADDING_VERTICAL_CONTAINER',
  },
  modalFilterContainer: {
    paddingHorizontal: '$PADDING_HORIZONTAL_CONTAINER',
    paddingVertical: '$PADDING_VERTICAL_CONTAINER',
  },
});
