//modules
import React from 'react';
import {TextInput, View} from 'react-native';
import {useTranslation} from 'react-i18next';

//SVGs
import SearchIcon from '_icons/search.svg';

//styles
import {styles} from './styles';

export default function FindField({username, setUsername}) {
  const [t] = useTranslation('find_number_screen');

  return (
    <View style={styles.fieldContainer}>
      <TextInput
        placeholderTextColor={'rgba(255,255,255, 0.6)'}
        style={styles.input}
        onChangeText={setUsername}
        value={username}
        placeholder={t('enter_your_instagram_login')}
        keyboardType="numeric"
        maxLength={30}
      />
      <View style={styles.searchBtn}>
        <SearchIcon style={styles.searchIcon} />
      </View>
    </View>
  );
}
