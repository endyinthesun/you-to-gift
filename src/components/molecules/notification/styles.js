import EStyleSheet from 'react-native-extended-stylesheet';

export const generateStyles = type => {
  const isError = type === 'error';
  const isSuccess = type === 'success';

  const backgroundColor = isError ? '$RED' : isSuccess ? '$GREEN' : null;
  return EStyleSheet.create({
    container: {
      width: '100%',
      backgroundColor: backgroundColor,
      justifyContent: 'flex-end',
      paddingTop: '$statusBarHeight + 15rem',
      // paddingTop: '$statusBarHeight',
      paddingBottom: '15rem',
      paddingHorizontal: '22rem',
    },
    notification: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    left: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    textBlock: {
      marginLeft: '20rem',
      // alignSelf: 'flex-end',
    },
    textTitle: {
      color: '$WHITE',
      fontSize: '$FONT_SIZE_14',
      fontFamily: '$FONT_ROBOTO_500',
    },
    textSubtitle: {
      color: '$WHITE',
      fontSize: '$FONT_SIZE_14',
      fontFamily: '$FONT_ROBOTO_400',
      marginTop: '4rem',
    },
  });
};
