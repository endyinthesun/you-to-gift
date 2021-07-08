//modules
import React from 'react';
import {Text, View} from 'react-native';

//components
import {Header} from '_organisms/index';
import {RaffleItem} from '_molecules/index';

//styles
import {styles} from '_styles/content-container';

//store
import {otherStore} from '_store/index';

export default function RafflesScreen({route, navigation}) {
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
            <View style={styles.contentContainer}>
                <RaffleItem />
            </View>
        </View>
    );
}
