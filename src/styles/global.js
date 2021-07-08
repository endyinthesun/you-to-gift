import React from 'react';
import {LinearGradient} from 'expo-linear-gradient';
import EStyleSheet from 'react-native-extended-stylesheet';
import {StyleSheet} from 'react-native';

//outside values
export const PADDING_HORIZONTAL_TAB_MENU = 16;
export const BG_GRADIENT = () => (
    <LinearGradient
        colors={['#1DE5E2', '#B588F7']}
        locations={[0.1, 1]}
        start={{x: 0.1, y: 0.1}}
        end={{x: 1, y: 0.9}}
        style={StyleSheet.absoluteFill}
    />
);
export const RAFFLE_ITEM_GRADIENT = () => (
    <LinearGradient
        colors={['#FFC107', '#F44336', '#9C27B0']}
        locations={[0, 0.2, 1]}
        start={{x: 0.1, y: 0.1}}
        end={{x: 1, y: 0.9}}
        style={{height: 4, position: 'absolute', bottom: 0, left: 0, right: 0}}
    />
);

export const initGlobalVar = () => {
    EStyleSheet.build({
        $rem: 16,
        $fontColor: '#484848',
        $fontInputColor: '#B0B0B0',
        $fontColorLink: '#1FC1EF',
        $bgColor: '#e6e6e6',
        $authBtnColor: '#BFD4DF',
        //font families
        $FONT_ROBOTO_100: 'RobotoThin',
        $FONT_ROBOTO_300: 'RobotoLight',
        $FONT_ROBOTO_400: 'RobotoRegular',
        $FONT_ROBOTO_500: 'RobotoMedium',
        $FONT_ROBOTO_700: 'RobotoBold',

        //font sizes
        $FONT_SIZE_24: 24,
        $FONT_SIZE_20: 20,
        $FONT_SIZE_18: 18,
        $FONT_SIZE_16: 16,
        $FONT_SIZE_15: 15,
        $FONT_SIZE_14: 14,
        $FONT_SIZE_13: 13,
        $FONT_SIZE_12: 12,

        //colors
        $SECONDARY: '#F2F6F7',
        $WHITE: '#FFFFFF',
        $GRAY: '#E4E8E9',
        $DARK_GRAY: '#484848',
        $TRANSPARENT: 'transparent',
        $WHITE_TRANSPARENT: 'rgba(255,255,255, 0.3)',
        $BLUE_TRANSPARENT: 'rgba(33, 60, 154, 0.2)',

        //spacing
        $PADDING_HORIZONTAL_TAB_MENU: PADDING_HORIZONTAL_TAB_MENU,
        $PADDING_HORIZONTAL_CONTAINER: 22,
        $PADDING_VERTICAL_CONTAINER: 30,
        $LETTER_SPACING: 0.5,
    });
};
