import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Dimensions} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';

//outside values
// export const PADDING_HORIZONTAL_TAB_MENU = EStyleSheet.value('16rem');
export const PADDING_HORIZONTAL_TAB_MENU = 16;

export const initGlobalVar = () => {
  const width = Dimensions.get('window').width;
  const barHeight = getStatusBarHeight();
  EStyleSheet.build({
    $rem: width / 376,
    $fontColor: '#484848',
    $fontInputColor: '#B0B0B0',
    $bgColor: '#e6e6e6',
    $authBtnColor: '#BFD4DF',
    $bottomBarHeight: '77rem',
    $hashtag: '#2E89FF',
    $statusBarHeight: barHeight,
    //font families
    $FONT_ROBOTO_100: 'Roboto-Thin',
    $FONT_ROBOTO_300: 'Roboto-Light',
    $FONT_ROBOTO_400: 'Roboto-Regular',
    $FONT_ROBOTO_500: 'Roboto-Medium',
    $FONT_ROBOTO_700: 'Roboto-Bold',

    //font sizes
    $FONT_SIZE_9: '9rem',
    $FONT_SIZE_12: '12rem',
    $FONT_SIZE_13: '13rem',
    $FONT_SIZE_14: '14rem',
    $FONT_SIZE_15: '15rem',
    $FONT_SIZE_16: '16rem',
    $FONT_SIZE_18: '18rem',
    $FONT_SIZE_20: '20rem',
    $FONT_SIZE_24: '24rem',
    $FONT_SIZE_40: '40rem',

    //colors
    $SECONDARY: '#F2F6F7',
    $WHITE: '#FFFFFF',
    $BLACK: '#2F2F2F',
    $GRAY: '#E4E8E9',
    $DARK_GRAY: '#484848',
    $TRANSPARENT: 'transparent',
    $WHITE_TRANSPARENT: 'rgba(255,255,255, 0.3)',
    $BLUE: '#1FC1EF',
    $BLUE_LIGHT: '#F0F8FC',
    $BLUE_TRANSPARENT: 'rgba(33, 60, 154, 0.2)',
    $RED: '#DA3B5A',
    $GREEN: '#06C872',

    //spacing
    $PADDING_HORIZONTAL_TAB_MENU: PADDING_HORIZONTAL_TAB_MENU,
    $PADDING_HORIZONTAL_CONTAINER: '22rem',
    $PADDING_VERTICAL_CONTAINER: '30rem',
    $LETTER_SPACING: '0.5rem',
  });
};
