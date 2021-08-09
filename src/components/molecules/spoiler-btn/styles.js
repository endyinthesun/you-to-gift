import EStyleSheet from 'react-native-extended-stylesheet';

export const styles = EStyleSheet.create({
  container: {
    borderRadius: '10rem',
    backgroundColor: '$WHITE',
    opacity: 0.9,
    flexDirection: 'row',
    paddingHorizontal: '21rem',
    paddingVertical: '14rem',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  wrapper: {
    flexDirection: 'row',
  },
  icon: {
    height: '23rem',
    width: '23rem',
    marginRight: '25rem',
  },
  title: {
    fontSize: '$FONT_SIZE_18',
    color: '$fontColor',
    fontFamily: '$FONT_ROBOTO_300',
  },
});
