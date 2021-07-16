//modules
import React, {useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
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

export default function AddFavoriteBtn({id}) {
    const [isAdded, setIsAdded] = useState(false);
    const [t] = useTranslation('draw_screen');
    const iconSize = EStyleSheet.value('22rem');
    const title = isAdded
        ? t('competition_in_favorites')
        : t('add_to_favourites');

    return (
        <TouchableOpacity
            style={styles.btnContainer}
            onPress={() => setIsAdded(!isAdded)}>
            {isAdded ? null : <BTN_FAVORITE_GRADIENT />}
            <View style={styles.btnIcon}>
                {isAdded ? (
                    <StarActiveIcon width={iconSize} height={iconSize} />
                ) : (
                    <StarIcon width={iconSize} height={iconSize} />
                )}
            </View>
            <Text style={styles.btnTitle}>{title}</Text>
        </TouchableOpacity>
    );
}
