//modules
import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {observer} from 'mobx-react-lite';

//components
import {CityBlock, Header, SpoilerBlock} from '_organisms/index';
import {LangContent} from '_atoms/index';

//SVGs
import RussianIcon from '_icons/flags/russia.svg';
import EnglishIcon from '_icons/flags/united-kingdom.svg';
import UkrainianIcon from '_icons/flags/ukraine.svg';
import PolandIcon from '_icons/flags/poland.svg';
import FranceIcon from '_icons/flags/france.svg';
import TurkeyIcon from '_icons/flags/turkey.svg';

//styles
import {contentContainerStyles} from '_styles/content-container';
import {BG_GRADIENT} from '_styles/gradients';

//store
import otherStore from '_store/other-store';

export default observer(function SettingsScreen({navigation}) {
    const [btnData, setBtnData] = useState({
        title: null,
        icon: null,
    });
    useEffect(() => {
        switch (otherStore.lang) {
            case 'ru':
                setBtnData({
                    icon: <RussianIcon />,
                    title: 'Русский язык',
                });
                break;
            case 'en':
                setBtnData({
                    icon: <EnglishIcon />,
                    title: 'English language',
                });
                break;
            case 'ua':
                setBtnData({
                    icon: <UkrainianIcon />,
                    title: 'Українська мова',
                });
                break;
            case 'pl':
                setBtnData({
                    icon: <PolandIcon />,
                    title: 'Język polski',
                });
                break;
            case 'fr':
                setBtnData({
                    icon: <FranceIcon />,
                    title: 'Français',
                });
                break;
            case 'tr':
                setBtnData({
                    icon: <TurkeyIcon />,
                    title: 'Türk dili',
                });
                break;

            default:
                console.log('error');
        }
    }, [otherStore.lang]);

    const {title, icon} = btnData;
    return (
        <View style={{flex: 1}}>
            <Header titleKey={'settings_draws'} />

            <View style={contentContainerStyles.container}>
                <BG_GRADIENT />
                <SpoilerBlock
                    defaultIsOpen={true}
                    title={title}
                    icon={icon}
                    content={<LangContent />}
                />
                <CityBlock />
            </View>
        </View>
    );
});
