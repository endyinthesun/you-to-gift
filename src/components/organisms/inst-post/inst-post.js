//modules
import React, {useState, useEffect} from 'react';
import {View, Image, Text, ActivityIndicator} from 'react-native';

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

export default function InstPost({postUrl, userName, userAva}) {
    const [imgUrl, setImgUrl] = useState();
    const formatUserName =
        userName.length >= 10 ? `${userName.slice(0, 10)}...` : userName;

    useEffect(() => {
        let cancel = () => {};
        if (postUrl) {
            _postImage(
                {
                    url: postUrl,
                },
                {
                    cancelToken: new axios.CancelToken(c => {
                        cancel = c;
                    }),
                }
            )
                .then(res => {
                    setImgUrl(res.data.result);
                })
                .catch(rej => {
                    console.log('rej-- ', rej);
                });
        }
        return () => {
            cancel();
        };
    }, [postUrl]);

    return (
        <View style={styles.instContainer}>
            <View style={styles.instHeader}>
                <View style={styles.instHeaderPart}>
                    <UserAva size={36} imageUrl={userAva} />
                    <Text>{formatUserName}</Text>
                </View>
                <View style={styles.instHeaderPart}>
                    <InstIcon style={styles.instIcon} />
                    <InstTitleIcon style={styles.instTitleIcon} />
                </View>
            </View>
            <View style={styles.imageWrapper}>
                {imgUrl ? (
                    <Image
                        source={{
                            uri: imgUrl,
                        }}
                        style={styles.image}
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
