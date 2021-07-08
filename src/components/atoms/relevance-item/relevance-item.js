//modules
import React from 'react';
import {Text, Pressable} from 'react-native';

//SVGs
import CheckMark from '_icons/relevance/check-mark.svg';
import Arrows from '_icons/relevance/arrows.svg';

//styles
import {generateStyles} from '_atoms/relevance-item/styles';

export default function RelevanceItem({name, title, isActive, onPress}) {
    const styles = generateStyles(isActive);
    const capitalizeTitle = title
        ? title.charAt(0).toUpperCase() + title.slice(1)
        : null;
    return (
        <Pressable style={styles.item} onPress={() => onPress(name)}>
            {title ? (
                <Text style={styles.itemTitle}>{capitalizeTitle}</Text>
            ) : null}
            {isActive ? <CheckMark /> : <Arrows />}
        </Pressable>
    );
}
