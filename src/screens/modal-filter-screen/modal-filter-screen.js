//modules
import React, {useState} from 'react';
import {View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

//components
import {Header} from '_organisms/index';
import {BG_GRADIENT} from '_styles/global';
import {Categories, Relevance} from '_molecules/index';

//styles
import {styles} from '_styles/content-container';
import FilterBtn from '_atoms/filter-btn';
// import Relevance from "_molecules/relevance";

export default function ModalFilterScreen({onPress}) {
    return (
        <View style={{flex: 1}}>
            <SafeAreaView style={{flex: 0}} />
            <View style={{flex: 1}}>
                <Header
                    titleKey={'raffles_filter'}
                    iconType={'back'}
                    onPress={onPress}
                />
                <View style={styles.contentContainer}>
                    <BG_GRADIENT />
                    <Categories />
                    <Relevance />
                    <FilterBtn title={'show'} amount={245} />
                </View>
            </View>
        </View>
    );
}
