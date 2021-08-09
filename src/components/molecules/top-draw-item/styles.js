import EStyleSheet from 'react-native-extended-stylesheet';

export const styles = EStyleSheet.create({
  container: {
    height: '70rem',
    paddingBottom: '10rem',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  userInfo: {},
  userName: {
    fontSize: '$FONT_SIZE_15',
    fontFamily: '$FONT_ROBOTO_400',
    textDecorationLine: 'underline',
  },
  userSubs: {
    fontSize: '$FONT_SIZE_12',
    fontFamily: '$FONT_ROBOTO_300',
  },
});
