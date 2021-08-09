import React, {useContext} from 'react';
import ActualDrawsStore from '_store/actual-draws.store';
import FavoriteDrawsStore from '_store/favorite-draws.store';
import LangStore from '_store/lang-store';
import BottomTabBarStore from '_store/bottom-tab-bar.store';

class RootStore {
  constructor() {
    this.actualDrawsStore = new ActualDrawsStore(this);
    this.favoriteDrawsStore = new FavoriteDrawsStore(this);
    this.langStore = new LangStore(this);
    this.bottomTabBarStore = new BottomTabBarStore(this);
  }
}

const StoresContext = React.createContext(new RootStore());

export const useStores = () => useContext(StoresContext);
