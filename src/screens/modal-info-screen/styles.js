import EStyleSheet from 'react-native-extended-stylesheet';

export const styles = EStyleSheet.create({
  infoContainer: {
    alignItems: 'center',
  },
  infoText: {
    color: '$WHITE',
    fontSize: '$FONT_SIZE_16',
    fontFamily: '$FONT_ROBOTO_400',
  },
  infoBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginTop: '30rem',
    padding: '12rem',
    backgroundColor: '$BLUE_TRANSPARENT',
    borderRadius: 10,
  },
  infoBtnText: {
    color: '$WHITE',
    fontSize: '$FONT_SIZE_16',
    fontFamily: '$FONT_ROBOTO_500',
    marginRight: '12rem',
  },
});
