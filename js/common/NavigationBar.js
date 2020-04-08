import React from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Platform,
  DeviceInfo,
} from "react-native";

/**
 * 目标： 自定义 status bar
 */

const NAV_BAR_HEIGHT_IOS = 44; //导航栏在iOS中的高度
const NAV_BAR_HEIGHT_ANDROID = 50; //导航栏在Android中的高度
const NAV_BAR_HEIGHT =
  Platform.OS === "ios" ? NAV_BAR_HEIGHT_IOS : NAV_BAR_HEIGHT_ANDROID;
const STATUS_BAR_HEIGHT =
  Platform.OS !== "ios" || DeviceInfo.isIPhoneX_deprecated ? 0 : 20; //状态栏的高度

const NavigationBar = (props) => {
  // status bar 的初始设置
  let statusBar = !props.statusBar?.hidden ? (
    <View style={styles.statusBar}>
      <StatusBar {...props.statusBar} />
    </View>
  ) : null;

  // title view的初始设置
  let titleView = props.titleView ? (
    props.titleView
  ) : (
    <Text ellipsizeMode="head" numberOfLines={1} style={styles.title}>
      顶部标题
    </Text>
  );

  // 左右的button
  const getButtonElement = (data) => {
    return (
        <View style={styles.navBarButton}>
            {data ? data : null}
        </View>
    )
}

  // content的初始设置
  let content = props.hide ? null : (
    <View style={styles.navBar}>
      {getButtonElement(props.leftButton)}
      <View style={[styles.navBarTitleContainer, props.titleLayoutStyle]}>
        {titleView}
      </View>
      {getButtonElement(props.rightButton)}
    </View>
  );



  return (
    <View style={[styles.container, props.style]}>
      {statusBar}
      {content}
    </View>
  );
};

export default NavigationBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2196f3",
  },
  navBarButton: {
    alignItems: "center",
  },
  navBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 80,
  },
  navBarTitleContainer: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    left: 40,
    right: 40,
    top: 0,
    bottom: 0,
  },
  title: {
    fontSize: 20,
    marginTop:35,
    color: "white",
  },
  statusBar: {
    height: STATUS_BAR_HEIGHT,
  },
});
