/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

//i18n
import './i18n';

AppRegistry.registerComponent(appName, () => App);
