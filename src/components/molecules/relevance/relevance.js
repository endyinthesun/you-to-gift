//modules
import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {useTranslation} from 'react-i18next';

//SVGs
import CheckMark from '_icons/relevance/check-mark.svg';
import Arrows from '_icons/relevance/arrows.svg';

//styles
import {styles} from './styles';

export default function Relevance({
  currentRelevance,
  setCurrentRelevance,
  stylesValue: {
    transparentColor,
    whiteColor,
    borderWidth,
    fontColor,
    FONT_ROBOTO_500,
    FONT_ROBOTO_300,
  },
}) {
  const [t] = useTranslation('modal_filter_screen');
  const relevanceData = [
    {
      name: 'all',
      title: t('all'),
      key: 1,
    },
    {
      name: 'active',
      title: t('active'),
      key: 2,
    },
    {
      name: 'waiting',
      title: t('waiting'),
      key: 3,
    },
    {
      name: 'completed',
      title: t('completed'),
      key: 4,
    },
  ];

  return (
    <View style={styles.relevanceContainer}>
      <Text style={styles.headTitle}>{t('relevance')}</Text>
      <View style={styles.itemsContainer}>
        {relevanceData.map(({name, title, key}) => {
          const isActive = name === currentRelevance;
          const capitalizeTitle = title
            ? title.charAt(0).toUpperCase() + title.slice(1)
            : null;

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
              onPress={() => setCurrentRelevance(name)}>
              {title ? (
                <Text
                  style={[
                    styles.itemTitle,
                    {
                      color: isActive ? whiteColor : fontColor,
                      fontFamily: isActive ? FONT_ROBOTO_500 : FONT_ROBOTO_300,
                    },
                  ]}>
                  {capitalizeTitle}
                </Text>
              ) : null}
              {isActive ? <CheckMark /> : <Arrows />}
            </Pressable>
          );
        })}
      </View>
      <View style={styles.divider} />
    </View>
  );
}
