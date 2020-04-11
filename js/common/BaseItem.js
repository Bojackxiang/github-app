import React, { useState, useMemo } from "react";
import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const BaseItem = (props) => {
    const { isFavorite } = props;
    const [favorite, setFavorite] = useState(favorite);

    /**
     * 用来检测当前的pros又没有改变
     */
    useEffect(() => {
        console.log("传进来的props改变了", props);
    }, [props]);

    /**
     * 点击favorite icon之后的反应
     */
    const _onPressFavoriteIcon = () => {
        setFavorite(!favorite)  
    };

    /**
     * 用来生成新的favorite icon
     */
    const _favoriteIcon = () => {
        return (
            <TouchableWithoutFeedback
                style={{ padding: 0 }}
                onPress={() => {
                    _onPressFavoriteIcon();
                }}
            >
                <FontAwesome
                    name={favorite ? "star" : "star-o"}
                    size={26}
                    style={{ color: "#678" }}
                ></FontAwesome>
            </TouchableWithoutFeedback>
        );
    };

    return (
        <View>
            <Text></Text>
        </View>
    );
};

export default BaseItem;

const styles = StyleSheet.create({});
