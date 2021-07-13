//modules
import React from 'react';
import {Text, View} from 'react-native';
import {useTranslation} from 'react-i18next';

//components
import {Header} from '_organisms/index';
import {TopRaffleItem} from '_molecules/index';

//SVGs
import InstIcon from '_icons/categories/inst.svg';
import InstIconBg from '_icons/inst-bg.svg';
import LikeIcon from '_icons/categories/like.svg';
import LikeIconBg from '_icons/like-bg.svg';
import GiveIcon from '_icons/categories/give.svg';
import GiveIconBg from '_icons/give-bg.svg';

//styles
import {styles} from './styles';
import {contentContainerStyles} from '_styles/content-container';
import {BG_GRADIENT} from '_styles/global';

export default function RaffleScreen({route, navigation}) {
    const [t] = useTranslation('raffles_screen');

    const {id, userName, amountSubs, type, date, budget} = route.params;

    return (
        <View style={{flex: 1}}>
            <Header
                titleKey={'raffle'}
                iconType={'back'}
                screenRaffle={id}
                onPress={() => navigation.goBack()}
            />
            <View style={{flex: 1}}>
                <BG_GRADIENT />
                <View style={contentContainerStyles.container}>
                    <View style={styles.post}>
                        <View>
                            <TopRaffleItem
                                userName={userName}
                                amountSubs={amountSubs}
                                type={type}
                                sizeIcon={35}
                                sizeUserAva={54}
                            />
                            <View>
                                <Text>{budget}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}
