//modules
import {makeAutoObservable} from 'mobx';
import AsyncStorage from '@react-native-async-storage/async-storage';

class OtherStore {
    lang = '';
    setLang = async value => {
        try {
            await AsyncStorage.setItem('@lang', value);
        } catch (e) {
            // save error
        }
        // console.log('Done.');
    };
    constructor() {
        makeAutoObservable(this);
    }
    changeLang(current, init = false) {
        this.lang = current;
        if (!init) this.setLang(current);
    }
}

export default new OtherStore();
