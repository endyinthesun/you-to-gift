//modules
import React, {useState} from 'react';
import {View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

//components
import {Header} from '_organisms/index';
import {BG_GRADIENT} from '_styles/global';
import {Categories, Relevance} from '_molecules/index';

//styles
import {styles} from './styles';
import FilterBtn from '_atoms/filter-btn';
// import Relevance from "_molecules/relevance";

export default function ModalFilterScreen({onPress}) {
    const [categoriesSample, setCategoriesSample] = useState([]);
    return (
        <View style={{flex: 1}}>
            <SafeAreaView style={{flex: 0}} />
            <View style={{flex: 1}}>
                <Header
                    titleArr={['фильтр', 'розыгрышей']}
                    iconType={'back'}
                    onPress={onPress}
                />
                <View style={styles.modalContainer}>
                    <BG_GRADIENT />
                    <Categories
                        categoriesSample={categoriesSample}
                        setCategoriesSample={setCategoriesSample}
                    />
                    <Relevance />
                    <FilterBtn title={'показать'} amount={245} />
                </View>
            </View>
        </View>
    );
}
