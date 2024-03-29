//modules
import React, {useEffect} from 'react';
import {View} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {
    createBottomTabNavigator,
    useBottomTabBarHeight,
} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import SafeAreaView from 'react-native-safe-area-view';

//SVGs
import GiftIcon from '_icons/bottom-bar/gift.svg';
import GiftActiveIcon from '_icons/bottom-bar/gift-active.svg';
import StarIcon from '_icons/bottom-bar/star.svg';
import StarActiveIcon from '_icons/bottom-bar/star-active.svg';
import GearIcon from '_icons/bottom-bar/gear.svg';
import GearActiveIcon from '_icons/bottom-bar/gear-active.svg';
import UserIcon from '_icons/bottom-bar/user.svg';
import UserActiveIcon from '_icons/bottom-bar/user-active.svg';

//Screens
import {
    DrawsScreen,
    FavoritesScreen,
    SettingsScreen,
    ProfileScreen,
    DrawScreen,
} from '_screens/index';

//components
import {BottomBar} from '_organisms/index';
import {BG_GRADIENT} from '_styles/gradients';

export default function RootRouter() {
    const TabNav = createBottomTabNavigator();
    const MainStack = createStackNavigator();

    const TabNavScreen = () => (
        <SafeAreaView
            style={{flex: 1, backgroundColor: 'white'}}
            forceInset={{
                bottom: 'always',
                top: 'always',
            }}>
            <View style={{flex: 1}}>
                <TabNav.Navigator
                    sceneContainerStyle={{backgroundColor: 'transparent'}}
                    tabBarOptions={{
                        keyboardHidesTabBar: true,
                        headerShown: false,
                    }}
                    tabBar={props => <BottomBar {...props} />}>
                    <TabNav.Screen
                        name="Draws"
                        component={DrawsScreen}
                        options={{
                            icon: <GiftIcon />,
                            iconActive: <GiftActiveIcon />,
                        }}
                    />
                    <TabNav.Screen
                        name="Favorites"
                        component={FavoritesScreen}
                        options={{
                            icon: <StarIcon width={30} height={28} />,
                            iconActive: (
                                <StarActiveIcon width={30} height={28} />
                            ),
                        }}
                    />
                    <TabNav.Screen
                        name="Settings"
                        component={SettingsScreen}
                        options={{
                            icon: <GearIcon />,
                            iconActive: <GearActiveIcon />,
                        }}
                    />
                    <TabNav.Screen
                        name="Profile"
                        component={ProfileScreen}
                        options={{
                            icon: <UserIcon />,
                            iconActive: <UserActiveIcon />,
                        }}
                    />
                </TabNav.Navigator>
            </View>
        </SafeAreaView>
    );

    return (
        <NavigationContainer>
            <MainStack.Navigator
                screenOptions={{
                    headerShown: false,
                }}>
                <MainStack.Screen name={'Draws'} component={TabNavScreen} />
                <MainStack.Screen name={'Draw'} component={DrawScreen} />
            </MainStack.Navigator>
        </NavigationContainer>
    );
}
