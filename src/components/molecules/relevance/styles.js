import EStyleSheet from 'react-native-extended-stylesheet';

export const styles = EStyleSheet.create({
  relevanceContainer: {
    marginTop: '35rem',
  },
  headTitle: {
    textTransform: 'uppercase',
    fontSize: '$FONT_SIZE_14',
    color: '$WHITE',
    fontFamily: '$FONT_ROBOTO_700',
  },
  itemsContainer: {
    marginTop: '16rem',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  divider: {
    marginTop: '34rem',
    height: '1rem',
    width: '100%',
    backgroundColor: '$GRAY',
  },
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
    borderColor: '$WHITE_TRANSPARENT',
  },
  itemTitle: {
    fontSize: '$FONT_SIZE_18',
  },
});
