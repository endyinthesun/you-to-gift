//modules
import React from 'react';
import {View, Pressable} from 'react-native';
import Dash from 'react-native-dash';

//SVGs
import InstIconBg from '_icons/inst-bg.svg';
import LikeIconBg from '_icons/like-bg.svg';
import GiveIconBg from '_icons/give-bg.svg';

//components
import {TopDrawItem, BottomDrawItem} from '_molecules/index';

//styles
import {styles} from './styles';
import {ITEM_GRADIENT} from '_styles/gradients';

export default function DrawItem({
    imageUrl,
    userName,
    amountSubs,
    type,
    dateEnd,
    timeEnd,
    budget,
    currency,
    id,
    navigation,
}) {
    const isInst = type === 'instagram';
    const isLike = type === 'like';
    const isGive = type === 'give';
    const icon = isInst ? (
        <InstIconBg />
    ) : isLike ? (
        <LikeIconBg />
    ) : isGive ? (
        <GiveIconBg />
    ) : null;
    const formatBudget = parseInt(budget).toLocaleString('ru');

    return (
        <Pressable
            style={styles.container}
            onPress={() =>
                navigation.navigate('Draw', {
                    id,
                    imageUrl,
                    userName,
                    amountSubs,
                    type,
                    dateEnd,
                    timeEnd,
                    formatBudget,
                    currency,
                })
            }>
            <TopDrawItem
                imageUrl={imageUrl}
                userName={userName}
                amountSubs={amountSubs}
                type={type}
                sizeIcon={32}
                sizeUserAva={46}
            />
            <Dash dashColor={'#B0B0B0'} dashThickness={0.7} dashGap={4} />
            <BottomDrawItem
                dateEnd={dateEnd}
                budget={formatBudget}
                currency={currency}
            />
            <View style={styles.icon}>{icon}</View>
            <ITEM_GRADIENT
                fillBottom
                height={4}
                colors={['#FFC107', '#F44336', '#9C27B0']}
                locations={[0, 0.2, 1]}
            />
        </Pressable>
    );
}
