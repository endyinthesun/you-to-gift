//modules
import React from 'react';
import {Text, View} from 'react-native';

//styles
import {generateStyles} from './styles';
import {RAFFLE_ITEM_GRADIENT} from '_styles/global';

export default function UserAva({size}) {
    const styles = generateStyles(size);
    return (
        <View style={styles.userAvaContainer}>
            <RAFFLE_ITEM_GRADIENT absoluteFill />
            <View style={styles.userAva} />
        </View>
    );
}
