//modules
import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';

//localize json
import translationEN from './assets/locales/en.json';
import translationUA from './assets/locales/ua.json';
import translationRU from './assets/locales/ru.json';

//async storage
import {getLang} from '_services/async-storage';

const resources = {
  en: translationEN,
  ua: translationUA,
  ru: translationRU,
};
getLang().then(res => {
  i18n.use(initReactI18next).init({
    resources,
    lng: res ? res : 'ru',
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
  });
});

export default i18n;
