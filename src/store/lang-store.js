//modules
import {makeAutoObservable} from 'mobx';
import AsyncStorage from '@react-native-async-storage/async-storage';

const _STORE = '@lang';

export default class LangStore {
  lang = 'ru';

  constructor() {
    makeAutoObservable(this);
  }

  changeLang(lang) {
    this.lang = lang;
    AsyncStorage.setItem(_STORE, lang);
  }
}
