//modules
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Dash from 'react-native-dash';
import {useTranslation} from 'react-i18next';

//SVGs
import InstIcon from '_icons/categories/inst.svg';
import LikeIcon from '_icons/categories/like.svg';
import GiveIcon from '_icons/categories/give.svg';

//styles
import {styles} from './styles';
import {UserAva} from '_atoms/index';

export default function TopRaffleItem({
    userName,
    amountSubs,
    type,
    sizeIcon = 25,
    sizeUserAva = 40,
}) {
    const [t] = useTranslation('raffles_screen');
    const moreThousand = amountSubs >= 1000;
    const modifyAmountSubs = moreThousand
        ? Math.trunc(amountSubs / 1000)
        : amountSubs;

    const textAmountSubs = moreThousand
        ? `${modifyAmountSubs}K`
        : modifyAmountSubs;

    const isInst = type === 'inst';
    const isLike = type === 'like';
    const isGive = type === 'give';

    const icon = isInst ? (
        <InstIcon width={sizeIcon} height={sizeIcon} />
    ) : isLike ? (
        <LikeIcon width={sizeIcon} height={sizeIcon} />
    ) : isGive ? (
        <GiveIcon width={sizeIcon} height={sizeIcon} />
    ) : null;

    return (
        <View style={styles.container}>
            <View style={styles.left}>
                <UserAva size={sizeUserAva} />
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
