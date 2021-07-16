import React from 'react';
import {LinearGradient} from 'expo-linear-gradient';
import {StyleSheet} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export const BTN_FAVORITE_GRADIENT = () => (
    <LinearGradient
        colors={['#88EDEC', '#D3BFF7']}
        locations={[0.1, 1]}
        start={{x: 0.1, y: 0.1}}
        end={{x: 1, y: 0.9}}
        style={StyleSheet.absoluteFill}
    />
);

export const BG_GRADIENT = () => (
    <LinearGradient
        colors={['#1DE5E2', '#B588F7']}
        locations={[0.1, 1]}
        start={{x: 0.1, y: 0.1}}
        end={{x: 1, y: 0.9}}
        style={StyleSheet.absoluteFill}
    />
);

export const BOTTOM_BAR_GRADIENT = () => (
    <LinearGradient
        colors={[
            '#AF85F0',
            'rgba(144, 154, 237, 0.5)',
            'rgba(144, 154, 237, 0.01)',
        ]}
        locations={[0, 0.7, 1]}
        start={{x: 0.5, y: 1}}
        end={{x: 0.5, y: 0}}
        style={{
            position: 'absolute',
            bottom: 0,
            top: EStyleSheet.value('-50rem'),
            left: 0,
            right: 0,
        }}
    />
);

export const DRAW_ITEM_GRADIENT = ({absoluteFill, fillBottom, height}) => {
    const absoluteFillStyles = {
        bottom: 0,
        left: 0,
        right: 0,
        top: 0,
    };
    const fillBottomStyles = {
        bottom: 0,
        left: 0,
        right: 0,
    };
    return (
        <LinearGradient
            colors={['#FFC107', '#F44336', '#9C27B0']}
            locations={[0, 0.2, 1]}
            start={{x: 0.1, y: 0.1}}
            end={{x: 1, y: 0.9}}
            style={[
                {position: 'absolute'},
                absoluteFill ? absoluteFillStyles : null,
                fillBottom ? fillBottomStyles : null,
                height ? {height: height} : '100%',
            ]}
        />
    );
};
