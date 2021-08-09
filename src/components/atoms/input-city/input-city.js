//modules
import React, {useState} from 'react';
import {TextInput, View} from 'react-native';

//styles
import {styles} from './styles';

export default function InputCity() {
  const [city, setCity] = useState('');
  return (
    <View>
      <TextInput
        onChangeText={setCity}
        value={city}
        style={styles.inputContainer}
      />
    </View>
  );
}
