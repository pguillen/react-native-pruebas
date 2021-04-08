import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
  });

  export default ({navigation}) => {
    const body = navigation.getParam('body')
    const title = navigation.getParam('title')
    const name = navigation.getParam('name')
    return (
      <View style={styles.container}>
        <Text> {name} </Text>
        <Text> {title} </Text>
        <Text> {body} </Text>
      </View>
    );
  }