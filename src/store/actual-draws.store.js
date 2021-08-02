import {makeAutoObservable} from 'mobx';

export default class ActualDrawsStore {
  currentCategoryFilter = 'all';
  currentRelevanceFilter = 'active';
  pageNumber = 1;

  constructor() {
    makeAutoObservable(this);
  }

  setCurrentCategoryFilter = category => {
    this.currentCategoryFilter = category;
  };
  setCurrentRelevanceFilter = relevance => {
    this.currentRelevanceFilter = relevance;
  };
  incrementPageNumber = () => {
    this.pageNumber = ++this.pageNumber;
  };
  resetPageNumber = () => {
    this.pageNumber = 1;
  };
}
