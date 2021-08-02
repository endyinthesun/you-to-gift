//modules
import React from 'react';
import {Text, View} from 'react-native';

//styles
import {generateStyles} from './styles';

export default function Budget({number, currency, fontSize}) {
    const styles = generateStyles(fontSize);
    return (
        <View style={styles.budgetContainer}>
            <Text style={styles.number}>{number}</Text>
            <Text style={styles.currency}>{currency}</Text>
        </View>
    );
}
