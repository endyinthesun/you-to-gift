import {makeAutoObservable} from 'mobx';

export default class FavoriteDrawsStore {
  currentCategoryFilter = 'all';
  currentRelevanceFilter = 'active';
  notification = false;

  favoritesIds = [];

  constructor() {
    makeAutoObservable(this);
  }
  setCurrentCategoryFilter = category => {
    this.currentCategoryFilter = category;
  };
  setCurrentRelevanceFilter = relevance => {
    this.currentRelevanceFilter = relevance;
  };
  setFavoritesIds = arrayFavoritesIds => {
    this.favoritesIds = arrayFavoritesIds;
  };
  setNotification = val => {
    this.notification = val;
  };
}
