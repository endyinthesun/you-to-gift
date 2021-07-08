//modules
import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';

//localize json
import translationEN from './assets/locales/en.json';
import translationUA from './assets/locales/ua.json';
import translationRU from './assets/locales/ru.json';

const resources = {
    en: translationEN,
    ua: translationUA,
    ru: translationRU,
};

// const getData = async () => {
//     try {
//         return await AsyncStorage.getItem('@lang');
//     } catch (e) {
//         // error reading value
//     }
// };

// getData().catch(res => {
//     console.log('res-- ', res);
//     return res;
// });
i18n.use(initReactI18next).init({
    resources,
    lng: 'ru',
    keySeparator: false,
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
