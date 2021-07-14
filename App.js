//modules
import React, {useEffect} from 'react';
import {ActivityIndicator} from 'react-native';
import {useFonts} from 'expo-font';
import {
    SafeAreaProvider,
    initialWindowMetrics,
} from 'react-native-safe-area-context';
import {useTranslation} from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {observer} from 'mobx-react-lite';

//routes
import RootRouter from '_routes/app-router';

//styles
import {initGlobalVar} from '_styles/global';

//store
import otherStore from '_store/other-store';

export default function App() {
    const [t, i18n] = useTranslation();

    useEffect(() => {
        //styles const
        initGlobalVar();

        //check async storage
        const checkAsync = async () => {
            const value = await AsyncStorage.getItem('@lang');
            if (value !== undefined && value !== null) {
                otherStore.changeLang(value, true);
                i18n.changeLanguage(value);
            } else {
                otherStore.changeLang('ru');
            }
        };
        checkAsync();
    }, []);

    let [fontsLoaded] = useFonts({
        RobotoThin: require('_assets/fonts/Roboto-Thin.ttf'),
        RobotoLight: require('_assets/fonts/Roboto-Light.ttf'),
        RobotoRegular: require('_assets/fonts/Roboto-Regular.ttf'),
        RobotoMedium: require('_assets/fonts/Roboto-Medium.ttf'),
        RobotoBold: require('_assets/fonts/Roboto-Bold.ttf'),
    });
    if (!fontsLoaded) return <ActivityIndicator />;
    return (
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
            <RootRouter />
        </SafeAreaProvider>
    );
}
