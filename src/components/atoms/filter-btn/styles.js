import EStyleSheet from 'react-native-extended-stylesheet';

export const styles = EStyleSheet.create({
  containerBtn: {
    flexDirection: 'row',
    height: '55rem',
    justifyContent: 'center',
    backgroundColor: '$BLUE_TRANSPARENT',
    marginTop: '35rem',
    borderRadius: '10rem',
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontFamily: '$FONT_ROBOTO_400',
    textTransform: 'uppercase',
    color: '$WHITE',
    fontSize: '$FONT_SIZE_16',
  },
  amount: {
    fontFamily: '$FONT_ROBOTO_700',
    color: '$WHITE',
    fontSize: '$FONT_SIZE_16',
  },
});
