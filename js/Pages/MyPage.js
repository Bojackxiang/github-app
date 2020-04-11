import React from "react";
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
} from "react-native";

import NavigationBar from "../common/NavigationBar";

import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Octicons from "react-native-vector-icons/Octicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import ViewUtils from "../common/ViewUtils";
import { NavigationContext } from "react-navigation";
import NavigationUtils from "../Navigator/Navitation.utils";

// menu 里面的选项卡
const MORE_MENU = {
    Custom_Language: {
        name: "自定义语言",
        Icons: Ionicons,
        icon: "md-checkbox-outline",
    },
    Sort_Language: {
        name: "语言排序",
        Icons: MaterialCommunityIcons,
        icon: "sort",
    },
    Custom_Theme: {
        name: "自定义主题",
        Icons: Ionicons,
        icon: "ios-color-palette",
    },
    Custom_Key: {
        name: "自定义标签",
        Icons: Ionicons,
        icon: "md-checkbox-outline",
    },
    Sort_Key: { name: "标签排序", Icons: MaterialCommunityIcons, icon: "sort" },
    Remove_Key: { name: "标签移除", Icons: Ionicons, icon: "md-remove" },
    About_Author: { name: "关于作者", Icons: Octicons, icon: "smiley" },
    About: { name: "关于", Icons: Ionicons, icon: "logo-github" },
    Tutorial: { name: "教程", Icons: Ionicons, icon: "ios-bookmarks" },
    Feedback: { name: "反馈", Icons: MaterialIcons, icon: "feedback" },
    Share: { name: "分享", Icons: Ionicons, icon: "md-share" },
    CodePush: { name: "CodePush", Icons: Ionicons, icon: "ios-planet" },
};

const MyPage = (props) => {
    const { navigation } = props;
    console.log(navigation);
    const _onItemClick = (menuItem) => {
        let routeName,
            params = {};
        console.log("MENU CLICKED", menuItem);
        switch (menuItem) {
            case MORE_MENU.Tutorial:
                return;
            default:
                return;
        }
    };

    const _getItem = (menu) => {
        return ViewUtils.getMenuItem(
            () => {
                _onItemClick(menu);
            },
            menu,
            "lightgrey"
        );
    };

    return (
        <View style={{ flex: 1 }}>
            <NavigationBar />
            <ScrollView style={{ flex: 1 }}>
                <TouchableOpacity
                    style={{
                        backgroundColor: "#ffffff",
                        height: 90,
                        alignItems: "center",
                        flexDirection: "row",
                        padding: 12,
                        borderBottomColor: "lightgrey",
                        borderBottomWidth: 2,
                    }}
                    onPress={() => {
                        NavigationUtils.goPage({}, "AboutPage");

                        // _onItemClick(MORE_MENU.About);
                    }}
                >
                    <Ionicons
                        name={MORE_MENU.About.icon}
                        size={40}
                        style={{
                            marginRight: 10,
                        }}
                    />
                    <Text style={{ flexGrow: 1 }}>GitHub Popular</Text>

                    <Ionicons
                        style={{ marginRight: 10 }}
                        name={"ios-arrow-forward"}
                        size={26}
                        color={"skyblue"}
                    />
                </TouchableOpacity>

                {_getItem(MORE_MENU.Tutorial)}
                <View style={styles.divier} />
                {_getItem(MORE_MENU.Tutorial)}
                {/*趋势管理*/}
                <Text style={styles.groupTitle}>趋势管理</Text>
                {/*自定义语言*/}
                {_getItem(MORE_MENU.Custom_Language)}
                {/*语言排序*/}
                <View style={styles.divier} />
                {_getItem(MORE_MENU.Sort_Language)}

                {/*最热管理*/}
                <Text style={styles.groupTitle}>最热管理</Text>
                {/*自定义标签*/}
                {_getItem(MORE_MENU.Custom_Key)}
                {/*标签排序*/}
                <View style={styles.divier} />
                {_getItem(MORE_MENU.Sort_Key)}
                {/*标签移除*/}
                <View style={styles.divier} />
                {_getItem(MORE_MENU.Remove_Key)}

                {/*设置*/}
                <Text style={styles.groupTitle}>设置</Text>
                {/*自定义主题*/}
                {_getItem(MORE_MENU.Custom_Theme)}
                {/*关于作者*/}
                <View style={styles.divier} />
                {_getItem(MORE_MENU.About_Author)}
                <View style={styles.divier} />
                {_getItem(MORE_MENU.Feedback)}
                <View style={styles.divier} />
                {_getItem(MORE_MENU.CodePush)}
            </ScrollView>
        </View>
    );
};

export default MyPage;

const styles = StyleSheet.create({
    container: {},
    divider: {
        borderBottomColor: "lightgrey",
        borderBottomWidth: 2,
    },
    groupTitle: {
        padding: 5,
        fontSize: 12,
    },
});
