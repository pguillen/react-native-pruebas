import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View, Button, TouchableHighlight, TouchableOpacity } from "react-native";
import { Separador } from "./Separador";

export default function App() {
  //Input
  const [text, setText] = useState("Chanchito");

  //Button
  const [submitText, setSubmit] = useState("");

  //Button Touchable
  const [submitTextTouchabe, setSubmitTouchable] = useState("");

  //Button TouchableOpacity
  const [submitTextTouchabeO, setSubmitTouchableO] = useState("");


  return (
    <View style={styles.container}>

      {/***************************************************************************************/}
      <Separador>  Ejemplo Input Change </Separador>
      {/***************************************************************************************/}

      <View>
        <Text>Texto: {text}</Text>
        <TextInput
          style={styles.input}
          placeholder="Escribir acá"
          onChangeText={(t) => setText(t)}
          defualtValue={text}
        />
      </View>

      {/***************************************************************************************/}
      <Separador>  Ejemplo Button  </Separador>
      {/***************************************************************************************/}

      <View >

        <Text>Ejemplo submit buton, texto: {submitText}</Text>

        <Button title="Aceptar"

          onPress={() => {
            setSubmit("Enviado desde el boton");
            alert('Texto enviado con exito');
          }}
        />

      </View>

      {/***************************************************************************************/}
      <Separador>  Ejemplo Button TouchableHighligth (solo Android)  </Separador>
      {/***************************************************************************************/}

      <Text>Ejemplo submit buton, texto: {submitTextTouchabe}</Text>
      <TouchableHighlight
        underlayColor={'#17f'}
        activeOpacity={0.4}
        onPress={() => {
          setSubmitTouchable("Texto enviado desde boton touchable")
          alert('Texto enviado con exito')
        }}>

        <Text>Aceptar</Text>

      </TouchableHighlight>

      {/***************************************************************************************/}
      <Separador>  Ejemplo Button TouchableOpacity  </Separador>
      {/***************************************************************************************/}

      <Text>Ejemplo submit buton, texto: {submitTextTouchabeO}</Text>


      <TouchableOpacity
        style={styles.touchableOpacity}
        onPress={() => {
          setSubmitTouchableO("Texto enviado desde boton TouchableOpacity")
          alert('Texto enviado con exito')
        }}>
        <View style={styles.viewButton}>
          <Text>Aceptar</Text>
        </View>
      </TouchableOpacity>

      {/***************************************************************************************/}
      <Separador>  Fin  </Separador>
      {/***************************************************************************************/}
    </View >
  );
}

const styles = StyleSheet.create({
  touchableOpacity: {
    backgroundColor: '#15f',
  },
  viewButton: {
    height: 40,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    width: "100%",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
