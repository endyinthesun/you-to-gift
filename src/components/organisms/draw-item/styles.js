import EStyleSheet from 'react-native-extended-stylesheet';

export const styles = EStyleSheet.create({
  container: {
    borderRadius: '14rem',
    justifyContent: 'space-between',
    overflow: 'hidden',
    backgroundColor: '$WHITE',
    paddingLeft: '13rem',
    paddingTop: '9rem',
    paddingRight: '20rem',
    // paddingBottom: '17rem',
    marginBottom: '20rem',
  },
  icon: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    zIndex: -1,
  },
  topContainer: {
    height: '70rem',
    paddingBottom: '10rem',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  topLeft: {
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
  bottomContainer: {
    // height: 50,
    paddingVertical: '15rem',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bottomLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  favoriteBtn: {
    paddingTop: '4rem',
    paddingRight: '6rem',
    paddingBottom: '4rem',
  },
  date: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: '20rem',
  },
  dateText: {
    marginLeft: '7rem',
    color: '$DARK_GRAY',
    fontSize: '$FONT_SIZE_15',
    fontFamily: '$FONT_ROBOTO_400',
  },
});
