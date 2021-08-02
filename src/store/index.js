import React, {useContext} from 'react';
import ActualDrawsStore from './actual-draws.store';
import FavoriteDrawsStore from './favorite-draws.store';

class RootStore {
  constructor() {
    this.actualDrawsStore = new ActualDrawsStore(this);
    this.favoriteDrawsStore = new FavoriteDrawsStore(this);
  }
}

const StoresContext = React.createContext(new RootStore());

export const useStores = () => useContext(StoresContext);
