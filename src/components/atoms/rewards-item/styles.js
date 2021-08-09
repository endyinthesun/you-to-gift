import EStyleSheet from 'react-native-extended-stylesheet';

export const styles = EStyleSheet.create({
  item: {
    // flex: 1,
    borderRadius: 14,
    overflow: 'hidden',
    marginTop: '18rem',
    paddingHorizontal: '13rem',
    paddingVertical: '15rem',
  },
  topItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: '19rem',
    paddingBottom: '15rem',
  },
  topLeftItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cupIcon: {
    marginRight: '12rem',
  },
  number: {
    fontSize: '$FONT_SIZE_24',
    fontFamily: '$FONT_ROBOTO_400',
    color: '$DARK_GRAY',
  },
  place: {
    fontSize: '$FONT_SIZE_12',
    fontFamily: '$FONT_ROBOTO_300',
    color: '$DARK_GRAY',
  },
  competition: {
    fontSize: '$FONT_SIZE_14',
    fontFamily: '$FONT_ROBOTO_400',
    color: '$DARK_GRAY',
  },
  bottomItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '19rem',
    paddingTop: '15rem',
  },
  prize: {
    marginLeft: '18rem',
  },
  financePrize: {
    color: '$DARK_GRAY',
    fontSize: '$FONT_SIZE_24',
    fontFamily: '$FONT_ROBOTO_300',
  },
  physicalPrize: {
    color: '$DARK_GRAY',
    fontSize: '$FONT_SIZE_12',
    fontFamily: '$FONT_ROBOTO_300',
  },
  prizePrice: {
    color: '$BLUE',
    fontFamily: '$FONT_ROBOTO_500',
  },

  iconBg: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
});
