import React from "react";
import { FlatList, Text, View } from "react-native";

export const MiFlatList = (props) => {

    const { style, children } = props;


    return (
        <View>
            <FlatList
                data={children}
                renderItem={({ item }) => <Text style={style}> {item.name} </Text>}>
            </FlatList>
        </View>);
};
