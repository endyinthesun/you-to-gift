//modules
import React, {useState, useEffect, useCallback} from 'react';
import {View, Pressable, Text} from 'react-native';
import {useTranslation} from 'react-i18next';
import {observer} from 'mobx-react-lite';
import Toast from 'react-native-toast-message';

//SVGs
import StarIcon from '_icons/bottom-bar/star.svg';
import StarIconActive from '_icons/bottom-bar/star-active.svg';
import DashedLineIcon from '_icons/dashed-line.svg';
import ClockIcon from '_icons/clock.svg';

//components
import {Budget, UserAva} from '_atoms/index';

//styles
import {styles} from './styles';
import {ITEM_GRADIENT} from '_styles/gradients';
import EStyleSheet from 'react-native-extended-stylesheet';

//async storage
import {getFavoritesId, setFavoritesId} from '_services/async-storage';

//store
import {useStores} from '_store/index';

export default observer(function DrawItem({
  itemContent: {
    imageUrl,
    userName,
    amountSubs,
    dateEnd,
    timeEnd,
    formatBudget,
    currency,
  },
  id,
  navigation,
  icon,
  iconBg,
  favorite = false,
}) {
  const [t] = useTranslation('draws_screen');

  const [isFavorites, setIsFavorites] = useState(false);

  const starIconWidth = EStyleSheet.value('26rem');
  const starIconHeight = EStyleSheet.value('24rem');

  const {favoriteDrawsStore} = useStores();
  const {setFavoritesIds, favoritesIds} = favoriteDrawsStore;

  const setFavoriteStatus = () => {
    // USE GLOBAL STATE
    setFavoritesId(id).then(favoritesId => {
      const parsedJSON = JSON.parse(favoritesId);
      if (favoritesId !== null) {
        setFavoritesIds(parsedJSON);
      }
    });
  };

  useEffect(() => {
    getFavoritesId().then(favoritesId => {
      const parsedJSON = JSON.parse(favoritesId);
      if (favoritesId !== null && !favorite) {
        setFavoritesIds(parsedJSON);
      }
    });
  }, []);

  useEffect(() => {
    if (favoritesIds.includes(id)) {
      setIsFavorites(true);
    } else {
      setIsFavorites(false);
    }
  }, [favoritesIds]);

  const onPressCallback = useCallback(() => {
    setFavoriteStatus();
    if (!isFavorites) {
      Toast.show({
        type: 'success',
      });
    }
  }, [isFavorites]);

  return (
    <Pressable
      style={styles.container}
      onPress={() =>
        navigation.navigate('Draw', {
          id,
          imageUrl,
          amountSubs,
          dateEnd,
          timeEnd,
          formatBudget,
        })
      }>
      <View style={styles.topContainer}>
        <View style={styles.topLeft}>
          <UserAva size={46} imageUrl={imageUrl} />
          <View style={styles.userInfo}>
            <Text style={styles.userName}>{userName}</Text>
            <Text style={styles.userSubs}>
              {amountSubs} {t('followers')}
            </Text>
          </View>
        </View>
        {icon}
      </View>

      <DashedLineIcon width={'100%'} />

      <View style={styles.bottomContainer}>
        <View style={styles.bottomLeft}>
          <Pressable style={styles.favoriteBtn} onPress={onPressCallback}>
            {isFavorites ? (
              <StarIconActive width={starIconWidth} height={starIconHeight} />
            ) : (
              <StarIcon width={starIconWidth} height={starIconHeight} />
            )}
          </Pressable>
          <View style={styles.date}>
            <ClockIcon />
            <Text style={styles.dateText}>{dateEnd}</Text>
          </View>
        </View>
        <Budget number={formatBudget} currency={currency} fontSize={24} />
      </View>
      <View style={styles.icon}>{iconBg}</View>
      <ITEM_GRADIENT
        fillBottom
        height={4}
        colors={['#FFC107', '#F44336', '#9C27B0']}
        locations={[0, 0.2, 1]}
      />
    </Pressable>
  );
});
