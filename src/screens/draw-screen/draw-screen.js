//modules
import React, {useEffect, useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import {useTranslation} from 'react-i18next';
import SafeAreaView from 'react-native-safe-area-view';
import EStyleSheet from 'react-native-extended-stylesheet';

//components
import {AddFavoriteBtn, Budget} from '_atoms/index';
import {TopDrawItem} from '_molecules/index';
import {Header, InstPost, SpoilerBlock} from '_organisms/index';

//services
import {_draw} from '_services/service';

//SVGs
import ClockIcon from '_icons/clock-gray.svg';
import CalendarIcon from '_icons/calendar.svg';

//styles
import {styles} from './styles';
import {contentContainerStyles} from '_styles/content-container';
import {BG_GRADIENT, DRAW_ITEM_GRADIENT} from '_styles/gradients';

export default function DrawScreen({route, navigation}) {
    const [t] = useTranslation('draw_screen');
    const [itemData, setItemData] = useState({});
    const {id, imageUrl, userName, amountSubs, type, formatBudget, currency} =
        route.params;

    useEffect(() => {
        _draw(id).then(({data}) => {
            const {image} = data.chanel;
        });
    }, []);
    return (
        <SafeAreaView
            style={{flex: 1, backgroundColor: 'white'}}
            forceInset={{
                top: 'always',
                bottom: 'never',
            }}>
            <Header
                titleKey={'draw'}
                iconType={'back'}
                screenDraw={id}
                onPress={() => navigation.goBack()}
            />

            <View style={{flex: 1}}>
                <BG_GRADIENT />
                <ScrollView style={{flex: 1}}>
                    <View style={contentContainerStyles.container}>
                        <View style={styles.post}>
                            <View style={styles.info}>
                                <TopDrawItem
                                    imageUrl={imageUrl}
                                    userName={userName}
                                    amountSubs={amountSubs}
                                    type={type}
                                    sizeIcon={35}
                                    sizeUserAva={54}
                                />
                                <Budget
                                    number={formatBudget}
                                    currency={currency}
                                    fontSize={40}
                                />
                                <DRAW_ITEM_GRADIENT fillBottom height={4} />
                            </View>
                            <View style={styles.details}>
                                <View>
                                    <Text style={styles.detailsActual}>
                                        {t('draw_valid_until')}
                                    </Text>
                                </View>
                                <View style={styles.timeInfo}>
                                    <View style={styles.detailsTime}>
                                        <CalendarIcon />
                                        <Text style={styles.detailsTimeText}>
                                            {/*{date}*/}
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
                                    <AddFavoriteBtn id={id} />
                                </View>
                                {/*<InstPost />*/}
                            </View>
                        </View>
                        <View style={styles.rewards}>
                            <SpoilerBlock
                                defaultIsOpen={false}
                                title={t('show_rewards_competition')}
                                stylesBtn={styles.spoilerBtn}
                            />
                        </View>
                        <View style={styles.rewards}>
                            <SpoilerBlock
                                defaultIsOpen={false}
                                title={t('show_conditions')}
                                stylesBtn={styles.spoilerBtn}
                            />
                        </View>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}
