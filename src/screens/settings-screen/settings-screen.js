import React from 'react'
import {Text, View, TouchableHighlight} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import {BG_GRADIENT} from '_styles/colors'

export default function SettingsScreen() {
    return (
        <View style={{flex: 1, backgroundColor: 'transparent'}}>
            <Text>Hello, its setting screen</Text>
        </View>
    )
}
