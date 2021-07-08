//modules
import React from 'react';
import {Text, View} from 'react-native';

//components
import {TopRaffleItem, BottomRaffleItem} from '_atoms/index';

//styles
import {styles} from './styles';

export default function RaffleItem() {
    return (
        <View style={styles.container}>
            <TopRaffleItem />
            <BottomRaffleItem />
        </View>
    );
}
