//modules
import React, {useState} from 'react';
import {Text, View} from 'react-native';

//SVGs
import InstIcon from '_icons/categories/inst.svg';
import InstActiveIcon from '_icons/categories/inst-active.svg';

import LikeIcon from '_icons/categories/like.svg';
import LikeActiveIcon from '_icons/categories/like-active.svg';

import GiveIcon from '_icons/categories/give.svg';
import GiveActiveIcon from '_icons/categories/give-active.svg';

//components
import {CategoryItem} from '_atoms/index';

//styles
import {styles} from './styles';

export default function Categories() {
    const [category, setCategory] = useState('');
    const categoriesData = [
        {
            name: 'all',
            title: 'все',
            key: 1,
        },
        {
            name: 'inst',
            icon: <InstIcon />,
            activeIcon: <InstActiveIcon />,
            key: 2,
        },
        {
            name: 'like',
            icon: <LikeIcon />,
            activeIcon: <LikeActiveIcon />,
            key: 3,
        },
        {
            name: 'give',
            icon: <GiveIcon />,
            activeIcon: <GiveActiveIcon />,
            key: 4,
        },
    ];
    return (
        <View>
            <Text style={styles.headTitle}>Категория</Text>
            <View style={styles.itemsContainer}>
                {categoriesData.map(props => {
                    const isActive = props.name === category;
                    return (
                        <CategoryItem
                            {...props}
                            isActive={isActive}
                            onPress={setCategory}
                        />
                    );
                })}
            </View>
            <View style={styles.divider} />
        </View>
    );
}
