import React from "react";
import { StyleSheet, Text, View, DeviceEventEmitter } from "react-native";
import CommonModal from "../common/CommonModal";

const TrendingPage = () => {
  const [modalDisplay, setModalDisplay] = React.useState(false);

  const _onShow = () => {
      setModalDisplay(true)
  };

  const _onClose = () => {
    setModalDisplay(false)
  };

  return (
    <View style={styles.container}>
      <Text onPress={_onShow}>Trending page</Text>
      <CommonModal
        modalDisplay={modalDisplay}
        _onShow={_onShow}
        _onClose={_onClose}
      />
    </View>
  );
};

export default TrendingPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    // alignItems: "center"
  },
});
