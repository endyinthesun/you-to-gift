//modules
import React, {useCallback} from 'react';
import {BackHandler, Platform, View} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';

//SVGs
import InstIcon from '_icons/auth/inst.svg';
import FacebookIcon from '_icons/auth/facebook.svg';
import SignOut from '_icons/auth/sign-out.svg';

//components
import {Header} from '_organisms/index';
import {AuthBtn} from '_atoms/index';

//styles
import {contentContainerStyles} from '_styles/content-container';
import {BG_GRADIENT} from '_styles/gradients';

//store
import {useStores} from '_store/index';

export default function ProfileScreen({navigation}) {
  //global states
  const {bottomTabBarStore} = useStores();
  const {setTabBarPosition} = bottomTabBarStore;
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
      <Header titleKey={'account_authorization'} bold={'first'} />
      <View style={contentContainerStyles.container}>
        <BG_GRADIENT />
        <AuthBtn icon={<InstIcon />} titleKey={'sign_in_instagram'} />
        <AuthBtn icon={<FacebookIcon />} titleKey={'sign_in_facebook'} />
        <AuthBtn icon={<SignOut />} titleKey={'sign_out'} />
      </View>
    </View>
  );
}
