//modules
import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {useTranslation} from 'react-i18next';
import EStyleSheet from 'react-native-extended-stylesheet';

//SVGs
import StarIcon from '_icons/bottom-bar/star.svg';
import StarActiveIcon from '_icons/bottom-bar/star-active.svg';

//styles
import {styles} from './styles';
import {
    BTN_FAVORITE_ACTIVE_GRADIENT,
    BTN_FAVORITE_GRADIENT,
} from '_styles/gradients';

export default function AddFavoriteBtn({titleKey}) {
    const [t, r18n] = useTranslation('raffle_screen');
    const icon = (
        <StarIcon
            width={EStyleSheet.value('22rem')}
            height={EStyleSheet.value('21rem')}
        />
    );
    return (
        <Pressable style={styles.btnContainer}>
            <BTN_FAVORITE_GRADIENT />
            {icon}
            <Text style={styles.btnTitle}>Добавить в избранное</Text>
        </Pressable>
    );
}
