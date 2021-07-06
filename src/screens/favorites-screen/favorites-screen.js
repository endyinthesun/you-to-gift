//modules
import React from 'react';
import {Text, View} from 'react-native';

//components
import {Header} from '_organisms/index';

export default function FavoritesScreen({navigation}) {
    return (
        <View style={{flex: 1}}>
            <Header
                titleArr={['избранные', 'розыгрыши']}
                iconType={'filter'}
                onPress={() => console.log('')}
            />
            <Text>Hello, its setting screen</Text>
        </View>
    );
}
