import React, { useState, useEffect, Fragment } from "react";
import {
  Alert,
  Dimensions,
  StyleSheet,
  Text,
  View,
  Button,
} from "react-native";

import { Camera } from "expo-camera";

export default function App() {
  const [permisos, setPermisos] = useState(null);
  const [tipo, setTipo] = useState(Camera.Constants.Type.back);

  const getPermisos = async () => {
    const { status } = await Camera.requestPermissionsAsync();

    setPermisos(status == "granted");

    console.log("Permisos: ", status);
  };

  useEffect(() => {
    getPermisos();
  });

  if (permisos === null) {
    return (
      <View style={styles.container}>
        <Text>Esperando permisos ...</Text>
      </View>
    );
  }
  if (permisos === false) {
    return (
      <View style={styles.container}>
        <Text>No tenemos permisos para usar la camara.</Text>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Button
          style={styles.roundButton}
          title="Voltear"
          onPress={() => {
            const { front, back } = Camera.Constants.Type;
            const nuevoTipo = tipo === back ? front : back;
            setTipo(nuevoTipo);
          }}
        />

        <Camera style={styles.camera} type={tipo}>
          <View style={styles.fragment}>
            <Text style={styles.text}>Acceso Al Hardware </Text>
            <Text style={styles.text}>Este es mi camara</Text>
          </View>
        </Camera>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  camera: {
    flex: 1,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  roundButton: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: "#68a0cf",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ffee80",
  },
  fragment: {
    flex: 1,
    alignItems: "center",
    paddingTop: 10,
    borderWidth: 1,
  },
  text: {
    fontSize: 22,
    color: "green",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
