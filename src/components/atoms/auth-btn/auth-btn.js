//modules
import React from 'react';
import {Pressable, Text} from 'react-native';
import {useTranslation} from 'react-i18next';

//SVGs
import ArrowsIcon from '_icons/relevance/arrows.svg';

//styles
import {styles} from './styles';

// eslint-disable-next-line react/prop-types
export default function AuthBtn({icon, titleKey}) {
  const [t] = useTranslation('profile_screen');
  return (
    <Pressable style={styles.btnContainer}>
      {icon}
      <Text style={styles.btnTitle}>{t(titleKey)}</Text>
      <ArrowsIcon />
    </Pressable>
  );
}
