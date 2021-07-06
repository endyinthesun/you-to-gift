//modules
import React from 'react';
import {Text, View, Pressable} from 'react-native';

//SVGs
import FilterIcon from '_icons/filter.svg';
import SettingsIcon from '_icons/settings.svg';
import BackIcon from '_icons/back.svg';

//styles
import {styles} from './styles';

// relevantRaffles - two text block in column, one of them - link (true, false)
// screenRaffle - two text block in row, second block with bold font style
// iconType = 'back', 'filter', 'settings'
export default function Header({
    titleArr,
    relevantRaffles = false,
    iconType,
    onPress,
}) {
    const withBtn = iconType && onPress;
    const titleText =
        titleArr.length === 2 ? (
            <>
                <Text style={[styles.headerTitle, styles.headerTitleBold]}>
                    {titleArr[0]}{' '}
                </Text>
                <Text
                    style={
                        relevantRaffles
                            ? styles.headerTitleLink
                            : [styles.headerTitle, styles.headerTitleMedium]
                    }>
                    {titleArr[1]}
                </Text>
            </>
        ) : titleArr.length === 1 ? (
            <Text style={[styles.headerTitle, styles.headerTitleBold]}>
                {titleArr[0]}
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
            <View style={{flexDirection: relevantRaffles ? 'column' : 'row'}}>
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
