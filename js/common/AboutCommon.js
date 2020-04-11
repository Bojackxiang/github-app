import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import ParallaxScrollView from "react-native-parallax-scroll-view";

const AboutCommon = (props) => {
    const { children } = props;
    const window = Dimensions.get("window");

    console.log(Dimensions.get.width, Dimensions.get.height);

    return (
        <ParallaxScrollView
            backgroundColor="rgba(0, 0, 0, 0.9)"
            // 上面内容部分的颜色
            headerBackgroundColor="#333"
            // 上面内容部分的高度
            parallaxHeaderHeight={350}
            // 黏在顶部的内容
            stickyHeaderHeight={71}
            // 头部内容
            renderForeground={() => (
                <View
                    style={{
                        height: 300,
                        flex: 1,
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Text>头部组件</Text>
                </View>
            )}
            // 头部的背景和图片
            renderBackground={() => (
                <View key="background">
                    <Image
                        source={{
                            uri:
                                "https://i.ytimg.com/vi/P-NZei5ANaQ/maxresdefault.jpg",
                            width: window.width,
                            height: 350,
                        }}
                    />
                    <View
                        style={{
                            position: "absolute",
                            top: 0,
                            width: window.width,
                            backgroundColor: "rgba(0,0,0,.4)",
                            height: 350,
                        }}
                    />
                </View>
            )}
            // !!一直往上推的头部的内容 + 控制右边的内容
            renderFixedHeader={() => (
                <View
                    key="fixed-header"
                    style={{ position: "absolute", bottom: 10, right: 10 }}
                >
                    <Text
                        style={{ color: "#999", fontSize: 20 }}
                    >
                        Scroll to top
                    </Text>
                </View>
            )}
            // !!一直往上推的头部的样式 + 控制左边的内容
            renderStickyHeader={() => (
                <View
                    key="sticky-header"
                    style={{
                        height: 71,
                        width: 300,
                        justifyContent: "flex-end",
                    }}
                >
                    <Text style={styles.stickySectionText}>
                        Rich Hickey Talks
                    </Text>
                </View>
            )}
        >
            {children}
        </ParallaxScrollView>
    );
};

export default AboutCommon;

const styles = StyleSheet.create({});
