//modules
import React, {useEffect, useState, useCallback, useRef} from 'react';
import {FlatList, View, ActivityIndicator, Modal} from 'react-native';
import {observer} from 'mobx-react-lite';
import moment from 'moment';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import axios from 'axios';

//components
import {Header, DrawItem} from '_organisms/index';

//SVGs
import InstIconBg from '_icons/inst-bg.svg';
import LikeIconBg from '_icons/like-bg.svg';
import GiveIconBg from '_icons/give-bg.svg';
import InstIcon from '_icons/categories/inst.svg';
import LikeIcon from '_icons/categories/like.svg';
import GiveIcon from '_icons/categories/give.svg';

//screens
import ModalFilterScreen from '_screens/modal-filter-screen/modal-filter-screen';

//service
import {_draws} from '_services/service';

//styles
import {styles} from './styles';
import {BG_GRADIENT} from '_styles/gradients';

//stores
import {useStores} from '_store/index';

export default observer(function DrawsScreen({route, navigation}) {
  const flatList = useRef();
  //global states
  const {actualDrawsStore} = useStores();
  const {currentCategoryFilter, currentRelevanceFilter, pageNumber} =
    actualDrawsStore;
  //modal
  const [modalVisible, setModalVisible] = useState(false);
  //draws data
  const [drawsData, setDrawsData] = useState([]);
  const [drawsCount, setDrawsCount] = useState();
  //loading
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingPage, setIsLoadingPage] = useState(false);

  const tabBarHeight = useBottomTabBarHeight();
  const convertTime = date => moment(`${date} +03:00`, 'DD-MM-YYYY HH:mm ZZ');

  useEffect(() => {
    let cancel;
    if (pageNumber > 1) {
      setIsLoadingPage(true);
    }
    console.log('page number--- ', pageNumber);

    _draws(
      {
        cancelToken: new axios.CancelToken(c => {
          cancel = c;
        }),
      },
      {
        page: pageNumber,
        instagram: currentCategoryFilter,
        status: currentRelevanceFilter,
      },
    ).then(({data: {count, results}}) => {
      const items = results.map(
        ({
          id,
          all_price,
          date_end,
          get_type,
          status,
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

      if (pageNumber === 1) {
        setIsLoading(false);
      } else {
        setIsLoadingPage(false);
      }
      setDrawsData(pageNumber === 1 ? items : [...drawsData, ...items]);
      if (pageNumber === 1) {
        setDrawsCount(count);
      }
    });

    return () => {
      cancel();
    };
  }, [pageNumber, currentCategoryFilter, currentRelevanceFilter]);

  const handleLoadMore = () => {
    const difference = drawsCount - drawsData.length;
    const remainder = drawsCount % 10;

    if (isLoadingPage) return;
    if (difference !== remainder && drawsCount > 10) {
      actualDrawsStore.incrementPageNumber();
    }
  };

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
      />
    );
  }, []);
  const keyExtractor = useCallback(item => item.id.toString(), []);
  const renderListFooter = () =>
    isLoadingPage ? <ActivityIndicator size={'large'} color={'white'} /> : null;

  const getItemLayout = (data, index) => ({
    length: 150,
    offset: 150 * index,
    index,
  });
  return (
    <View style={{flex: 1}}>
      <Header
        titleKey={'actual_draws'}
        actualDraws={'Saint-Petersburg'}
        iconType={'filter'}
        onPress={() => setModalVisible(true)}
      />
      <View style={{flex: 1, justifyContent: 'center'}}>
        <BG_GRADIENT />
        {isLoading ? (
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
            data={drawsData}
            renderItem={renderItem}
            onEndReachedThreshold={0.3}
            onEndReached={handleLoadMore}
            ListFooterComponent={renderListFooter}
            removeClippedSubviews={true}
            maxToRenderPerBatch={8}
            // getItemLayout={getItemLayout}
            windowSize={15}
            ListFooterComponentStyle={styles.footerList}
            contentContainerStyle={styles.flatListContainer}
          />
        )}
      </View>
      <Modal
        animationType={'slide'}
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}>
        <ModalFilterScreen
          closeModal={() => setModalVisible(false)}
          scrollToTop={() =>
            flatList.current.scrollToOffset({
              animated: true,
              offset: 0,
            })
          }
        />
      </Modal>
    </View>
  );
});
