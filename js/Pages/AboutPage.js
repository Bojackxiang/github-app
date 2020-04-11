import React from "react";
import { StyleSheet, Text, View, Linking, useCallback } from "react-native";
import AboutCommon from "../common/AboutCommon";
import ViewUtils from "../common/ViewUtils";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Octicons from "react-native-vector-icons/Octicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

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



const _onItemClick = () => {
    const mailUrl = "mailto://batmandocode@gmail.com";
    
    Linking.canOpenURL(mailUrl)
        .then((support) => {
            console.log(support);
        })
        .catch((error) => {
            console.error('cannot open url')
            console.log(error);
        });
};

const AboutPage = () => {
    const _getItem = (menu) => {
        return ViewUtils.getMenuItem(
            () => {
                _onItemClick(menu);
            },
            menu,
            "lightgrey"
        );
    };
    return <AboutCommon>{_getItem(MORE_MENU.Feedback)}</AboutCommon>;
};

export default AboutPage;

const styles = StyleSheet.create({});
