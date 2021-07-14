//modules
import React, {useState, useEffect} from 'react';
import {Text, View} from 'react-native';
import {useTranslation} from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {observer} from 'mobx-react-lite';

//styles
import {styles} from './styles';
import {LangBtn} from '_atoms/index';
import {LangMenu} from '_molecules/index';

export default function LangBlock() {
    // const [currentLang, setCurrentLang] = useState('ua');
    const [isOpen, toggleIsOpen] = useState(false);
    // const [t, i18n] = useTranslation();

    return (
        <View style={styles.container}>
            <LangBtn toggleIsOpen={toggleIsOpen} isOpen={isOpen} />
            <LangMenu isOpen={isOpen} />
        </View>
    );
}
