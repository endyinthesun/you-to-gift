//modules
import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {observer} from 'mobx-react-lite';
import {useTranslation} from 'react-i18next';
import EStyleSheet from 'react-native-extended-stylesheet';

//styles
import {styles} from './styles';

//SVGs
import RussianIcon from '_icons/flags/russia.svg';
import EnglishIcon from '_icons/flags/united-kingdom.svg';
import UkrainianIcon from '_icons/flags/ukraine.svg';
import PolandIcon from '_icons/flags/poland.svg';
import FranceIcon from '_icons/flags/france.svg';
import TurkeyIcon from '_icons/flags/turkey.svg';

//store
import otherStore from '_store/other-store';

export default observer(function LangContent({disabled = false}) {
    const [i18n] = useTranslation();
    const iconSize = EStyleSheet.value('56rem');
    const langData = [
        {
            name: 'ru',
            title: 'Русский',
            icon: <RussianIcon width={iconSize} height={iconSize} />,
            id: 1,
        },
        {
            name: 'en',
            title: 'English',
            icon: <EnglishIcon width={iconSize} height={iconSize} />,
            id: 2,
        },
        {
            name: 'ua',
            title: 'Українська',
            icon: <UkrainianIcon width={iconSize} height={iconSize} />,
            id: 3,
        },
        // {
        //     name: 'pl',
        //     title: 'Polskie',
        //     icon: <PolandIcon width={iconSize} height={iconSize} />,
        //     id: 4,
        //     disabled: true,
        // },
        // {
        //     name: 'fr',
        //     title: 'Français',
        //     icon: <FranceIcon width={iconSize} height={iconSize} />,
        //     id: 5,
        //     disabled: true,
        // },
        // {
        //     name: 'tr',
        //     title: 'Türk',
        //     icon: <TurkeyIcon width={iconSize} height={iconSize} />,
        //     id: 6,
        //     disabled: true,
        // },
    ];
    return (
        <View style={styles.container}>
            {langData.map(({name, title, icon, id}) => (
                <Pressable
                    key={id}
                    onPress={() => {
                        otherStore.changeLang(name);
                        i18n.changeLanguage(name);
                    }}
                    style={styles.btn}
                    disabled={disabled}>
                    <View style={styles.btnIcon}>{icon}</View>
                    <Text style={styles.btnTitle}>{title}</Text>
                </Pressable>
            ))}
        </View>
    );
});
