//modules
import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

//localize json
import translationEN from './assets/locales/en.json';
import translationUA from './assets/locales/ua.json';
import translationRU from './assets/locales/ru.json';

import LangStore from '_store/lang-store';
import {NativeModules, Platform} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// const {langStore} = useStores();
const langStore = new LangStore();
const _STORE = '@lang';
const _EXISTING_LANGS = ['uk', 'ru', 'en'];

const resources = {
  en: translationEN,
  uk: translationUA,
  ru: translationRU,
};

AsyncStorage.getItem('@lang')
  .then(res => {
    // console.log('async lang--- ', res);
    if (res) {
      langStore.lang = res;
    } else {
      const deviceLang = (
        Platform.OS === 'ios'
          ? NativeModules.SettingsManager.settings.AppleLocale ||
            NativeModules.SettingsManager.settings.AppleLanguages[0] // iOS 13
          : NativeModules.I18nManager.localeIdentifier
      ).slice(0, 2);
      if (_EXISTING_LANGS.includes(deviceLang)) {
        langStore.changeLang(deviceLang);
      }
      AsyncStorage.setItem(_STORE, langStore.lang);
    }
    return langStore.lang;
  })
  .then(res => {
    console.log('RESSS LANG--- ', res);
    i18n.use(initReactI18next).init({
      resources,
      lng: res,
      keySeparator: false,
      interpolation: {
        escapeValue: false,
      },
    });
  });

// i18n.use(initReactI18next).init({
//   resources,
//   lng: 'uk',
//   keySeparator: false,
//   interpolation: {
//     escapeValue: false,
//   },
// });

export default i18n;
