//modules
import React from 'react';
import {Pressable, Text, View} from 'react-native';

//styles
import {styles} from './styles';

export default function FilterBtn({title = null, amount = null}) {
    return (
        <Pressable style={styles.containerBtn}>
            <View style={styles.btn}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.amount}> {amount}</Text>
            </View>
        </Pressable>
    );
}
