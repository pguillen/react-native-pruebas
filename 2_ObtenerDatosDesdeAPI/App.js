import React, { useState, useCallback } from "react";
import { StyleSheet, View, Text } from "react-native";

export default function App() {
  const [cont, setCont] = useState(0);

  const incrementar = useCallback(() => {
    setCont(cont + 1);
  }, [cont]);

  const decrementar = useCallback(() => {
    setCont(cont - 1);
  }, [cont]);

  return (
    <View style={styles.container}>
      <Text onPress={() => incrementar()}> + </Text>
      <Text style={styles.text}> {cont} </Text>
      <Text onPress={() => decrementar()}> - </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  list: {},
  content: {
    flex: 1,
    backgroundColor: "#eee",
    alignItems: "center",
    justifyContent: "center",
  },
  center: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
  },
  label: {
    flex: 1,
    backgroundColor: "#00ae57",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    marginLeft: "auto",
    marginRight: 10,
    width: 40,
  },
  item: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    borderColor: "#ccc",
    height: 50,
    justifyContent: "center",
    padding: 10,
    fontSize: 22,
  },
  photo: {
    height: 400,
    width: 250,
    marginTop: 25,
  },
  photoPic: {
    height: 60,
    width: 60,
  },
});
