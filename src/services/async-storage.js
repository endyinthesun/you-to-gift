import AsyncStorage from '@react-native-async-storage/async-storage';

export const getFavoritesId = async () =>
  await AsyncStorage.getItem('@favoritesId');

export const setFavoritesId = async id => {
  const favoritesId = await AsyncStorage.getItem('@favoritesId');
  const parsedJSON = favoritesId ? JSON.parse(favoritesId) : [];
  if (parsedJSON.includes(id)) {
    const indexId = parsedJSON.indexOf(id);
    const newArr = JSON.stringify([
      ...parsedJSON.slice(0, indexId),
      ...parsedJSON.slice(indexId + 1),
    ]);
    await AsyncStorage.setItem('@favoritesId', newArr);
  } else {
    const jsonArray = JSON.stringify([...parsedJSON, id]);
    await AsyncStorage.setItem('@favoritesId', jsonArray);
  }
  return getFavoritesId();
};

export const getLang = async () => await AsyncStorage.getItem('@lang');

export const setLang = async lang => {
  try {
    await AsyncStorage.setItem('@lang', lang);
  } catch (e) {
    // saving error
  }
};
