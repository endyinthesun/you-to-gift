//modules
import React, {useState, useEffect} from 'react';
import {ScrollView, View} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import EStyleSheet from 'react-native-extended-stylesheet';
import axios from 'axios';

//components
import {FilterBtn} from '_atoms/index';
import {Categories, Relevance} from '_molecules/index';
import {Header} from '_organisms/index';

//styles
import {contentContainerStyles} from '_styles/content-container';
import {BG_GRADIENT} from '_styles/gradients';

//stores
import {useStores} from '_store/index';

//services
import {_draws} from '_services/service';

export default function ModalFilterScreen({closeModal, scrollToTop}) {
  //global states
  const {actualDrawsStore} = useStores();
  const {currentCategoryFilter, currentRelevanceFilter} = actualDrawsStore;

  //states
  const [currentCategory, setCurrentCategory] = useState(currentCategoryFilter);
  const [currentRelevance, setCurrentRelevance] = useState(
    currentRelevanceFilter,
  );
  const [amountParticipants, setAmountParticipants] = useState(0);

  //styles value
  const stylesValue = {
    transparentColor: EStyleSheet.value('$TRANSPARENT'),
    whiteColor: EStyleSheet.value('$WHITE'),
    borderWidth: EStyleSheet.value('2rem'),
    fontColor: EStyleSheet.value('$fontColor'),
    FONT_ROBOTO_500: EStyleSheet.value('$FONT_ROBOTO_500'),
    FONT_ROBOTO_300: EStyleSheet.value('$FONT_ROBOTO_300'),
  };

  useEffect(() => {
    let cancel;
    _draws(
      {
        cancelToken: new axios.CancelToken(c => {
          cancel = c;
        }),
      },
      {
        page: 1,
        instagram: currentCategory,
        status: currentRelevance,
      },
    ).then(({data: {count}}) => {
      setAmountParticipants(count);
    });

    return () => {
      cancel();
    };
  }, [currentCategory, currentRelevance]);
  return (
    <View style={{flex: 1}}>
      <SafeAreaView style={{flex: 0}} />
      <View style={{flex: 1}}>
        <Header
          titleKey={'draws_filter'}
          iconType={'back'}
          onPress={closeModal}
        />
        <View style={{flex: 1}}>
          <BG_GRADIENT />
          <ScrollView
            contentContainerStyle={contentContainerStyles.modalFilterContainer}>
            <Categories
              currentCategory={currentCategory}
              setCurrentCategory={setCurrentCategory}
              stylesValue={stylesValue}
            />
            <Relevance
              currentRelevance={currentRelevance}
              setCurrentRelevance={setCurrentRelevance}
              stylesValue={stylesValue}
            />
            <FilterBtn
              title={'show'}
              amount={amountParticipants}
              showResults={() => {
                actualDrawsStore.setCurrentCategoryFilter(currentCategory);
                actualDrawsStore.setCurrentRelevanceFilter(currentRelevance);
                actualDrawsStore.resetPageNumber();
                scrollToTop();
                closeModal();
              }}
            />
          </ScrollView>
        </View>
      </View>
    </View>
  );
}
