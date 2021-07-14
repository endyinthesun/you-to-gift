//modules
import React, {useState} from 'react';
import {Text, View} from 'react-native';
import Collapsible from 'react-native-collapsible';

//SVGs
import RussianIcon from '_icons/flags/russia.svg';
import EnglishIcon from '_icons/flags/united-kingdom.svg';
import UkrainianIcon from '_icons/flags/ukraine.svg';
import PolandIcon from '_icons/flags/poland.svg';
import FranceIcon from '_icons/flags/france.svg';
import TurkeyIcon from '_icons/flags/turkey.svg';

//components
import {LangMenuItem} from '_atoms/index';

//styles
import {styles} from './styles';
import EStyleSheet from 'react-native-extended-stylesheet';

export default function LangMenu({isOpen}) {
    const iconSize = EStyleSheet.value('56rem');
    const langData = [
        {
            name: 'ru',
            title: 'Русский',
            icon: <RussianIcon width={iconSize} height={iconSize} />,
            key: 1,
        },
        {
            name: 'en',
            title: 'English',
            icon: <EnglishIcon width={iconSize} height={iconSize} />,
            key: 2,
        },
        {
            name: 'ua',
            title: 'Українська',
            icon: <UkrainianIcon width={iconSize} height={iconSize} />,
            key: 3,
        },
        // {
        //     name: 'pl',
        //     title: 'Polskie',
        //     icon: <PolandIcon width={iconSize} height={iconSize} />,
        //     key: 4,
        //     disabled: true,
        // },
        // {
        //     name: 'fr',
        //     title: 'Français',
        //     icon: <FranceIcon width={iconSize} height={iconSize} />,
        //     key: 5,
        //     disabled: true,
        // },
        // {
        //     name: 'tr',
        //     title: 'Türk',
        //     icon: <TurkeyIcon width={iconSize} height={iconSize} />,
        //     key: 6,
        //     disabled: true,
        // },
    ];
    return (
        <Collapsible collapsed={isOpen}>
            <View style={styles.container}>
                {langData.map(props => {
                    return <LangMenuItem {...props} />;
                })}
            </View>
        </Collapsible>
    );
}
