import React from 'react';
import {StyleSheet} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';

export const SECONDARY = '#F2F6F7';
export const WHITE = '#FFFFFF';

export const BG_GRADIENT = () => (
    <LinearGradient
        colors={['#1DE5E2', '#B588F7']}
        locations={[0.1, 1]}
        start={{x: 0.1, y: 0.1}}
        end={{x: 1, y: 0.9}}
        style={StyleSheet.absoluteFill}
    />
);
