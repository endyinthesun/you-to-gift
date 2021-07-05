import React from 'react'
import {SafeAreaView, Text, TouchableHighlight, View} from 'react-native'
import {BG_GRADIENT} from '_styles/colors'

export default function ProfileScreen({navigation}) {
    return (
        <View style={{flex: 1}}>
            <Text>Screen: Profile</Text>

            <TouchableHighlight onPress={() => navigation.navigate('Main')}>
                <Text>Go to home</Text>
            </TouchableHighlight>
        </View>
    )
}
