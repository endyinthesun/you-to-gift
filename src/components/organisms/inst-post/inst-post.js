//modules
import React from 'react';
import {View, Image} from 'react-native';

//styles
import {styles} from './styles';

export default function InstPost({}) {
    return (
        <View style={styles.instContainer}>
            <Image
                source={{
                    uri: 'https://reactjs.org/logo-og.png',
                }}
                style={{width: 200, height: 200}}
            />
        </View>
    );
}
