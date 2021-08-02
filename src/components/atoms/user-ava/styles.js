import EStyleSheet from 'react-native-extended-stylesheet';

export const generateStyles = size =>
  EStyleSheet.create({
    userAvaContainer: {
      height: size,
      width: size,
      borderRadius: size,
      overflow: 'hidden',
      padding: '3rem',
      marginRight: '11rem',
    },
    userAva: {
      flex: 1,
      borderRadius: size,
      borderColor: '$WHITE',
      borderWidth: '2rem',
      overflow: 'hidden',
    },
    noImageContainer: {
      position: 'absolute',
      top: '3rem',
      right: '3rem',
      bottom: '3rem',
      left: '3rem',
      borderRadius: size,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: '1rem',
      backgroundColor: '#dbdbdb',
    },
    noImageText: {
      fontSize: '$FONT_SIZE_9',
      color: '#4b4b4b',
      fontFamily: '$FONT_ROBOTO_300',
    },
  });
