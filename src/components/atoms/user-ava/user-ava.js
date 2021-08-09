//modules
import React, {useState} from 'react';
import {Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';

//styles
import {generateStyles} from './styles';
import {ITEM_GRADIENT} from '_styles/gradients';

export default function UserAva({size, imageUrl}) {
  const styles = generateStyles(size);
  const [noImage, setNoImage] = useState(false);

  return (
    <View style={styles.userAvaContainer}>
      <ITEM_GRADIENT
        absoluteFill
        colors={['#FFC107', '#F44336', '#9C27B0']}
        locations={[0, 0.2, 1]}
      />
      <FastImage
        style={styles.userAva}
        source={{
          uri: imageUrl,
          priority: FastImage.priority.high,
        }}
        onError={() => setNoImage(true)}
      />
      {noImage ? (
        <View style={styles.noImageContainer}>
          <Text style={styles.noImageText}>No</Text>
          <Text style={styles.noImageText}>image</Text>
        </View>
      ) : null}
    </View>
  );
}
