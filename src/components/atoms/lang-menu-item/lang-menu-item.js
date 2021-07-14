//modules
import React, {useEffect} from 'react';
import {Pressable, Text, View} from 'react-native';
import {observer} from 'mobx-react-lite';
import {useTranslation} from 'react-i18next';

//styles
import {styles} from './styles';

//store
import otherStore from '_store/other-store';

export default observer(function LangMenuItem({
    name,
    title,
    icon,
    disabled = false,
}) {
    const [t, i18n] = useTranslation();

    return (
        <Pressable
            onPress={() => {
                otherStore.changeLang(name);
                i18n.changeLanguage(name);
            }}
            style={styles.btn}
            disabled={disabled}>
            <View style={styles.btnIcon}>{icon}</View>
            <Text style={styles.btnTitle}>{title}</Text>
        </Pressable>
    );
});
