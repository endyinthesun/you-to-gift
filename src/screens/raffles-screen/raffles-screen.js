//modules
import React from 'react';
import {Text, View} from 'react-native';

//components
import {Header} from '_organisms/index';

export default function RafflesScreen({route, navigation}) {
    return (
        <View style={{flex: 1}}>
            <Header
                titleArr={['Актуальные розыгрыши', 'Saint-Petersburg, Russia']}
                relevantRaffles
                iconType={'settings'}
                onPress={() => console.log('hello')}
            />
            <Text>Screen: Login</Text>
        </View>
    );
}
