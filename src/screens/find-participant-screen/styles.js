import EStyleSheet from 'react-native-extended-stylesheet';

export const styles = EStyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '$WHITE',
    overflow: 'hidden',
  },
  contentContainer: {
    paddingHorizontal: '15rem',
  },
  amountParticipants: {
    color: '$WHITE',
    fontSize: '$FONT_SIZE_24',
    fontFamily: '$FONT_ROBOTO_700',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  search: {
    marginTop: '19rem',
  },
  searchTitle: {
    color: '$WHITE',
    fontSize: '$FONT_SIZE_14',
    fontFamily: '$FONT_ROBOTO_700',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  searchSubTitle: {
    color: '$WHITE',
    fontSize: '$FONT_SIZE_14',
    fontFamily: '$FONT_ROBOTO_300',
    textAlign: 'center',
    marginTop: '10rem',
  },
});
