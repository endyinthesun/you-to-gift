//modules
import React, {useRef, useEffect, useCallback} from 'react';
import {Pressable, Text, View, Animated, Easing} from 'react-native';

//SVGs
import ArrowsIcon from '_icons/relevance/arrows.svg';

//styles
import {styles} from './styles';

export default function SpoilerBtn({
    toggleIsOpen,
    isOpen,
    icon,
    title,
    stylesBtn,
}) {
    const onPressCallback = useCallback(() => {
        toggleIsOpen(!isOpen)
    }, [isOpen])

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
            onPress={onPressCallback}
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
