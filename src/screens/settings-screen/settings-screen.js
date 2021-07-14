//modules
import React from 'react';
import {Text, View} from 'react-native';

//components
import {CityBlock, Header, LangBlock} from '_organisms/index';

//styles
import {contentContainerStyles} from '_styles/content-container';
import {BG_GRADIENT} from '_styles/gradients';

export default function SettingsScreen({navigation}) {
    return (
        <View style={{flex: 1}}>
            <Header titleKey={'settings_raffles'} />

            <View style={contentContainerStyles.container}>
                <BG_GRADIENT />
                <LangBlock />
                <CityBlock />
            </View>
        </View>
    );
}
