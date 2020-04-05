import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer, createSwitchNavigator } from "react-navigation";

// pages
import WelcomePage from "../Pages/WelcomePage";
import HomePage from "../Pages/HomePage";
import DetailPage from "../Pages/DetailPage";
import FetchDemo from "../Pages/FetchDemo";
import AsyncStoragePage from "../Pages/AsyncStoragePage";
import OfflineCache from "../Pages/OfflineCache";

const InitNavigator = createStackNavigator({
    WelcomePage: {
        screen: WelcomePage,
        navigationOptions: {
            header: null
        }
    }
});

const MainNavigator = createStackNavigator({
    HomePage: {
        screen: HomePage,
        navigationOption: {
            header: null
        }
    },
    DetailPage: {
        screen: DetailPage, 
        navigationOptions: {
            // header: null,
        }
    },
    FetchDemo: {
        screen: FetchDemo,
        navigationOptions: {
            // header: null,
        }
    },
    AsyncStoragePage: {
        screen: AsyncStoragePage,
        navigationOptions: {
            // header: null,
        }
    },
    OfflineCache: {
        screen: OfflineCache,
        navigationOptions: {
            
        }
    }
});

export default createAppContainer(
    createSwitchNavigator(
        {
            Init: InitNavigator,
            Main: MainNavigator
        },
        { navigationOptions: { header: null } }
    )
);
