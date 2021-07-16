//modules
import React from 'react';
import {View} from 'react-native';
import Collapsible from 'react-native-collapsible';

//styles
import {styles} from './styles';

export default function SpoilerContent({isOpen, content}) {
    return (
        <Collapsible collapsed={!isOpen}>
            <View style={styles.container}>{content}</View>
        </Collapsible>
    );
}
