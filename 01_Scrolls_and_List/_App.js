import React, { useState } from "react";
import { StyleSheet, Text, Dimensions, TextInput, View, Button, ScrollView } from "react-native";
import { Separador } from "./Separador";

//***************************** *
//        Scroll View
//***************************** */


export default function App() {
  //Input
  const [text, setText] = useState("Chanchito");
  const [submit, setSubmit] = useState("Chanchito");



  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/***************************************************************************************/}
        <Separador>  Ejemplo Scroll View </Separador>
        {/***************************************************************************************/}

        <View>
          <Text>Texto: {submit}</Text>
          <Text>Texto: {submit}</Text>
          <Text>Texto: {submit}</Text>
          <Text>Texto: {submit}</Text>
          <Text>Texto: {submit}</Text>
          <Text>Texto: {submit}</Text>
          <Text>Texto: {submit}</Text>
          <Text>Texto: {submit}</Text>
          <Text>Texto: {submit}</Text>
          <Text>Texto: {submit}</Text>
          <Text>Texto: {submit}</Text>
          <Text>Texto: {submit}</Text>
          <Text>Texto: {submit}</Text>
          <Text>Texto: {submit}</Text>
          <Text>Texto: {submit}</Text>
          <Text>Texto: {submit}</Text>
          <Text>Texto: {submit}</Text>
          <Text>Texto: {submit}</Text>
          <Text>Texto: {submit}</Text>
          <Text>Texto: {submit}</Text>
          <Text>Texto: {submit}</Text>
          <Text>Texto: {submit}</Text>
          <Text>Texto: {submit}</Text>
          <Text>Texto: {submit}</Text>
          <Text>Texto: {submit}</Text>
          <Text>Texto: {submit}</Text>
          <Text>Texto: {submit}</Text>
          <Text>Texto: {submit}</Text>
          <Text>Texto: {submit}</Text>
          <Text>Texto: {submit}</Text>
          <Text>Texto: {submit}</Text>
          <Text>Texto: {submit}</Text>
          <Text>Texto: {submit}</Text>
          <Text>Texto: {submit}</Text>
          <Text>Texto: {submit}</Text>
          <Text>Texto: {submit}</Text>
          <Text>Texto: {submit}</Text>
          <Text>Texto: {submit}</Text>
          <Text>Texto: {submit}</Text>
          <Text>Texto: {submit}</Text>
          <Text>Texto: {submit}</Text>
          <Text>Texto: {submit}</Text>
          <Text>Texto: {submit}</Text>
          <Text>Texto: {submit}</Text>
          <Text>Texto: {submit}</Text>
          <Text>Texto: {submit}</Text>
          <Text>Texto: {submit}</Text>
          <Text>Texto: {submit}</Text>
          <Text>Texto: {submit}</Text>
          <Text>Texto: {submit}</Text>
          <Text>Texto: {submit}</Text>
          <Text>Texto: {submit}</Text>
          <Text>Texto: {submit}</Text>
          <Text>Texto: {submit}</Text>
          <Text>Texto: {submit}</Text>
          <Text>Texto: {submit}</Text>
          <Text>Texto: {submit}</Text>
          <Text>Texto: {submit}</Text>
          <Text>Texto: {submit}</Text>
          <Text>Texto: {submit}</Text>

          <TextInput
            style={styles.input}
            placeholder="Escribir acá"
            onChangeText={(t) => setText(t)}
            defualtValue={text}
          />

          <Button title="Aceptar"

            onPress={() => {
              setSubmit("Enviado desde el boton");
              alert('Texto enviado con exito');
            }}
          />
        </View>
      </ScrollView>
    </View >
  );
}

const styles = StyleSheet.create({

  input: {
    height: 40,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    width: "100%",
  },
  container: {
    flex: 1,
    backgroundColor: "#ddd",
    alignItems: "center",
    justifyContent: "center",
  },
  scrollView: {
    width: Dimensions.get('window').width,
    backgroundColor: "#fff",
  },
});