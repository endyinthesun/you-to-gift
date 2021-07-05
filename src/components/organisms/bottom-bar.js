import React, {useState, useRef} from 'react'
import {
    StyleSheet,
    View,
    Animated,
    Easing,
    useWindowDimensions,
} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import {SECONDARY, WHITE} from '_styles/colors'

//SVGs
import MenuLong from '_icons/bottom-bar/menu-long.svg'
import {PADDING_HORIZONTAL_TAB_MENU} from '_styles/spacing'
import BottomBarItem from '_atoms/bottom-bar-item'

export default function BottomBar({state, descriptors, navigation}) {
    const {Value, timing} = Animated
    const windowWidth = useWindowDimensions().width
    const widthRoute =
        (windowWidth - PADDING_HORIZONTAL_TAB_MENU * 2) / state.routes.length
    const startPosition = widthRoute / 2 + PADDING_HORIZONTAL_TAB_MENU - 433

    //animation value
    const menuTranslateX = useRef(new Value(startPosition)).current

    const items = state.routes.map((route, index) => {
        const {options} = descriptors[route.key]
        const isFocused = state.index === index
        const onPress = () => {
            const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
            })

            const position =
                widthRoute * index +
                widthRoute / 2 +
                PADDING_HORIZONTAL_TAB_MENU -
                433
            const menuTranslateXConf = {
                duration: 200,
                toValue: position,
                easing: Easing.inOut(Easing.ease),
                useNativeDriver: true,
            }

            if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name)
                timing(menuTranslateX, menuTranslateXConf).start()
            }
        }

        return (
            <BottomBarItem
                isFocused={isFocused}
                options={options}
                onPress={() => onPress()}
                key={index}
            />
        )
    })
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
    )
}

const styles = StyleSheet.create({
    navContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        height: 77,
    },
    nav: {
        height: 78,
        paddingHorizontal: PADDING_HORIZONTAL_TAB_MENU,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
})
