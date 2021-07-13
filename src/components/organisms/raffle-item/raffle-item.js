//modules
import React from 'react';
import {Text, View, Pressable} from 'react-native';
import Dash from 'react-native-dash';

//SVGs
import InstIconBg from '_icons/inst-bg.svg';
import LikeIconBg from '_icons/like-bg.svg';
import GiveIconBg from '_icons/give-bg.svg';

//components
import {TopRaffleItem, BottomRaffleItem} from '_molecules/index';

//styles
import {styles} from './styles';
import {RAFFLE_ITEM_GRADIENT} from '_styles/global';

export default function RaffleItem({
    userName,
    amountSubs,
    type,
    date,
    budget,
    id,
    navigation,
}) {
    const isInst = type === 'inst';
    const isLike = type === 'like';
    const isGive = type === 'give';
    const icon = isInst ? (
        <InstIconBg />
    ) : isLike ? (
        <LikeIconBg />
    ) : isGive ? (
        <GiveIconBg />
    ) : null;
    // let formatter = new Intl.NumberFormat('ru', {
    //     maximumSignificantDigits: 3,
    // });
    // const budgetSpace = formatter.format(+budget);
    const budgetSpace = budget.toLocaleString('ru');

    return (
        <Pressable
            style={styles.container}
            onPress={() =>
                navigation.navigate('Raffle', {
                    id,
                    userName,
                    amountSubs,
                    type,
                    date,
                    budgetSpace,
                })
            }>
            <TopRaffleItem
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
            <BottomRaffleItem date={date} budget={budgetSpace} />
            <View style={{position: 'absolute', right: 0, bottom: 0}}>
                {icon}
            </View>
            <RAFFLE_ITEM_GRADIENT fillBottom height={4} />
        </Pressable>
    );
}
