//modules
import React from 'react';
import {Text, View} from 'react-native';
import {useTranslation} from 'react-i18next';

//components
import {InputCity} from '_atoms/index';

//styles
import {styles} from './styles';

export default function CityBlock() {
  const [t] = useTranslation('settings_screen');
  return (
    <View style={styles.container}>
      <Text style={{textTransform: 'uppercase', color: 'white'}}>
        {t('enter_your_city')}
      </Text>
      <InputCity />
    </View>
  );
}
