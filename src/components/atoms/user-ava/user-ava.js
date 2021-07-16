//modules
import React, {useEffect, useState} from 'react';
import {Text, View, Image} from 'react-native';
import axios from 'axios';

//styles
import {generateStyles} from './styles';
import {DRAW_ITEM_GRADIENT} from '_styles/gradients';

export default function UserAva({size, imageUrl}) {
    const styles = generateStyles(size);

    const [noImage, setNoImage] = useState(false);

    useEffect(() => {
        axios.get(imageUrl).catch(() => {
            setNoImage(true);
        });
    }, []);
    return (
        <View style={styles.userAvaContainer}>
            <DRAW_ITEM_GRADIENT absoluteFill />
            <View style={styles.userAva}>
                {noImage ? (
                    <View style={styles.noImageContainer}>
                        <Text style={styles.noImageText}>No</Text>
                        <Text style={styles.noImageText}>image</Text>
                    </View>
                ) : (
                    <Image
                        style={{flex: 1}}
                        source={{
                            uri: imageUrl,
                        }}
                    />
                )}
            </View>
        </View>
    );
}
