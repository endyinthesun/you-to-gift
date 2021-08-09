//modules
import React, {useState} from 'react';
import {View} from 'react-native';

//components
import {FindField} from '_molecules/index';

//styles
import {styles} from './styles';

export default function FindParticipant({}) {
  const [username, setUsername] = useState('');
  return (
    <View style={styles.findContainer}>
      <FindField username={username} setUsername={setUsername} />
      <View style={{marginTop: 20}}>
        <View />
      </View>
    </View>
  );
}
