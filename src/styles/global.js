import EStyleSheet from 'react-native-extended-stylesheet';

//outside values
export const PADDING_HORIZONTAL_TAB_MENU = 16;

export const initGlobalVar = () => {
    EStyleSheet.build({
        $rem: 16,
        $fontColor: '#484848',
        $fontColorLink: '#1FC1EF',
        $bgColor: '#e6e6e6',

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

        //spacing
        $PADDING_HORIZONTAL_TAB_MENU: PADDING_HORIZONTAL_TAB_MENU,
    });
};
