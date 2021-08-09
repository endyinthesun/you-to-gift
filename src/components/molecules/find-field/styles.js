import EStyleSheet from 'react-native-extended-stylesheet';

export const styles = EStyleSheet.create({
  fieldContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '55rem',
    width: '100%',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '$WHITE_TRANSPARENT',
    padding: '6rem',
  },
  searchBtn: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    aspectRatio: 1,
    backgroundColor: '$WHITE',
  },
  searchIcon: {
    width: '20rem',
    height: '20rem',
  },
  input: {
    // flex: 1,
    color: '$WHITE',
    fontSize: '$FONT_SIZE_14',
    fontFamily: '$FONT_ROBOTO_500',
    paddingHorizontal: '18rem',
  },
});
