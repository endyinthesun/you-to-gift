//modules
import React from 'react';
import {Text, View, Pressable} from 'react-native';
import Dash from 'react-native-dash';

//SVGs
import InstIconBg from '_icons/inst-bg.svg';
import LikeIconBg from '_icons/like-bg.svg';
import GiveIconBg from '_icons/give-bg.svg';

//components
import {TopDrawItem, BottomDrawItem} from '_molecules/index';

//styles
import {styles} from './styles';
import {DRAW_ITEM_GRADIENT} from '_styles/gradients';

export default function DrawItem({
    imageUrl,
    userName,
    amountSubs,
    type,
    date,
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
                    date,
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
            <Dash
                style={styles.dash}
                dashColor={'#babdbd'}
                dashThickness={1}
                dashGap={4}
            />
            <BottomDrawItem
                date={date}
                budget={formatBudget}
                currency={currency}
            />
            <View style={{position: 'absolute', right: 0, bottom: 0}}>
                {icon}
            </View>
            <DRAW_ITEM_GRADIENT fillBottom height={4} />
        </Pressable>
    );
}
