//modules
import React from 'react';
import {Text, View} from 'react-native';

//components
import {Header} from '_organisms/index';

export default function ProfileScreen({navigation}) {
    return (
        <View style={{flex: 1}}>
            <Header titleArr={['авторизация', 'аккаунта']} />
            <Text>Hello, its setting screen</Text>
        </View>
    );
}
