//modules
import React from 'react';
import {Text, View, Pressable} from 'react-native';
import {useTranslation} from 'react-i18next';

//SVGs
import FilterIcon from '_icons/filter.svg';
import SettingsIcon from '_icons/settings.svg';
import BackIcon from '_icons/back.svg';

//styles
import {styles} from './styles';

// actualRaffles - two text block in column, one of them - link (true, false)
// screenRaffle - two text block in row, second block with bold font style
// iconType = 'back', 'filter', 'settings'

export default function Header({
    titleKey,
    actualRaffles = false,
    iconType,
    onPress,
}) {
    const {t} = useTranslation('header');
    const withBtn = iconType && onPress;

    const translatedText = t(titleKey);
    const translatedTextArr = translatedText.split(' ');
    const titleText = actualRaffles ? (
        <>
            <Text style={[styles.headerTitle, styles.headerTitleBold]}>
                {translatedText}
            </Text>
            <Text style={styles.headerTitleLink}>{actualRaffles}</Text>
        </>
    ) : translatedTextArr.length === 2 ? (
        <>
            <Text style={[styles.headerTitle, styles.headerTitleBold]}>
                {translatedTextArr[0]}{' '}
            </Text>
            <Text style={[styles.headerTitle, styles.headerTitleMedium]}>
                {translatedTextArr[1]}
            </Text>
        </>
    ) : translatedTextArr.length === 1 ? (
        <Text style={[styles.headerTitle, styles.headerTitleBold]}>
            {translatedTextArr[0]}
        </Text>
    ) : null;
    const icon =
        iconType === 'filter' ? (
            <FilterIcon />
        ) : iconType === 'back' ? (
            <BackIcon />
        ) : iconType === 'settings' ? (
            <SettingsIcon />
        ) : null;
    return (
        <View
            style={[
                styles.headerContainer,
                {justifyContent: withBtn ? 'space-between' : 'center'},
            ]}>
            <View style={{flexDirection: actualRaffles ? 'column' : 'row'}}>
                {titleText}
            </View>
            {withBtn ? (
                <Pressable style={styles.btn} onPress={onPress}>
                    {icon}
                </Pressable>
            ) : null}
        </View>
    );
}
