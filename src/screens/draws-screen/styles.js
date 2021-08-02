import EStyleSheet from 'react-native-extended-stylesheet';

export const styles = EStyleSheet.create({
  flatListContainer: {
    paddingHorizontal: '$PADDING_HORIZONTAL_CONTAINER',
    paddingTop: '$PADDING_VERTICAL_CONTAINER',
    paddingBottom: '79 + $PADDING_VERTICAL_CONTAINER',
  },
  footerList: {
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1,
    paddingVertical: '3rem',
  },
  nothingToViewContainer: {
    marginTop: '26rem',
  },
  nothingToViewText: {
    textAlign: 'center',
    marginBottom: '3rem',
    fontSize: '$FONT_SIZE_18',
    fontFamily: '$FONT_ROBOTO_400',
    color: '$WHITE',
    textTransform: 'uppercase',
  },
});
