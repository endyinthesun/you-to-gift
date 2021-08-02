//modules
import React, {useState} from 'react';
import {View} from 'react-native';
import Collapsible from 'react-native-collapsible';

//components
import {SpoilerBtn} from '_molecules/index';

export default function SpoilerBlock({
    defaultIsOpen,
    title,
    icon,
    content,
    stylesBtn,
}) {
    const [isOpen, toggleIsOpen] = useState(defaultIsOpen);
    return (
        <View>
            <SpoilerBtn
                toggleIsOpen={toggleIsOpen}
                isOpen={isOpen}
                title={title}
                icon={icon}
                stylesBtn={stylesBtn}
            />
            <View>
                <Collapsible collapsed={!isOpen}>{content}</Collapsible>
            </View>
        </View>
    );
}
