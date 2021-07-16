//modules
import React, {useRef, useEffect, useState} from 'react';
import {Pressable, Text, View, Animated, Easing} from 'react-native';
import {observer} from 'mobx-react-lite';
import AsyncStorage from '@react-native-async-storage/async-storage';

//SVGs
import RussianIcon from '_icons/flags/russia.svg';
import EnglishIcon from '_icons/flags/united-kingdom.svg';
import UkrainianIcon from '_icons/flags/ukraine.svg';
import PolandIcon from '_icons/flags/poland.svg';
import FranceIcon from '_icons/flags/france.svg';
import TurkeyIcon from '_icons/flags/turkey.svg';

import ArrowsIcon from '_icons/relevance/arrows.svg';

//styles
import {styles} from './styles';

//store
import otherStore from '_store/other-store';

export default function SpoilerBtn({
    toggleIsOpen,
    isOpen,
    icon,
    title,
    stylesBtn,
}) {
    let arrowsRotate = useRef(new Animated.Value(1)).current;
    const arrowsRotateConf = {
        duration: 150,
        toValue: isOpen ? 1 : 0,
        easing: Easing.inOut(Easing.ease),
        useNativeDriver: true,
    };

    useEffect(() => {
        Animated.timing(arrowsRotate, arrowsRotateConf).start();
    }, [isOpen]);
    const interpolateRotating = arrowsRotate.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '90deg'],
    });
    return (
        <Pressable
            onPress={() => toggleIsOpen(!isOpen)}
            style={styles.container}>
            <View style={styles.wrapper}>
                {icon ? <View style={styles.icon}>{icon}</View> : null}
                <Text style={[styles.title, stylesBtn]}>{title}</Text>
            </View>
            <Animated.View
                style={{
                    transform: [
                        {
                            rotate: interpolateRotating,
                        },
                    ],
                }}>
                <ArrowsIcon />
            </Animated.View>
        </Pressable>
    );
}
