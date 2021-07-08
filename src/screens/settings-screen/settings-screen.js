//modules
import React from 'react';
import {Text, View} from 'react-native';

//components
import {CityBlock, Header, LangBlock} from '_organisms/index';

//styles
import {styles} from '_styles/content-container';

export default function SettingsScreen({navigation}) {
    return (
        <View style={{flex: 1}}>
            <Header titleKey={'settings_raffles'} />

            <View style={styles.contentContainer}>
                <LangBlock />
                <CityBlock />
            </View>
        </View>
    );
}
