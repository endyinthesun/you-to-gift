//modules
import React from 'react';
import {Text, View, Pressable} from 'react-native';
import {useTranslation} from 'react-i18next';

//SVGs
import FilterIcon from '_icons/filter.svg';
import BackIcon from '_icons/back.svg';

//styles
import {styles} from './styles';

// actualDraws - two text block in column, one of them - link (true, false)
// screenDraw - two text block in row, second block with bold font style
// iconType = 'back', 'filter'

export default function Header({
  titleKey,
  amountDraw = false,
  actualFor = false,
  iconType,
  onPress,
  bold = 'all',
}) {
  const {t, i18n} = useTranslation('header');

  const boldIsFirst = bold === 'first';
  const boldIsLast = bold === 'last';
  const boldIsAll = bold === 'all';

  const withBtn = iconType && onPress;

  const amountDrawText = amountDraw
    ? i18n.language === 'en'
      ? ` #${amountDraw}`
      : ` №${amountDraw}`
    : '';
  const translatedText = t(titleKey) + amountDrawText;
  const translatedTextArr = translatedText.split(' ');

  const left = boldIsFirst ? (
    <Text style={[styles.headerTitle, styles.headerTitleBold]}>
      {`${translatedTextArr[0]} `}
    </Text>
  ) : boldIsLast ? (
    <Text style={[styles.headerTitle, styles.headerTitleMedium]}>
      {translatedTextArr.slice(0, translatedTextArr.length - 1).join(' ')}
    </Text>
  ) : null;
  const right = boldIsFirst ? (
    <Text style={[styles.headerTitle, styles.headerTitleMedium]}>
      {translatedTextArr.slice(1, translatedTextArr.length).join(' ')}
    </Text>
  ) : boldIsLast ? (
    <Text style={[styles.headerTitle, styles.headerTitleBold]}>
      {` ${translatedTextArr[translatedTextArr.length - 1]}`}
    </Text>
  ) : null;

  const titleContent =
    translatedTextArr.length === 1 || boldIsAll ? (
      <View>
        <Text style={[styles.headerTitle, styles.headerTitleBold]}>
          {translatedText}
        </Text>
      </View>
    ) : (
      <View style={{flexDirection: 'row'}}>
        {left}
        {right}
      </View>
    );

  const icon =
    iconType === 'back' ? (
      <BackIcon />
    ) : iconType === 'filter' ? (
      <FilterIcon />
    ) : null;
  return (
    <View
      style={[
        styles.headerContainer,
        {justifyContent: withBtn ? 'space-between' : 'center'},
      ]}>
      <View style={{flexDirection: actualFor ? 'column' : 'row'}}>
        {titleContent}
        {actualFor ? (
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.headerTitlePreLink}>{t('for')} </Text>
            <Text style={styles.headerTitleLink}>{actualFor}</Text>
          </View>
        ) : null}
      </View>
      {withBtn ? (
        <Pressable style={styles.btn} onPress={onPress}>
          {icon}
        </Pressable>
      ) : null}
    </View>
  );
}
