import EStyleSheet from 'react-native-extended-stylesheet';
import {Platform} from 'react-native';

export const generateStyles = type => {
  const isError = type === 'error';
  const isSuccess = type === 'success';

  const backgroundColor = isError ? '$RED' : isSuccess ? '$GREEN' : null;
  return EStyleSheet.create({
    container: {
      width: '100%',
      // flex: 1,
      backgroundColor: backgroundColor,
      justifyContent: 'flex-end',
      paddingTop: Platform.OS === 'ios' ? '$statusBarHeight + 15rem' : '15rem',
      paddingBottom: '15rem',
    },
    notification: {
      flexDirection: 'row',
      flex: 1,
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: '22rem',
    },
    left: {
      flexDirection: 'row',
      flex: 0.9,
      alignItems: 'center',
    },
    textBlock: {
      marginLeft: '20rem',
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
    crossIcon: {
      padding: '10rem',
    },
  });
};
