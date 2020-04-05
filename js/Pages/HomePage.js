import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createAppContainer } from "react-navigation";
import FavouritePage from './FavouritePage';
import MyPage from './MyPage'
import PopularPage from './Popularpage'
import TrendingPage from './TrendingPage'
import Ionicons from 'react-native-vector-icons/Ionicons'
import NavigationUtils from '../Navigator/Navitation.utils'

const HomePage = (props) => {
    const _tabNavigator = () => {
        const bottomNavigator = createBottomTabNavigator({
            Popular:{
                screen: PopularPage,
                navigationOptions: {
                    tabBarLabel: '最热',
                    tabBarIcon: ({tintColor, focused}) => (
                        <Ionicons name={'ios-star'} size={26} style={{color: tintColor}} />
                    )
                }
            },
            FavouritePage:{
                screen: FavouritePage,
                navigationOptions: {
                    tabBarLabel: '我的收藏',
                    tabBarIcon: ({tintColor, focused}) => (
                        <Ionicons name={'ios-at'} size={26} style={{color: tintColor}} />
                    )
                }
            },
            MyPage:{
                screen: MyPage,
                navigationOptions: {
                    tabBarLabel: '我的主页',
                    tabBarIcon: ({tintColor, focused}) => (
                        <Ionicons name={'ios-home'} size={26} style={{color: tintColor}} />
                    )
                }
            },
            TrendingPage:{
                screen: TrendingPage,
                navigationOptions: {
                    tabBarLabel: '我看过的',
                    tabBarIcon: ({tintColor, focused}) => (
                        <Ionicons name={'ios-heart'} size={26} style={{color: tintColor}} />
                    )
                }
            },
        });
        return createAppContainer(bottomNavigator)
    }
    
    const TabNavigator = _tabNavigator()

    NavigationUtils.homePageNavigate = props.navigation.navigate
    
    return (
        <TabNavigator/> 
    );
};

export default HomePage;
