//modules
import {makeAutoObservable} from 'mobx';
import AsyncStorage from '@react-native-async-storage/async-storage';

class OtherStore {
  lang = '';
  constructor() {
    makeAutoObservable(this);
  }
  changeLang(current) {
    this.lang = current;
  }
}

export default new OtherStore();
