//modules
import React, {useRef, useEffect, useState} from 'react';
import {View, Animated, Easing, useWindowDimensions} from 'react-native';
import {observer} from 'mobx-react-lite';

//SVGs
import MenuLong from '_icons/bottom-bar/menu-long.svg';
import BottomBarItem from '_atoms/bottom-bar-item';

//style
import {PADDING_HORIZONTAL_TAB_MENU} from '_styles/global';
import {styles} from './styles';

//store
import {otherStore} from '_store/index';

export default observer(function BottomBar({state, descriptors, navigation}) {
    const [stateIndex, setStateIndex] = useState(0);
    const windowWidth = useWindowDimensions().width;
    const widthRoute =
        (windowWidth - PADDING_HORIZONTAL_TAB_MENU * 2) / state.routes.length;
    const startPosition = widthRoute / 2 + PADDING_HORIZONTAL_TAB_MENU - 433;

    //animation value
    const menuTranslateX = useRef(new Animated.Value(startPosition)).current;
    const items = state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const isFocused = state.index === index;
        const onPress = () => {
            const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
            });
            otherStore.setBottomTabIndex(index);
            if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name);
            }
        };

        return (
            <BottomBarItem
                isFocused={isFocused}
                options={options}
                onPress={() => onPress()}
                key={index}
            />
        );
    });
    useEffect(() => {
        const position =
            widthRoute * otherStore.bottomTabIndex +
            widthRoute / 2 +
            PADDING_HORIZONTAL_TAB_MENU -
            433;
        const menuTranslateXConf = {
            duration: 200,
            toValue: position,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: true,
        };
        Animated.timing(menuTranslateX, menuTranslateXConf).start();
    }, [otherStore.bottomTabIndex]);
    return (
        <View style={styles.navContainer}>
            <View style={[styles.nav, {width: windowWidth}]}>
                <Animated.View
                    style={{
                        position: 'absolute',
                        transform: [
                            {
                                translateX: menuTranslateX,
                            },
                        ],
                    }}>
                    <MenuLong />
                </Animated.View>
                {items}
            </View>
        </View>
    );
});
