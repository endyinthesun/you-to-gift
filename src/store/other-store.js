import {makeAutoObservable} from 'mobx';
class OtherStore {
    lang = '';
    bottomTabIndex = 0;

    constructor() {
        makeAutoObservable(this);
    }
    changeLang(current) {
        this.lang = current;
    }
    setBottomTabIndex(current) {
        this.bottomTabIndex = current;
    }
}

export default new OtherStore();
