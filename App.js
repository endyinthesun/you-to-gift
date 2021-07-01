//modules
import React from 'react'
import {Text, View, StyleSheet} from 'react-native'
import {useFonts} from 'expo-font'
import {
    SafeAreaProvider,
    initialWindowMetrics,
    SafeAreaView,
} from 'react-native-safe-area-context'
import {FONT_ROBOTO_500, FONT_ROBOTO_700} from '_styles/typography'
import {BG_GRADIENT} from '_styles/colors'
import {LinearGradient} from 'expo-linear-gradient'

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
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
            <SafeAreaView style={{flex: 1}}>
                <View style={styles.container}>
                    <BG_GRADIENT />
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    text: {
        fontFamily: FONT_ROBOTO_700,
    },
    container: {
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
        // backgroundColor: 'orange',
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
    },
})
