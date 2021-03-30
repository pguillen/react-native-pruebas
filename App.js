import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const width = Dimensions.get("window").width;

export default function App() {
  const [text, setText] = useState("Chanchito Feliz");
  const [submit, setSubmit] = useState("");

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text> Texto: {submit} </Text>
        <Text> Texto: {submit} </Text>
        <Text> Texto: {submit} </Text>
        <Text> Texto: {submit} </Text>
        <Text> Texto: {submit} </Text>
        <Text> Texto: {submit} </Text>
        <Text> Texto: {submit} </Text>
        <Text> Texto: {submit} </Text>
        <Text> Texto: {submit} </Text>
        <Text> Texto: {submit} </Text>
        <Text> Texto: {submit} </Text>
        <Text> Texto: {submit} </Text>
        <Text> Texto: {submit} </Text>
        <Text> Texto: {submit} </Text>
        <Text> Texto: {submit} </Text>
        <Text> Texto: {submit} </Text>
        <Text> Texto: {submit} </Text>
        <Text> Texto: {submit} </Text>
        <Text> Texto: {submit} </Text>
        <Text> Texto: {submit} </Text>
        <Text> Texto: {submit} </Text>
        <Text> Texto: {submit} </Text>
        <Text> Texto: {submit} </Text>
        <Text> Texto: {submit} </Text>
        <Text> Texto: {submit} </Text>
        <Text> Texto: {submit} </Text>
        <Text> Texto: {submit} </Text>
        <Text> Texto: {submit} </Text>
        <Text> Texto: {submit} </Text>
        <Text> Texto: {submit} </Text>
        <Text> Texto: {submit} </Text>
        <Text> Texto: {submit} </Text>
        <Text> Texto: {submit} </Text>
        <Text> Texto: {submit} </Text>
        <Text> Texto: {submit} </Text>
        <Text> Texto: {submit} </Text>
        <Text> Texto: {submit} </Text>
        <Text> Texto: {submit} </Text>
        <Text> Texto: {submit} </Text>
        <Text> Texto: {submit} </Text>
        <Text> Texto: {submit} </Text>
        <Text> Texto: {submit} </Text>
        <Text> Texto: {submit} </Text>
        <Text> Texto: {submit} </Text>
        <Text> Texto: {submit} </Text>
        <Text> Texto: {submit} </Text>
        <Text> Texto: {submit} </Text>
        <Text> Texto: {submit} </Text>
        <Text> Texto: {submit} </Text>
        <Text> Texto: {submit} </Text>

        <TextInput
          style={styles.input}
          placeholder="Escribe acá"
          onChangeText={(t) => setText(t)}
          defaultValue={text}
        />

        <TouchableOpacity
          style={styles.TouchableOpacity}
          onPress={() => {
            setSubmit(text);
            alert("Texto enviado con exito");
          }}
        >
          <View style={styles.view}>
            <Text>Aceptar</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  TouchableOpacity: {
    backgroundColor: "#EEE",
  },
  view: {
    height: 40,

    alignItems: "center",
    justifyContent: "center",
  },
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
    justifyContent: "center",
  },
  scrollView: {
    width: Dimensions.get("window").width,
  },
});
