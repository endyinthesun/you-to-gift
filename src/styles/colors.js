import React from 'react'
import {LinearGradient} from 'expo-linear-gradient'

export const WHITE = '#FFFFFF'

export const BG_GRADIENT = () => (
    <LinearGradient
        colors={['#1DE5E2', '#B588F7']}
        locations={[0.1, 1]}
        start={{x: 0.1, y: 0.1}}
        end={{x: 1, y: 0.9}}
        style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
        }}
    />
)
