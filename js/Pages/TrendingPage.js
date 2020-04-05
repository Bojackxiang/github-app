import React from "react";
import { StyleSheet, Text, View } from "react-native";


const TrendingPage = () => {
    return (
        <View style={styles.container}>
            <Text>Trending page</Text>
        </View>
    );
};

export default TrendingPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        // alignItems: "center"
    }
});
