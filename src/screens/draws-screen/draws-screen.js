//modules
import React, {useEffect, useState} from 'react';
import {FlatList, View, ActivityIndicator} from 'react-native';
import moment from 'moment';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';

//components
import {Header, DrawItem} from '_organisms/index';

//service
import {_draws} from '_services/service';

//styles
import {styles} from './styles';
import {BG_GRADIENT} from '_styles/gradients';

//store
import bottomTab from '_store/bottom-tab';

export default function DrawsScreen({route, navigation}) {
    const [drawsData, setDrawsData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const tabBarHeight = useBottomTabBarHeight();
    const convertTime = date => moment(`${date} +03:00`, 'DD-MM-YYYY HH:mm ZZ');
    useEffect(() => {
        _draws().then(({data: {results}}) => {
            const items = results.map(
                ({
                    id,
                    all_price,
                    date_end,
                    get_type,
                    chanel: {image, subscribe, url, title, verificated},
                    valute: {symbol},
                }) => {
                    const dateEnd = convertTime(date_end).format('YYYY-MM-DD');
                    const timeEnd = convertTime(date_end).format('HH:mm');

                    return {
                        id,
                        all_price,
                        dateEnd,
                        timeEnd,
                        get_type,
                        chanel: {image, subscribe, url, title, verificated},
                        valute: {symbol},
                    };
                }
            );
            setDrawsData(items);
            setIsLoading(false);
        });
    }, []);

    return (
        <View style={{flex: 1}}>
            <Header
                titleKey={'actual_draws'}
                actualDraws={'Saint-Petersburg'}
                iconType={'filter'}
                onPress={() => {
                    navigation.navigate('Settings');
                    bottomTab.setBottomTabIndex(2);
                }}
            />
            <View style={{flex: 1, justifyContent: 'center'}}>
                <BG_GRADIENT />
                {isLoading ? (
                    <ActivityIndicator
                        size={'large'}
                        color={'white'}
                        style={{marginTop: -tabBarHeight}}
                    />
                ) : (
                    <FlatList
                        keyExtractor={item => item.id.toString()}
                        data={drawsData}
                        renderItem={({
                            item: {
                                id,
                                all_price,
                                dateEnd,
                                timeEnd,
                                get_type,
                                chanel: {
                                    image,
                                    subscribe,
                                    url,
                                    title,
                                    verificated,
                                },
                                valute: {symbol},
                            },
                        }) => (
                            <DrawItem
                                imageUrl={image}
                                userName={title}
                                amountSubs={subscribe}
                                type={get_type}
                                dateEnd={dateEnd}
                                timeEnd={timeEnd}
                                budget={all_price}
                                currency={symbol}
                                id={id}
                                navigation={navigation}
                            />
                        )}
                        contentContainerStyle={styles.flatListContainer}
                    />
                )}
            </View>
        </View>
    );
}
