import React, { cloneElement } from "react";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    height: 60,
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    paddingHorizontal: 15,
  },
  text: {
    fontSize: 18,
  },
});

export default ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> {title} </Text>
    </View>
  );
};
