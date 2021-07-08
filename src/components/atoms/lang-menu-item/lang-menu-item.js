//modules
import React, {useEffect} from 'react';
import {Pressable, Text, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {observer} from 'mobx-react-lite';

//styles
import {styles} from './styles';

//store
import {otherStore} from '_store/index';

export default observer(function LangMenuItem({
    name,
    title,
    icon,
    disabled = false,
}) {
    const setLang = async value => {
        try {
            await AsyncStorage.setItem('@lang', value);
        } catch (e) {
            // save error
        }
        // console.log('Done.');
    };

    useEffect(() => {
        setLang(otherStore.lang);
    }, [otherStore.lang]);
    return (
        <Pressable
            onPress={() => {
                otherStore.changeLang(name);
                // console.log('name-- ', name);
            }}
            style={styles.btn}
            disabled={disabled}>
            <View style={styles.btnIcon}>{icon}</View>
            <Text style={styles.btnTitle}>{title}</Text>
        </Pressable>
    );
});
