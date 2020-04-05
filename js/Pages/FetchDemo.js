import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { TextInput } from "react-native-gesture-handler";

const FetchDemo = () => {
    const [textValue, setTextValue] = useState("");
    const [fetchedContent, setFetchContent] = useState("");

    const loadData = () => {
        const url = `https://api.github.com/search/repositories?q=${textValue}`;
        setFetchContent("loading");
        fetch(url)
            .then(response => response.text())
            .then(responseText => setFetchContent(responseText));
    };

    const loadData2 = () => {
        const url = `https://api.github.com/search/repositories?q=${textValue}`;
        setFetchContent("loading");
        fetch(url)
            .then(response => {
                if (response.ok) return response.text();
                throw new Error("network response is failed");
            })
            .then(responseText => setFetchContent(responseText))
            .catch(error => {
                setFetchContent(error.message);
            });
    };

    return (
        <View>
            <View style={styles.inputWrapper}>
                <TextInput
                    style={styles.textInput}
                    value={textValue}
                    onChange={text => {
                        setTextValue(text);
                    }}
                />

                <Button title="load data" onPress={loadData2} />
            </View>

            <Text>{fetchedContent}</Text>
        </View>
    );
};

export default FetchDemo;

const styles = StyleSheet.create({
    textInput: {
        borderColor: "black",
        borderWidth: 1,
        flexGrow: 1
    },
    inputWrapper: {
        flexDirection: "row"
    }
});
