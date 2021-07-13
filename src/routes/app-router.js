//modules
import React, {useEffect} from 'react';
import {View} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaView} from 'react-native-safe-area-context';

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
    RaffleScreen,
} from '_screens/index';

//components
import {BottomBar} from '_organisms/index';
import {BG_GRADIENT} from '_styles/global';

export default function RootRouter() {
    const TabNav = createBottomTabNavigator();
    const MainStack = createStackNavigator();

    const TabNavScreen = () => (
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
                    iconActive: <StarActiveIcon width={30} height={28} />,
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
    );

    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={{flex: 1}}>
                {/*<BG_GRADIENT />*/}
                <NavigationContainer>
                    <MainStack.Navigator
                        screenOptions={{
                            headerShown: false,
                        }}>
                        <MainStack.Screen
                            name={'Raffles'}
                            component={TabNavScreen}
                            mode="modal"
                        />
                        <MainStack.Screen
                            name={'Raffle'}
                            component={RaffleScreen}
                        />
                    </MainStack.Navigator>
                </NavigationContainer>
            </View>
        </SafeAreaView>
    );
}
