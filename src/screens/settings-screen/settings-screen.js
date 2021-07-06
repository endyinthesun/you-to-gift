//modules
import React from 'react';
import {Text, View} from 'react-native';

//components
import {Header} from '_organisms/index';

export default function SettingsScreen() {
    return (
        <View style={{flex: 1}}>
            <Header titleArr={['настройки', 'розыгрышей']} />
            <Text>Hello, its setting screen</Text>
        </View>
    );
}
