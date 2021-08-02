import EStyleSheet from 'react-native-extended-stylesheet';

export const styles = EStyleSheet.create({
  headTitle: {
    textTransform: 'uppercase',
    fontSize: '$FONT_SIZE_14',
    color: '$WHITE',
    fontFamily: '$FONT_ROBOTO_700',
  },
  itemsContainer: {
    marginTop: '10rem',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  divider: {
    marginTop: '24rem',
    height: '1rem',
    width: '100%',
    backgroundColor: '$GRAY',
  },
  itemContainer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  item: {
    height: '70rem',
    width: '70rem',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '10rem',
    borderColor: '$WHITE_TRANSPARENT',
  },
  itemTitle: {
    textTransform: 'capitalize',
    fontSize: '$FONT_SIZE_18',
    fontFamily: '$FONT_ROBOTO_400',
  },
});
