import React from "react";
import { StyleSheet, Text, View, Button, } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import AsyncStorage from '@react-native-community/async-storage';

const key = "SAVE_KEY";

const AsyncStoragePage = () => {
  const [userInput, setUserInput] = React.useState("");
  const [message, setMessage] = React.useState("");

  const doSave = async () => {
    try {
      await AsyncStorage.setItem(key, userInput);
      console.log('save finished')
    } catch (error) {
      setMessage(`do save 失败 ${error.message}`);
    }
  };

  const doDelete = async () => {
    try {
      let removeResult = await AsyncStorage.removeItem(key);
    } catch (error) {
      setMessage(`do delete 失败 ${error.message}`);
    }
  };

  const doGet = async () => {
    try {
      let content = await AsyncStorage.getItem(key);
      console.log(content)
    } catch (error) {
      setMessage(`do get 失败 ${error.message}`);
    }
  };

  const userInputChange = text => {
    console.log(text);
    setUserInput(text);
  };

  return (
    <View>
      <Text style={{ textAlign: "center" }}>async storage page</Text>

      <View>
        <TextInput
          style={styles.textInput}
          value={userInput}
          onChangeText={text => {
            userInputChange(text);
          }}
        />

        <View style={styles.btnGroup}>
          <Button
            onPress={() => {
              doSave();
            }}
            title="存储"
          />
          <Button
            onPress={() => {
              doDelete();
            }}
            title="删除"
          />
          <Button
            onPress={() => {
              doGet();
            }}
            title="获取"
          />
        </View>
      </View>
    </View>
  );
};

export default AsyncStoragePage;

const styles = StyleSheet.create({
  textInput: {
    borderColor: "black",
    borderWidth: 1
  },
  btnGroup: {
    flexDirection: "row",
    justifyContent: "space-between"
  }
});
