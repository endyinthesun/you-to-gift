//modules
import React, {useState, useEffect} from 'react';
import {View, Image, Text, ActivityIndicator, StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';

//SVGs
import InstIcon from '_icons/categories/inst.svg';
import InstTitleIcon from '_icons/inst-title.svg';

//components
import {UserAva} from '_atoms/index';

//services
import {_postImage} from '_services/service';

//styles
import {styles} from './styles';
import axios from 'axios';

export default function InstPost({postImgUrl, userName, userAvaImgUrl}) {
  const [imgUrl, setImgUrl] = useState();
  const [onLoad, setOnLoad] = useState(false);
  const formatUserName =
    userName.length >= 10 ? `${userName.slice(0, 10)}...` : userName;

  const preload = imgUrl => {
    FastImage.preload([{uri: imgUrl}]);
  };

  useEffect(() => {
    let cancel = () => {};
    _postImage(
      {
        url: postImgUrl,
      },
      {
        cancelToken: new axios.CancelToken(c => {
          cancel = c;
        }),
      },
    )
      .then(res => {
        setImgUrl(res.data.result);
        preload(res.data.result);
        setOnLoad(true);
      })
      .catch(rej => {
        console.log('rej-- ', rej);
      });
    return () => {
      cancel();
    };
  }, []);

  return (
    <View style={styles.instContainer}>
      <View style={styles.instHeader}>
        <View style={styles.instHeaderPart}>
          <UserAva size={36} imageUrl={userAvaImgUrl} />
          <Text>{formatUserName}</Text>
        </View>
        <View style={styles.instHeaderPart}>
          <InstIcon style={styles.instIcon} />
          <InstTitleIcon style={styles.instTitleIcon} />
        </View>
      </View>
      <View style={styles.imageWrapper}>
        {onLoad ? (
          <FastImage
            source={{
              uri: imgUrl,
            }}
            style={styles.image}
            resizeMode={FastImage.resizeMode.contain}
          />
        ) : (
          <View style={styles.spinnerContainer}>
            <ActivityIndicator size={'large'} />
          </View>
        )}
      </View>
    </View>
  );
}
