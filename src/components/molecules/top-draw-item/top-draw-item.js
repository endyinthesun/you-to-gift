//modules
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Dash from 'react-native-dash';
import {useTranslation} from 'react-i18next';
import EStyleSheet from 'react-native-extended-stylesheet';

//SVGs
import InstIcon from '_icons/categories/inst.svg';
import LikeIcon from '_icons/categories/like.svg';
import GiveIcon from '_icons/categories/give.svg';

//styles
import {styles} from './styles';
import {UserAva} from '_atoms/index';

export default function TopDrawItem({
    imageUrl,
    userName,
    amountSubs,
    type,
    sizeIcon = 25,
    sizeUserAva = 40,
}) {
    const [t] = useTranslation('draws_screen');

    //amount subscribers
    const moreThousand = amountSubs >= 1000;
    const modifyAmountSubs = moreThousand
        ? Math.trunc(amountSubs / 1000)
        : amountSubs;

    const textAmountSubs = moreThousand
        ? `${modifyAmountSubs}K`
        : modifyAmountSubs;

    //icons
    const sizeIconREM = EStyleSheet.value(`${sizeIcon}rem`);
    const sizeUserAvaREM = EStyleSheet.value(`${sizeUserAva}rem`);

    const isInst = type === 'instagram';
    const isLike = type === 'like';
    const isGive = type === 'give';

    const icon = isInst ? (
        <InstIcon width={sizeIconREM} height={sizeIconREM} />
    ) : isLike ? (
        <LikeIcon width={sizeIconREM} height={sizeIconREM} />
    ) : isGive ? (
        <GiveIcon width={sizeIconREM} height={sizeIconREM} />
    ) : null;

    return (
        <View style={styles.container}>
            <View style={styles.left}>
                <UserAva size={sizeUserAvaREM} imageUrl={imageUrl} />
                <View style={styles.userInfo}>
                    <Text style={styles.userName}>{userName}</Text>
                    <Text style={styles.userSubs}>
                        {textAmountSubs} {t('followers')}
                    </Text>
                </View>
            </View>
            <View style={styles.right}>{icon}</View>
        </View>
    );
}
