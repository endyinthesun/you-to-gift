//modules
import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {useTranslation} from 'react-i18next';

//SVGs
import ArrowsIcon from '_icons/relevance/arrows.svg';

//styles
import {styles} from './styles';

export default function AuthBtn({icon, titleKey}) {
    const [t, r18n] = useTranslation('profile_screen');
    return (
        <Pressable style={styles.btnContainer}>
            {icon}
            <Text style={styles.btnTitle}>{t(titleKey)}</Text>
            <ArrowsIcon />
        </Pressable>
    );
}
