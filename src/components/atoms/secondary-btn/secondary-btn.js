//modules
import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';

//styles
import {styles} from './styles';

export default function SecondaryBtn({icon, title, gradient, onPress}) {
  return (
    <TouchableOpacity onPress={() => onPress()} style={styles.containerBtn}>
      <View style={styles.iconContainer}>{icon}</View>
      <Text style={styles.title}>{title}</Text>
      {gradient}
    </TouchableOpacity>
  );
}
