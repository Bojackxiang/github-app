import React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";

import Ionicons from "react-native-vector-icons/Ionicons";

export default class ViewUtils {
    static getSettingItem(callBack, text, color, Icons, icon, expandableIco) {
        return (
            <TouchableOpacity
                onPress={callBack}
                style={styles.setting_item_container}
            >
                <View style={{ alignItems: "center", flexDirection: "row" }}>
                    {Icons && icon ? (
                        <Icons
                            name={icon}
                            size={16}
                            style={{ color: color, marginRight: 10 }}
                        />
                    ) : (
                        <View
                            style={{
                                opacity: 1,
                                width: 16,
                                height: 16,
                                marginRight: 10,
                            }}
                        />
                    )}
                    <Text>{text}</Text>
                </View>
                <Ionicons
                    name={expandableIco ? expandableIco : "ios-arrow-forward"}
                    size={16}
                    style={{
                        marginRight: 10,
                        alignSelf: "center",
                        color: color || "black",
                    }}
                />
            </TouchableOpacity>
        );
    }

    static getMenuItem(callBack, menu, color, expandableIco) {
        return ViewUtils.getSettingItem(
            callBack,
            menu.name,
            color,
            menu.Icons,
            menu.icon,
            expandableIco
        );
    }
}

const styles = StyleSheet.create({
    setting_item_container: {
        backgroundColor: "white",
        padding: 10,
        height: 60,
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
    },
});
