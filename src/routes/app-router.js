//modules
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {LinearGradient} from 'expo-linear-gradient';

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
    RafflesScreen,
    FavoritesScreen,
    SettingsScreen,
    ProfileScreen,
} from '_screens/index';

//components
import {BottomBar} from '_organisms/index';

export default function RootRouter() {
    const TabNav = createBottomTabNavigator();

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
            <View style={{flex: 1}}>
                <LinearGradient
                    colors={['#1DE5E2', '#B588F7']}
                    locations={[0.1, 1]}
                    start={{x: 0.1, y: 0.1}}
                    end={{x: 1, y: 0.9}}
                    style={StyleSheet.absoluteFill}
                />
                <NavigationContainer>
                    <TabNav.Navigator
                        sceneContainerStyle={{backgroundColor: 'transparent'}}
                        tabBarOptions={{
                            keyboardHidesTabBar: true,
                            headerShown: false,
                        }}
                        tabBar={props => <BottomBar {...props} />}>
                        <TabNav.Screen
                            name="Raffles"
                            component={RafflesScreen}
                            options={{
                                icon: <GiftIcon />,
                                iconActive: <GiftActiveIcon />,
                            }}
                        />
                        <TabNav.Screen
                            name="Favorites"
                            component={FavoritesScreen}
                            options={{
                                icon: <StarIcon />,
                                iconActive: <StarActiveIcon />,
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
                </NavigationContainer>
            </View>
        </SafeAreaView>
    );
}
