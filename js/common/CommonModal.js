import React from "react";
import { StyleSheet, Text, View, Modal, TouchableOpacity } from "react-native";

const CommonModal = (props) => {
  const { _onShow, _onClose, modalDisplay } = props;

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalDisplay}
      onRequestClose={() => _dismiss()}
    >
      <TouchableOpacity
        style={{ backgroundColor: "rgba(0,0,0,0.6)", flex: 1 , justifyContent: 'center', alignItems: 'center'}}
        onPress={() => _onClose()}
      >
        <View
          style={{
            backgroundColor: "white",
            color: "black",
            height: 200,
            width: 200,
            marginLeft: 'auto',
            marginRight: 'auto'
          }}
        >
          <Text>点我</Text>
          <Text>点我</Text>
          <Text>点我</Text>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default CommonModal;

const styles = StyleSheet.create({});
