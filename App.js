import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  Button,
} from "react-native";

const width = Dimensions.get("window").width;

export default function App() {
  const [text, setText] = useState("Chanchito Feliz");
  const [submit, setSubmit] = useState("");

  return (
    <View style={styles.container}>
      <Text> Texto: {submit} </Text>
      <TextInput
        style={styles.input}
        placeholder="Escribe acá"
        onChangeText={(t) => setText(t)}
        defaultValue={text}
      />
      <Button
        title="Aceptar"
        onPress={() => {
          setSubmit(text);
          alert("Texto enviado con exito");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    width: width,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});
