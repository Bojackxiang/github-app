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
import AboutPage from "../Pages/AboutPage";

const InitNavigator = createStackNavigator({
  WelcomePage: {
    screen: WelcomePage,
    navigationOptions: {
      header: null,
    },
  },
});

const MainNavigator = createStackNavigator({
  HomePage: {
    screen: HomePage,
  },
  DetailPage: {
    screen: DetailPage,
    navigationOptions: {
      // header: null,
    },
  },
  FetchDemo: {
    screen: FetchDemo,
    navigationOptions: {
      header: null,
    },
  },
  AsyncStoragePage: {
    screen: AsyncStoragePage,
    navigationOptions: {
      header: null,
    },
  },
  OfflineCache: {
    screen: OfflineCache,
    navigationOptions: {},
  },
  AboutPage: {
    screen:AboutPage,
    navigationOptions: {
      header: null
    }
  }
}, {
  defaultNavigationOptions: {
      headerShown: false,// 可以通过将header设为null 来禁用StackNavigator的Navigation Bar
  },
});

export default createAppContainer(createSwitchNavigator({
  Init: InitNavigator,
  Main: MainNavigator,
}, {
  navigationOptions: {
      headerShown: false,
      header: null,
  },
}));
