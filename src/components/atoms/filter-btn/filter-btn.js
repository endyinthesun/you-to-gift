//modules
import React from 'react';
import {Pressable, Text, View} from 'react-native';

//styles
import {styles} from './styles';
import {useTranslation} from 'react-i18next';

export default function FilterBtn({title = null, amount = null, showResults}) {
  const [t] = useTranslation('modal_filter_screen');
  return (
    <Pressable style={styles.containerBtn} onPress={() => showResults()}>
      <View style={styles.btn}>
        <Text style={styles.title}>{t(title)}</Text>
        <Text style={styles.amount}> {amount}</Text>
      </View>
    </Pressable>
  );
}
