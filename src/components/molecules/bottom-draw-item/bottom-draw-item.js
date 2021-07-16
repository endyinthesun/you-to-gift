//modules
import React, {useState} from 'react';
import {Pressable, Text, View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

//SVGs
import StarIcon from '_icons/bottom-bar/star.svg';
import StarIconActive from '_icons/bottom-bar/star-active.svg';
import ClockIcon from '_icons/clock.svg';

//styles
import {styles} from './styles';
import {Budget} from '_atoms/index';

export default function BottomDrawItem({date, budget, currency}) {
    const [isFavorites, setIsFavorites] = useState(false);
    return (
        <View style={styles.container}>
            <View style={styles.left}>
                <Pressable onPress={() => setIsFavorites(!isFavorites)}>
                    {isFavorites ? (
                        <StarIcon
                            width={EStyleSheet.value('26rem')}
                            height={EStyleSheet.value('24rem')}
                        />
                    ) : (
                        <StarIconActive
                            width={EStyleSheet.value('26rem')}
                            height={EStyleSheet.value('24rem')}
                        />
                    )}
                </Pressable>
                <View style={styles.date}>
                    <ClockIcon />
                    <Text style={styles.dateText}>{date}</Text>
                </View>
            </View>
            <Budget number={budget} currency={currency} fontSize={24} />
        </View>
    );
}
