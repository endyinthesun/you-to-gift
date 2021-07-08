//modules
import React from 'react';
import {Text, View} from 'react-native';

//styles
import {styles} from './styles';
import {RAFFLE_ITEM_GRADIENT} from '_styles/global';

export default function BottomRaffleItem() {
    return (
        <View style={styles.container}>
            <RAFFLE_ITEM_GRADIENT />
        </View>
    );
}
