//modules
import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {useTranslation} from 'react-i18next';

//components
import {AddFavoriteBtn, Budget} from '_atoms/index';
import {TopRaffleItem} from '_molecules/index';
import {Header, InstPost} from '_organisms/index';

//SVGs
import ClockIcon from '_icons/clock-gray.svg';
import CalendarIcon from '_icons/calendar.svg';

//styles
import {styles} from './styles';
import {contentContainerStyles} from '_styles/content-container';
import {BG_GRADIENT, RAFFLE_ITEM_GRADIENT} from '_styles/gradients';
import EStyleSheet from 'react-native-extended-stylesheet';

export default function RaffleScreen({route, navigation}) {
    const [t] = useTranslation('raffle_screen');

    const {id, userName, amountSubs, type, date, formatBudget} = route.params;
    return (
        <View style={{flex: 1}}>
            <Header
                titleKey={'raffle'}
                iconType={'back'}
                screenRaffle={id}
                onPress={() => navigation.goBack()}
            />
            <ScrollView style={{flex: 1}}>
                <BG_GRADIENT />
                <View style={contentContainerStyles.container}>
                    <View style={styles.post}>
                        <View style={styles.info}>
                            <TopRaffleItem
                                userName={userName}
                                amountSubs={amountSubs}
                                type={type}
                                sizeIcon={35}
                                sizeUserAva={54}
                            />
                            <Budget
                                number={formatBudget}
                                currency={'₽'}
                                fontSize={40}
                            />
                            <RAFFLE_ITEM_GRADIENT fillBottom height={4} />
                        </View>
                        <View style={styles.details}>
                            <View>
                                <Text style={styles.detailsActual}>
                                    {t('raffle_valid_until')}
                                </Text>
                            </View>
                            <View style={styles.timeInfo}>
                                <View style={styles.detailsTime}>
                                    <CalendarIcon />
                                    <Text style={styles.detailsTimeText}>
                                        {date}
                                    </Text>
                                </View>
                                <View style={styles.detailsTime}>
                                    <ClockIcon />
                                    <Text style={styles.detailsTimeText}>
                                        16:20
                                    </Text>
                                    <Text
                                        style={[
                                            styles.detailsTimeText,
                                            {
                                                fontFamily:
                                                    EStyleSheet.value(
                                                        '$FONT_ROBOTO_300'
                                                    ),
                                            },
                                        ]}>
                                        по МСК
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.addFavoriteBtn}>
                                <AddFavoriteBtn
                                    titleKey={'raffle_valid_until'}
                                />
                            </View>
                            <InstPost />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}
