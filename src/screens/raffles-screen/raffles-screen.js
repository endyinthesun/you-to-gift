import React from 'react';
import {SafeAreaView, Text, TouchableHighlight, View} from 'react-native';
import {BG_GRADIENT} from '_styles/colors';

export default function RafflesScreen({navigation}) {
    return (
        <View style={{flex: 1}}>
            <Text>Screen: Login</Text>
            <TouchableHighlight onPress={() => navigation.navigate('Main')}>
                <Text>Go to home</Text>
            </TouchableHighlight>
        </View>
    );
}
