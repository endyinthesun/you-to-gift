//modules
import React from 'react';
import {Text, Pressable} from 'react-native';

//styles
import {generateStyles} from '_atoms/category-item/styles';

export default function CategoryItem({
    title,
    name,
    icon,
    activeIcon,
    isActive,
    onPress,
}) {
    const iconEl = isActive ? activeIcon : icon;

    const styles = generateStyles(isActive);
    return (
        <Pressable style={styles.item} onPress={() => onPress(name)}>
            {iconEl ? iconEl : null}
            {title ? <Text style={styles.itemTitle}>{title}</Text> : null}
        </Pressable>
    );
}
