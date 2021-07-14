import {makeAutoObservable} from 'mobx';

class BottomTab {
    constructor() {
        makeAutoObservable(this);
    }
    bottomTabIndex = 0;
    setBottomTabIndex(current) {
        this.bottomTabIndex = current;
    }
}
export default new BottomTab();
