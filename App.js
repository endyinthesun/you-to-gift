//modules
import React from 'react'
import {Text, View, StyleSheet} from 'react-native'
import {useFonts} from 'expo-font'
import {
    SafeAreaProvider,
    initialWindowMetrics,
} from 'react-native-safe-area-context'

//routes
import RootRouter from '_routes/app-router'

//styles
import {FONT_ROBOTO_500, FONT_ROBOTO_700} from '_styles/typography'
import {BG_GRADIENT, WHITE} from '_styles/colors'

export default function App() {
    let [fontsLoaded] = useFonts({
        RobotoThin: require('_assets/fonts/Roboto-Thin.ttf'),
        RobotoLight: require('_assets/fonts/Roboto-Light.ttf'),
        RobotoRegular: require('_assets/fonts/Roboto-Regular.ttf'),
        RobotoMedium: require('_assets/fonts/Roboto-Medium.ttf'),
        RobotoBold: require('_assets/fonts/Roboto-Bold.ttf'),
    })
    if (!fontsLoaded) return <Text>no fonts</Text>
    return (
        <SafeAreaProvider
            initialMetrics={initialWindowMetrics}
            style={styles.container}>
            <RootRouter />
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    text: {
        fontFamily: FONT_ROBOTO_700,
    },
    container: {
        flex: 1,
        // backgroundColor: 'red',
    },
})
