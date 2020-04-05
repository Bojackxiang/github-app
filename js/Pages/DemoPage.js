/**
 * 本章笔记
 * 如何让topbar 滚动起来： https://blog.csdn.net/zcmain/article/details/89032175
 */
import React from "react";
import { Text, View, Button } from "react-native";
import { createAppContainer } from "react-navigation";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import NavigationUtils from "../Navigator/Navitation.utils";
import { useDispatch, useSelector } from "react-redux";
import Types from "../../js/actions/types";

const Popularpage = (props) => {
  const tabNames = [
    "Java",
    "Python3",
    "Javascript",
    "GoLang",
    "React Native",
    "Angular",
    "Java",
    "Java",
  ];

  const _genTabs = (tabNames) => {
    const tabs = {};
    tabNames.forEach((name) => {
      tabs[name] = {
        screen: (props) => (
          <PropularTab
            {...props}
            tabName={name}
            navigation={props.navigation}
          />
        ), // 这里尽量用function retuen的方式来避免错误
        headerOptions: {
          title: name,
          header: null,
        },
      };
    });
    return tabs;
  };

  const TabNavigator = createAppContainer(
    createMaterialTopTabNavigator(_genTabs(tabNames), {
      tabBarOptions: {
        scrollEnabled: true, // 这个设置让整个top bar 都能滚动起来,
        tabStyle: { width: 120 }, // 一个tab的设置
        upperCaseLabel: false,
        style: {
          backgroundColor: "#a67",
        },
        indicatorStyle: {
          height: 2,
          backgroundColor: "white",
        },
        labelStyle: {
          fontSize: 13,
        },
      },
    })
  );

  return <TabNavigator />;
};

const DemoPage = (props) => {
  const theme = useSelector((state) => state.theme);

  const dispatch = useDispatch();
  const state = useSelector((state) => state.popular);
  console.log(state);

  return (
    <View>
      <Text>{props.tabName}</Text>
      <Text style={{ color: theme.theme }}>hello</Text>
      <Button
        title="jump to detail"
        onPress={() => {
          NavigationUtils.goPage({}, "DetailPage");
        }}
      />
      <Button
        title="change theme "
        onPress={() => {
          console.log("clicked");
          dispatch({ type: Types.THEME_CHANGE, theme: "red" });
        }}
      />

      <Button
        title="go to the fetch page"
        onPress={() => {
          NavigationUtils.goPage({}, "FetchDemo");
        }}
      />

      <Button
        title="go to the async storage page"
        onPress={() => {
          NavigationUtils.goPage({}, "AsyncStoragePage");
        }}
      />

      <Button
        title="go to the cache page"
        onPress={() => {
          NavigationUtils.goPage({}, "OfflineCache");
        }}
      />
    </View>
  );
};

export default DemoPage;

// const TabNavigator = createAppContainer(
//     createMaterialTopTabNavigator(
//         {
//             PopularTab1: {
//                 screen: Tab1,
//                 headerOptions: {
//                     title: "tab1",
//                     header: null
//                 }
//             },
//             PopularTab2: {
//                 screen: Tab2,
//                 headerOptions: {
//                     title: "tab2",
//                     header: null
//                 }
//             },
//             PopularTab3: {
//                 screen: Tab1,
//                 headerOptions: {
//                     title: "tab3",
//                     header: null
//                 }
//             },
//             PopularTab4: {
//                 screen: Tab2,
//                 headerOptions: {
//                     title: "tab4",
//                     header: null
//                 }
//             },
//             PopularTab5: {
//                 screen: Tab1,
//                 headerOptions: {
//                     title: "tab5",
//                     header: null
//                 }
//             },
//             PopularTab6: {
//                 screen: Tab2,
//                 headerOptions: {
//                     title: "tab6",
//                     header: null
//                 }
//             }
//         },
//         {
//             tabBarOptions: {
//                 scrollEnabled: true // 这个设置让整个top bar 都能滚动起来
//             }

//         }
//     )
// );
