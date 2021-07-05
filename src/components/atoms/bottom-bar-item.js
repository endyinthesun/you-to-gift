//modules
import React, {useRef, useEffect} from 'react';
import {StyleSheet, Easing, Animated, Pressable} from 'react-native';

//styles
import {SECONDARY, WHITE} from '_styles/colors';

export default function BottomBarItem({isFocused, options, onPress}) {
    const menuItemTranslateY = useRef(new Animated.Value(0)).current;

    const {icon, iconActive} = options;
    const Icon = isFocused ? iconActive : icon;
    const menuItemTranslateYConf = {
        duration: 150,
        toValue: isFocused ? -35 : 0,
        easing: Easing.inOut(Easing.ease),
        useNativeDriver: true,
    };

    useEffect(() => {
        Animated.timing(menuItemTranslateY, menuItemTranslateYConf).start();
    }, [isFocused]);
    return (
        <Animated.View
            style={[
                styles.tabItemContainer,
                {
                    marginTop: isFocused ? 0 : 11,
                    transform: [{translateY: menuItemTranslateY}],
                },
            ]}>
            <Pressable
                style={[
                    styles.tabItem,
                    {
                        backgroundColor: isFocused ? WHITE : SECONDARY,
                        width: isFocused ? 70 : 55,
                        height: isFocused ? 70 : 55,
                        borderRadius: 100,
                    },
                ]}
                onPress={onPress}>
                {Icon}
            </Pressable>
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    tabItemContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    tabItem: {
        alignItems: 'center',
        justifyContent: 'center',
    },
});
