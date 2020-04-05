import React from "react";
import { StyleSheet, Text, View } from "react-native";

const FavouritePage = () => {
    return (
        <View style={styles.container}>
            <Text>favourite page</Text>
        </View>
    );
};

export default FavouritePage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: "center",
        // alignItems: "center"
    }
});
