//modules
import React, {useRef, useEffect, useState} from 'react';
import {Pressable, Text, View, Animated, Easing} from 'react-native';
import {observer} from 'mobx-react-lite';

//SVGs
import RussianIcon from '_icons/flags/russia.svg';
import EnglishIcon from '_icons/flags/united-kingdom.svg';
import UkrainianIcon from '_icons/flags/ukraine.svg';
import PolandIcon from '_icons/flags/poland.svg';
import FranceIcon from '_icons/flags/france.svg';
import TurkeyIcon from '_icons/flags/turkey.svg';

import ArrowsIcon from '_icons/relevance/arrows.svg';

//styles
import {generateStyles} from './styles';

//store
import {otherStore} from '_store/index';

export default observer(function LangBtn({toggleIsOpen, isOpen}) {
    let arrowsRotate = useRef(new Animated.Value(0)).current;
    const arrowsRotateConf = {
        duration: 150,
        toValue: isOpen ? 0 : 1,
        easing: Easing.inOut(Easing.ease),
        useNativeDriver: true,
    };

    const styles = generateStyles(isOpen);
    const parseBtn = lang => {
        let icon = null;
        let title = '';
        switch (lang) {
            case 'ru':
                icon = <RussianIcon />;
                title = 'Русский язык';
                break;
            case 'en':
                icon = <EnglishIcon />;
                title = 'English language';
                break;
            case 'ua':
                icon = <UkrainianIcon />;
                title = 'Українська мова';
                break;
            case 'pl':
                icon = <PolandIcon />;
                title = 'Język polski';
                break;
            case 'fr':
                icon = <FranceIcon />;
                title = 'Français';
                break;
            case 'tr':
                icon = <TurkeyIcon />;
                title = 'Türk dili';
                break;

            default:
                console.log('error');
        }
        return (
            <>
                <View style={styles.icon}>{icon}</View>
                <Text style={styles.title}>{title}</Text>
            </>
        );
    };
    // useEffect(() => {
    //
    // }, [otherStore.lang]);

    useEffect(() => {
        Animated.timing(arrowsRotate, arrowsRotateConf).start();
    }, [isOpen]);
    const interpolateRotating = arrowsRotate.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '90deg'],
    });
    const content = parseBtn(otherStore.lang);
    return (
        <Pressable
            onPress={() => toggleIsOpen(!isOpen)}
            style={styles.container}>
            <View style={styles.wrapper}>{content}</View>
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
});
