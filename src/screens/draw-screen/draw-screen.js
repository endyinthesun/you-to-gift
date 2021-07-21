//modules
import React, {useEffect, useState} from 'react';
import {Modal, ScrollView, Text, View} from 'react-native';
import {useTranslation} from 'react-i18next';
import SafeAreaView from 'react-native-safe-area-view';

//components
import {
    AddFavoriteBtn,
    Budget,
    Conditions,
    RewardsItem,
    SecondaryBtn,
} from '_atoms/index';
import {TopDrawItem} from '_molecules/index';
import {Header, InstPost, SpoilerBlock} from '_organisms/index';

//screens
import ModalInfoScreen from '_screens/modal-info-screen/modal-info-screen';

//services
import {_draw, _excelLink} from '_services/service';

//SVGs
import ClockIcon from '_icons/clock-gray.svg';
import CalendarIcon from '_icons/calendar.svg';
import SearchIcon from '_icons/search.svg';
import ExcelIcon from '_icons/excel.svg';

//styles
import {styles} from './styles';
import {contentContainerStyles} from '_styles/content-container';
import {BG_GRADIENT, ITEM_GRADIENT} from '_styles/gradients';

export default function DrawScreen({route, navigation}) {
    const [t] = useTranslation('draw_screen');

    const [modalInfoVisible, setModalInfoVisible] = useState(false);

    //item data
    const [itemData, setItemData] = useState({
        rewards: [],
        competition: '',
        userAmount: null,
        postUrl: null,
        endTimeMSK: '',
    });

    const {
        id,
        imageUrl,
        userName,
        amountSubs,
        type,
        formatBudget,
        currency,
        dateEnd,
        timeEnd,
    } = route.params;

    // console.log('date end --- ', dateEnd);
    // console.log('moment--- ', );
    useEffect(() => {
        _draw(id).then(({data}) => {
            // console.log('data-- ', data);
            const rewards = data.reward.map(
                ({get_type, name, level, price, valute}) => ({
                    get_type,
                    name,
                    level,
                    price,
                    valute: {symbol: valute.symbol, name: valute.name},
                })
            );
            const competition = {
                additionally: data.additionally,
                country: data.get_county,
                city: data.get_city,
            };
            setItemData({
                rewards: rewards,
                competition: competition,
                userAmount: data.user,
                postUrl: data.instagram_record[0].data.data.url,
                endTimeMSK: data.date_end,
            });
        });
    }, []);

    const rewardsContent = itemData.rewards.map(props => (
        <RewardsItem {...props} key={props.level} />
    ));

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
                            <View style={styles.channel}>
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
                                <ITEM_GRADIENT
                                    fillBottom
                                    height={4}
                                    colors={['#FFC107', '#F44336', '#9C27B0']}
                                    locations={[0, 0.2, 1]}
                                />
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
                                            {dateEnd}
                                        </Text>
                                    </View>
                                    <View style={styles.detailsTime}>
                                        <ClockIcon />
                                        <Text style={styles.detailsTimeText}>
                                            {timeEnd}
                                        </Text>
                                    </View>
                                </View>
                                <View style={styles.addFavoriteBtn}>
                                    <AddFavoriteBtn id={id} />
                                </View>
                                <View style={styles.instPost}>
                                    <InstPost
                                        postUrl={itemData.postUrl}
                                        userName={userName}
                                        userAva={imageUrl}
                                    />
                                </View>
                            </View>
                        </View>
                        <View style={styles.spoilers}>
                            <SpoilerBlock
                                defaultIsOpen={false}
                                title={t('show_rewards_competition')}
                                stylesBtn={styles.spoilerBtn}
                                content={rewardsContent}
                            />
                        </View>
                        <View style={styles.spoilers}>
                            <SpoilerBlock
                                defaultIsOpen={false}
                                title={t('show_conditions')}
                                stylesBtn={styles.spoilerBtn}
                                content={
                                    <Conditions
                                        showModalInfo={setModalInfoVisible}
                                        conditionsData={itemData.competition}
                                    />
                                }
                            />
                        </View>
                        <View style={styles.info}>
                            <Text style={styles.infoTitle}>
                                {t('information_about_competition')}
                            </Text>
                            <Text style={styles.infoParticipants}>
                                {t('number_of_participants')}
                                <Text style={styles.participants}>
                                    {' '}
                                    {itemData.userAmount}
                                </Text>
                            </Text>
                            <View style={styles.secondaryBtn}>
                                <SecondaryBtn
                                    icon={
                                        <SearchIcon style={styles.iconSearch} />
                                    }
                                    title={t('find_out_your_number')}
                                    gradient={
                                        <ITEM_GRADIENT
                                            fillBottom
                                            height={7}
                                            colors={['#1DE5E2', '#B588F7']}
                                            locations={[0.1, 0.8]}
                                        />
                                    }
                                />
                            </View>
                            <View style={styles.secondaryBtn}>
                                <SecondaryBtn
                                    icon={
                                        <ExcelIcon style={styles.iconExcel} />
                                    }
                                    title={t('download_excel_file')}
                                    gradient={
                                        <ITEM_GRADIENT
                                            fillBottom
                                            height={7}
                                            colors={['#8BCC8E', '#48A94D']}
                                            locations={[0.1, 0.5]}
                                        />
                                    }
                                    onPress={() => _excelLink(id)}
                                />
                            </View>
                        </View>
                    </View>
                </ScrollView>
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={modalInfoVisible}
                    onRequestClose={() => {
                        setModalInfoVisible(false);
                    }}>
                    <ModalInfoScreen
                        onPress={() => setModalInfoVisible(false)}
                    />
                </Modal>
            </View>
        </SafeAreaView>
    );
}
