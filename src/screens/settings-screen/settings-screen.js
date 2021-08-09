//modules
import React, {useState, useEffect, useCallback} from 'react';
import {BackHandler, Platform, View} from 'react-native';
import {observer} from 'mobx-react-lite';
import {useFocusEffect} from '@react-navigation/native';

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

//store
import {useStores} from '_store/index';

//async storage
import {getLang} from '_services/async-storage';

//styles
import {contentContainerStyles} from '_styles/content-container';
import {BG_GRADIENT} from '_styles/gradients';

function SettingsScreen({navigation}) {
  const {langStore, bottomTabBarStore} = useStores();
  const {setTabBarPosition} = bottomTabBarStore;

  const [btnData, setBtnData] = useState({
    title: null,
    icon: null,
  });

  useEffect(() => {
    getLang().then(res => {
      switch (res) {
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
        case 'uk':
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
          setBtnData({
            icon: <RussianIcon />,
            title: 'Русский язык',
          });
      }
    });
  }, [langStore.lang]);

  const {title, icon} = btnData;

  useFocusEffect(
    useCallback(() => {
      if (Platform.OS === 'ios') return;
      const onBackPress = () => {
        navigation.navigate('DrawsItems');
        setTabBarPosition(0);
        return true;
      };
      BackHandler.addEventListener('hardwareBackPress', onBackPress);
      return () =>
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, []),
  );
  return (
    <View style={{flex: 1}}>
      <Header titleKey={'settings_draws'} bold={'first'} />
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
}

export default observer(SettingsScreen);
