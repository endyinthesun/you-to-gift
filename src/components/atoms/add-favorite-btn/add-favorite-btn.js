//modules
import React, {useState, useCallback, useEffect} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {useTranslation} from 'react-i18next';
import EStyleSheet from 'react-native-extended-stylesheet';
import {observer} from 'mobx-react-lite';
import Toast from 'react-native-toast-message';

//SVGs
import StarIcon from '_icons/bottom-bar/star.svg';
import StarActiveIcon from '_icons/bottom-bar/star-active.svg';

//styles
import {styles} from './styles';
import {
  BTN_FAVORITE_ACTIVE_GRADIENT,
  BTN_FAVORITE_GRADIENT,
} from '_styles/gradients';

//async storage
import {getFavoritesId, setFavoritesId} from '_services/async-storage';

//store
import {useStores} from '_store/index';

export default observer(function AddFavoriteBtn({id}) {
  const [t] = useTranslation('draw_screen');
  const [isFavorites, setIsFavorites] = useState(false);

  const {favoriteDrawsStore} = useStores();
  const {setFavoritesIds, favoritesIds, setNotification} = favoriteDrawsStore;

  const iconSize = EStyleSheet.value('22rem');
  const title = isFavorites
    ? t('competition_in_favorites')
    : t('add_to_favourites');

  const setFavoriteStatus = () => {
    setFavoritesId(id).then(favoritesId => {
      const parsedJSON = JSON.parse(favoritesId);
      if (favoritesId !== null) {
        setFavoritesIds(parsedJSON);
      }
    });
  };

  const containsId = favoritesIds.includes(id);

  useEffect(() => {
    getFavoritesId().then(favoritesId => {
      const parsedJSON = JSON.parse(favoritesId);
      if (favoritesId !== null) {
        setFavoritesIds(parsedJSON);
      }
    });
  }, []);

  useEffect(() => {
    if (containsId) {
      setIsFavorites(true);
    } else {
      setIsFavorites(false);
    }
  }, [favoritesIds]);
  const onPressCallback = useCallback(() => {
    setFavoriteStatus();
    setNotification(true);
    if (!isFavorites) {
      Toast.show({
        type: 'success',
      });
    }
  }, [isFavorites]);
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={onPressCallback}>
      {isFavorites ? null : <BTN_FAVORITE_GRADIENT />}
      <View style={styles.btnIcon}>
        {isFavorites ? (
          <StarActiveIcon width={iconSize} height={iconSize} />
        ) : (
          <StarIcon width={iconSize} height={iconSize} />
        )}
      </View>
      <Text style={styles.btnTitle}>{title}</Text>
    </TouchableOpacity>
  );
});
