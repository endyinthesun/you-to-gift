//modules
import React, {useState} from 'react';
import {Pressable, Text, View} from 'react-native';

//SVGs
import StarIcon from '_icons/bottom-bar/star.svg';
import StarIconActive from '_icons/bottom-bar/star-active.svg';
import ClockIcon from '_icons/clock.svg';

//styles
import {styles} from './styles';
import {RAFFLE_ITEM_GRADIENT} from '_styles/global';

export default function BottomRaffleItem({date, budget}) {
    const [isFavorites, setIsFavorites] = useState(false);
    return (
        <View style={styles.container}>
            <View style={styles.left}>
                <Pressable onPress={() => setIsFavorites(!isFavorites)}>
                    {isFavorites ? (
                        <StarIcon />
                    ) : (
                        <StarIconActive width={26} height={24} />
                    )}
                </Pressable>
                <View style={styles.date}>
                    <ClockIcon />
                    <Text style={styles.dateText}>{date}</Text>
                </View>
            </View>
            <View style={styles.right}>
                <Text style={styles.budget}>{budget}</Text>
                <Text style={styles.currency}> ₽</Text>
            </View>
        </View>
    );
}
