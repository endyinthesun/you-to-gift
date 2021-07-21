//modules
import React from 'react';
import {View} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

//components
import {FilterBtn} from '_atoms/index';
import {Categories, Relevance} from '_molecules/index';
import {Header} from '_organisms/index';

//styles
import {contentContainerStyles} from '_styles/content-container';
import {BG_GRADIENT} from '_styles/gradients';

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
