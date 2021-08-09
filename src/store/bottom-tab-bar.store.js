import {makeAutoObservable} from 'mobx';

export default class BottomTabBarStore {
  tabBarPosition = 0;

  constructor() {
    makeAutoObservable(this);
  }

  setTabBarPosition = position => {
    this.tabBarPosition = position;
  };
}
