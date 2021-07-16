//modules
import React, {useState} from 'react';
import {View} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

//components
import {Header} from '_organisms/index';
import {BG_GRADIENT} from '_styles/gradients';
import {Categories, Relevance} from '_molecules/index';
import FilterBtn from '_atoms/filter-btn';

//styles
import {contentContainerStyles} from '_styles/content-container';

export default function ModalFilterScreen({onPress}) {
    return (
        <View style={{flex: 1}}>
            <SafeAreaView style={{flex: 0}} />
            <View style={{flex: 1}}>
                <Header
                    titleKey={'draws_filter'}
                    iconType={'back'}
                    onPress={onPress}
                />
                <View style={contentContainerStyles.container}>
                    <BG_GRADIENT />
                    <Categories />
                    <Relevance />
                    <FilterBtn title={'show'} amount={245} />
                </View>
            </View>
        </View>
    );
}
