//modules
import React, {useEffect} from 'react';
import {Text} from 'react-native';
import {useFonts} from 'expo-font';
import {
    SafeAreaProvider,
    initialWindowMetrics,
} from 'react-native-safe-area-context';

//routes
import RootRouter from '_routes/app-router';

//styles
import {initGlobalVar} from '_styles/global';

export default function App() {
    useEffect(() => {
        initGlobalVar();
    }, []);

    let [fontsLoaded] = useFonts({
        RobotoThin: require('_assets/fonts/Roboto-Thin.ttf'),
        RobotoLight: require('_assets/fonts/Roboto-Light.ttf'),
        RobotoRegular: require('_assets/fonts/Roboto-Regular.ttf'),
        RobotoMedium: require('_assets/fonts/Roboto-Medium.ttf'),
        RobotoBold: require('_assets/fonts/Roboto-Bold.ttf'),
    });
    if (!fontsLoaded) return <Text>no fonts</Text>;
    return (
        <SafeAreaProvider
            initialMetrics={initialWindowMetrics}
            style={{flex: 1}}>
            <RootRouter />
        </SafeAreaProvider>
    );
}
