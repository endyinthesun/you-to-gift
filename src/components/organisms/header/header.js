//modules
import React from 'react';
import {Text, View, Pressable} from 'react-native';
import {useTranslation} from 'react-i18next';

//SVGs
import FilterIcon from '_icons/filter.svg';
import BackIcon from '_icons/back.svg';

//styles
import {styles} from './styles';

// actualDraws - two text block in column, one of them - link (true, false)
// screenDraw - two text block in row, second block with bold font style
// iconType = 'back', 'filter'

export default function Header({
    titleKey,
    actualDraws = false,
    screenDraw = false,
    iconType,
    onPress,
}) {
    const {t, i18n} = useTranslation('header');
    const withBtn = iconType && onPress;
    const translatedText = t(titleKey);
    const translatedTextArr = translatedText.split(' ');
    const titleText = actualDraws ? (
        <>
            <Text style={[styles.headerTitle, styles.headerTitleBold]}>
                {translatedText}
            </Text>
            <Text style={styles.headerTitleLink}>{actualDraws}</Text>
        </>
    ) : screenDraw ? (
        <>
            <Text style={[styles.headerTitle, styles.headerTitleLight]}>
                {translatedText}
            </Text>
            <Text style={[styles.headerTitle, styles.headerTitleBold]}>
                {i18n.language === 'en' ? ` #${screenDraw}` : ` №${screenDraw}`}
            </Text>
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
        iconType === 'back' ? (
            <BackIcon />
        ) : iconType === 'filter' ? (
            <FilterIcon />
        ) : null;
    return (
        <View
            style={[
                styles.headerContainer,
                {justifyContent: withBtn ? 'space-between' : 'center'},
            ]}>
            <View style={{flexDirection: actualDraws ? 'column' : 'row'}}>
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
