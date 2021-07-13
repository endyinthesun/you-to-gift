//modules
import React from 'react';
import {FlatList, Text, View} from 'react-native';

//components
import {Header} from '_organisms/index';
import {RaffleItem} from '_organisms/index';

//styles
import {styles} from './styles';
import {BG_GRADIENT} from '_styles/global';

//store
import {otherStore} from '_store/index';

export default function RafflesScreen({route, navigation}) {
    const data = [
        {
            id: 1,
            userName: 'user',
            type: 'inst',
            date: '01-05-2021',
            amountSubs: 12,
            budget: 9000,
        },
        {
            id: 2,
            userName: 'user',
            type: 'give',
            date: '01-05-2021',
            amountSubs: 1232332,
            budget: 343434,
        },
        {
            id: 3,
            userName: 'user',
            type: 'give',
            date: '01-05-2021',
            amountSubs: 767678,
            budget: 1000,
        },
        {
            id: 4,
            userName: 'user',
            type: 'inst',
            date: '01-05-2021',
            amountSubs: 3,
            budget: 1000,
        },
        {
            id: 5,
            userName: 'user',
            type: 'give',
            date: '01-05-2021',
            amountSubs: 3434,
            budget: 234345,
        },
        {
            id: 6,
            userName: 'user',
            type: 'inst',
            date: '01-05-2021',
            amountSubs: 656577,
            budget: 87678,
        },
        {
            id: 7,
            userName: 'user',
            type: 'like',
            date: '01-05-2021',
            amountSubs: 1001,
            budget: 1000,
        },
        {
            id: 8,
            userName: 'user',
            type: 'inst',
            date: '01-05-2021',
            amountSubs: 999,
            budget: 1000,
        },
    ];
    return (
        <View style={{flex: 1}}>
            <Header
                titleKey={'actual_raffles'}
                actualRaffles={'Saint-Petersburg'}
                iconType={'settings'}
                onPress={() => {
                    navigation.navigate('Settings');
                    otherStore.setBottomTabIndex(2);
                }}
            />
            <View style={{flex: 1}}>
                <BG_GRADIENT />
                <FlatList
                    keyExtractor={item => item.id.toString()}
                    data={data}
                    renderItem={({item}) => (
                        <RaffleItem {...item} navigation={navigation} />
                    )}
                    contentContainerStyle={styles.flatListContainer}
                />
            </View>
        </View>
    );
}
