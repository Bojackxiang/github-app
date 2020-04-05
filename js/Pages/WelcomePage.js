import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import MavigationUtils from "../Navigator/Navitation.utils";

const WelcomePage = props => {
    let hello = "test";
    // 设定两秒之后跳转
    useEffect(() => {
        const timeOut = setTimeout(() => {
            MavigationUtils.resetToHomePage(props)
        }, 1000);
        return () => {
            clearTimeout(timeOut);
        };
    }, []);

    return (
        <View style={styles.container}>
            <Text>Welcome page {hello}</Text>
        </View>
    );
};

export default WelcomePage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        // alignItems: "center"
    }
});
