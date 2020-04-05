/**
 * 本章笔记
 * 如何让topbar 滚动起来： https://blog.csdn.net/zcmain/article/details/89032175
 */
import React, { lazy } from "react";
import { Text, View, Button, FlatList, RefreshControl } from "react-native";
import { createAppContainer } from "react-navigation";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import { useDispatch, useSelector } from "react-redux";
// additional files
import NavigationUtils from "../Navigator/Navitation.utils";
import Types from "../../js/actions/types";
import Actions from "../actions";
import PopularItem from "../common/PopularItem";

const GITHUB_URL = `https://api.github.com/search/repositories?q=`;
const SORT_QUERY = "&sort=stars";

const Popularpage = (props) => {
  const themeState = useSelector((state) => state.theme);
  // ====================== 生成tab的列表 ====================
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
            theme={themeState}
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

  // ==================== 获取每个tab中的数据 ====================

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
      lazy: true,
    })
  );

  return <TabNavigator />;
};

const PropularTab = (props) => {
  // 看当前用户所在的tab
  const { tabName } = props;
  console.log("开始加载当前的tab", tabName);
  const popularState = useSelector((state) => state?.popular[tabName]);
  console.log(popularState);
  const dispatch = useDispatch();

  const _genUrlName = () => {
    return `${GITHUB_URL}${tabName}${SORT_QUERY}`;
  };

  React.useEffect(() => {
    _onLoading();
  }, []);

  const _onLoading = () => {
    dispatch(Actions.popularAction(tabName, _genUrlName()));
  };

  const _renderItem = (data) => {
    const item = data.item;
    return <PopularItem item={item}></PopularItem>;
  };

  return (
    <View>
      {/* {popularState.data} */}
      {popularState === undefined ? (
        <Text>loading</Text>
      ) : (
        <FlatList
          data={popularState.data}
          renderItem={(data) => _renderItem(data)}
          keyExtractor={(item) => item + Math.random() * 100}
          refreshing={popularState.isLoading}
          onRefresh={() => _onLoading()}
        ></FlatList>
      )}
    </View>
  );
};

export default Popularpage;

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
