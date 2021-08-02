//modules
import React from 'react';
import {Pressable, Text, View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {useTranslation} from 'react-i18next';

//SVGs
import InstIcon from '_icons/categories/inst.svg';
import InstActiveIcon from '_icons/categories/inst-active.svg';

import LikeIcon from '_icons/categories/like.svg';
import LikeActiveIcon from '_icons/categories/like-active.svg';

import GiveIcon from '_icons/categories/give.svg';
import GiveActiveIcon from '_icons/categories/give-active.svg';

//styles
import {styles} from './styles';

export default function Categories({
  currentCategory,
  setCurrentCategory,
  stylesValue: {transparentColor, whiteColor, borderWidth, fontColor},
}) {
  const [t] = useTranslation('modal_filter_screen');

  const iconSize = EStyleSheet.value('33rem');

  const categoriesData = [
    {
      name: 'all',
      title: t('all'),
      key: 1,
    },
    {
      name: 'standard',
      icon: <InstIcon width={iconSize} height={iconSize} />,
      activeIcon: <InstActiveIcon width={iconSize} height={iconSize} />,
      key: 2,
    },
    {
      name: 'liketime',
      icon: <LikeIcon width={iconSize} height={iconSize} />,
      activeIcon: <LikeActiveIcon width={iconSize} height={iconSize} />,
      key: 3,
    },
    {
      name: 'give',
      icon: <GiveIcon width={iconSize} height={EStyleSheet.value('29rem')} />,
      activeIcon: (
        <GiveActiveIcon width={iconSize} height={EStyleSheet.value('29rem')} />
      ),
      key: 4,
    },
  ];

  return (
    <View>
      <Text style={styles.headTitle}>{t('category')}</Text>
      <View style={styles.itemsContainer}>
        {categoriesData.map(({name, title, icon, activeIcon, key}) => {
          const isActive = name === currentCategory;
          const iconEl = isActive ? activeIcon : icon;

          return (
            <Pressable
              key={key}
              style={[
                styles.item,
                {
                  borderWidth: isActive ? borderWidth : 0,
                  backgroundColor: isActive ? transparentColor : whiteColor,
                },
              ]}
              onPress={() => setCurrentCategory(name)}>
              {icon ? iconEl : null}
              {title ? (
                <Text
                  style={[
                    styles.itemTitle,
                    {
                      color: isActive ? whiteColor : fontColor,
                    },
                  ]}>
                  {title}
                </Text>
              ) : null}
            </Pressable>
          );
        })}
      </View>
      <View style={styles.divider} />
    </View>
  );
}
