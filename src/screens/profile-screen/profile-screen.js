//modules
import React from 'react';
import {Text, View} from 'react-native';

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

export default function ProfileScreen({navigation}) {
    return (
        <View style={{flex: 1}}>
            <Header titleKey={'account_authorization'} />
            <View style={contentContainerStyles.container}>
                <BG_GRADIENT />
                <AuthBtn icon={<InstIcon />} titleKey={'sign_in_instagram'} />
                <AuthBtn
                    icon={<FacebookIcon />}
                    titleKey={'sign_in_facebook'}
                />
                <AuthBtn icon={<SignOut />} titleKey={'sign_out'} />
            </View>
        </View>
    );
}
