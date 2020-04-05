import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import DataStore from "../expand/dao/DataStore";

const OfflineCache = () => {
  const dataStorage = new DataStore();
  const textValue = "java";
  const url = `https://api.github.com/search/repositories?q=${textValue}`;

  const _fetchDataHandler = () => {
    dataStorage.fetchData(url).then(response => {
      console.log('页面接收到的数据')
      console.log(response)
    });
  };

  const _saveDataHandler = () => {};

  return (
    <View>
      <Text>off line cache </Text>
      <Button
        title="fetch"
        onPress={() => {
          _fetchDataHandler();
        }}
      />
    </View>
  );
};

export default OfflineCache;

const styles = StyleSheet.create({});
