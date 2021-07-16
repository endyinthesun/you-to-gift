//modules
import React, {useState} from 'react';
import {View} from 'react-native';

//components
import {SpoilerContent, SpoilerBtn} from '_molecules/index';

//styles
import {styles} from './styles';

export default function SpoilerBlock({
    defaultIsOpen,
    title,
    icon,
    content,
    stylesBtn,
}) {
    const [isOpen, toggleIsOpen] = useState(defaultIsOpen);
    return (
        <View style={styles.container}>
            <SpoilerBtn
                toggleIsOpen={toggleIsOpen}
                isOpen={isOpen}
                title={title}
                icon={icon}
                stylesBtn={stylesBtn}
            />
            <SpoilerContent isOpen={isOpen} content={content} />
        </View>
    );
}
