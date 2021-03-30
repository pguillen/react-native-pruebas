import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity,
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

      {/*
       <TouchableHighlight
        underlayColor={"#999"}
        activeOpacity={0.2}
        onPress={() => {
          setSubmit(text);
          alert("Texto enviado con exito");
        }}>
        <Text>Aceptar</Text>
      </TouchableHighlight> 
      */}

      {/*
       <TouchableNativeFeedback
        background={TouchableNativeFeedback.Ripple("#00f", true)}
        onPress={() => {
          setSubmit(text);
          alert("Texto enviado con exito");
        }}
      >
        <View style={styles.view}>
          <Text>Aceptar</Text>
        </View>
      </TouchableNativeFeedback> 
      */}

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
    </View>
  );
}

const styles = StyleSheet.create({
  TouchableOpacity: {
    backgroundColor: "#EEE",
  },
  view: {
    height: 40,
    width: 300,
    alignItems: "center",
    justifyContent: "space-evenly",
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
    justifyContent: "space-evenly",
  },
});
