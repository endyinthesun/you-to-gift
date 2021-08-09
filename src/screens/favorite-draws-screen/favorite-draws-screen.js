//modules
import React, {useState, useEffect, useCallback, useRef} from 'react';
import {
  View,
  Modal,
  ActivityIndicator,
  FlatList,
  Text,
  BackHandler,
  Platform,
} from 'react-native';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import moment from 'moment';
import {observer} from 'mobx-react-lite';
import axios from 'axios';

//components
import {DrawItem, Header} from '_organisms/index';

//screens
import ModalFilterScreen from '_screens/modal-filter-screen/modal-filter-screen';

//SVGs
import InstIconBg from '_icons/inst-bg.svg';
import LikeIconBg from '_icons/like-bg.svg';
import GiveIconBg from '_icons/give-bg.svg';
import InstIcon from '_icons/categories/inst.svg';
import LikeIcon from '_icons/categories/like.svg';
import GiveIcon from '_icons/categories/give.svg';
import SadEmoji from '_icons/sad-emoji.svg';

//services
import {_drawsFavorites} from '_services/service';

//stores
import {useStores} from '_store/index';

//styles
import {BG_GRADIENT} from '_styles/gradients';
import {styles} from '_screens/draws-screen/styles';
import EStyleSheet from 'react-native-extended-stylesheet';
import {useTranslation} from 'react-i18next';
import {useFocusEffect} from '@react-navigation/native';

export default observer(function FavoriteDrawsScreen({navigation}) {
  const [t, i18n] = useTranslation('favorite_draws_screen');

  const flatList = useRef();

  //states
  const [modalVisible, setModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [favoriteDrawsData, setFavoriteDrawsData] = useState([]);
  const [isNothingToView, setIsNothingToView] = useState(false);

  //global states
  const {favoriteDrawsStore, bottomTabBarStore} = useStores();
  const {currentCategoryFilter, currentRelevanceFilter, favoritesIds} =
    favoriteDrawsStore;
  const {setTabBarPosition} = bottomTabBarStore;

  const tabBarHeight = useBottomTabBarHeight();
  const convertTime = date => moment(`${date} +03:00`, 'DD-MM-YYYY HH:mm ZZ');

  useEffect(() => {
    let cancel;
    if (favoritesIds.length) {
      setIsNothingToView(false);

      _drawsFavorites(
        {
          cancelToken: new axios.CancelToken(c => {
            cancel = c;
          }),
        },
        {
          instagram: currentCategoryFilter,
          status: currentRelevanceFilter,
        },
        favoritesIds,
      ).then(({data}) => {
        const items = data.map(
          ({
            id,
            all_price,
            date_end,
            get_type, //categories
            status, //actual
            chanel: {image, subscribe, url, title, verificated},
            valute: {symbol},
          }) => {
            const dateEnd = convertTime(date_end).format('YYYY-MM-DD');
            const timeEnd = convertTime(date_end).format('HH:mm');
            return {
              id,
              all_price,
              dateEnd,
              timeEnd,
              get_type,
              chanel: {image, subscribe, url, title, verificated},
              valute: {symbol},
            };
          },
        );
        setFavoriteDrawsData([...items]);
        setIsLoading(false);
      });

      return () => {
        cancel();
      };
    } else {
      setIsNothingToView(true);
    }
  }, [favoritesIds]);

  const renderItem = useCallback(({item}) => {
    //amount subscribers
    const moreThousand = item.chanel.subscribe >= 1000;
    const modifyAmountSubs = moreThousand
      ? Math.trunc(item.chanel.subscribe / 1000)
      : item.chanel.subscribe;

    const textAmountSubs = moreThousand
      ? `${modifyAmountSubs}K`
      : modifyAmountSubs;

    const isInst = item.get_type === 'instagram';
    const isLike = item.get_type === 'liketime';
    const isGive = item.get_type === 'give';

    //background social icon
    const iconBg = isInst ? (
      <InstIconBg />
    ) : isLike ? (
      <LikeIconBg />
    ) : isGive ? (
      <GiveIconBg />
    ) : null;

    //small social icon
    const icon = isInst ? (
      <InstIcon width={32} height={32} />
    ) : isLike ? (
      <LikeIcon width={32} height={32} />
    ) : isGive ? (
      <GiveIcon width={32} height={32} />
    ) : null;

    //budget in format -- '1 000 000'
    const formatBudget = parseInt(item.all_price).toLocaleString('ru');

    const itemContent = {
      imageUrl: item.chanel.image,
      userName: item.chanel.title,
      amountSubs: textAmountSubs,
      dateEnd: item.dateEnd,
      timeEnd: item.timeEnd,
      formatBudget: formatBudget,
      currency: item.valute.symbol,
    };
    return (
      <DrawItem
        itemContent={itemContent}
        id={item.id}
        navigation={navigation}
        icon={icon}
        iconBg={iconBg}
        favorite
      />
    );
  }, []);
  const keyExtractor = useCallback(item => item.id.toString(), []);
  const flatListContent = isLoading ? (
    <ActivityIndicator
      size={'large'}
      color={'white'}
      style={{marginTop: -tabBarHeight}}
    />
  ) : (
    <FlatList
      ref={flatList}
      initialNumToRender={10}
      keyExtractor={keyExtractor}
      data={favoriteDrawsData}
      renderItem={renderItem}
      removeClippedSubviews={true}
      maxToRenderPerBatch={8}
      // getItemLayout={getItemLayout}
      windowSize={15}
      ListFooterComponentStyle={styles.footerList}
      contentContainerStyle={styles.flatListContainer}
    />
  );
  const sadEmojiSize = EStyleSheet.value('94rem');

  useFocusEffect(
    useCallback(() => {
      if (Platform.OS === 'ios') return;
      const onBackPress = () => {
        navigation.navigate('DrawsItems');
        setTabBarPosition(0);
        return true;
      };
      BackHandler.addEventListener('hardwareBackPress', onBackPress);
      return () =>
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, []),
  );
  return (
    <View style={{flex: 1}}>
      <Header
        titleKey={'favorite_draws'}
        iconType={'filter'}
        onPress={() => setModalVisible(true)}
        bold={'first'}
      />
      <View style={{flex: 1, justifyContent: 'center'}}>
        <BG_GRADIENT />
        {isNothingToView ? (
          <View style={{marginTop: -tabBarHeight, alignItems: 'center'}}>
            <SadEmoji width={sadEmojiSize} height={sadEmojiSize} />
            <View style={styles.nothingToViewContainer}>
              <Text style={styles.nothingToViewText}>
                {t('there_is_nothing_here')}
              </Text>
              <Text style={styles.nothingToViewText}>
                {t('add_at_least_one_draw')}
              </Text>
            </View>
          </View>
        ) : (
          flatListContent
        )}
      </View>
      {/*<Modal*/}
      {/*  animationType="fade"*/}
      {/*  transparent={true}*/}
      {/*  visible={modalVisible}*/}
      {/*  onRequestClose={() => {*/}
      {/*    setModalVisible(false);*/}
      {/*  }}>*/}
      {/*  <ModalFilterScreen*/}
      {/*    closeModal={() => setModalVisible(false)}*/}
      {/*    scrollToTop={() =>*/}
      {/*      flatList.current.scrollToOffset({*/}
      {/*        animated: true,*/}
      {/*        offset: 0,*/}
      {/*      })*/}
      {/*    }*/}
      {/*    drawsStore={favoriteDrawsStore}*/}
      {/*    favorites*/}
      {/*  />*/}
      {/*</Modal>*/}
    </View>
  );
});
