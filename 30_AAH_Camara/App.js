import React, { useState, useEffect, Fragment } from "react";
import {   Dimensions,  StyleSheet,  Text,  View,  Button,
  TouchableOpacity,
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
        <Camera style={styles.camera} type={tipo}>
          <View style={styles.label}>
            <Text style={styles.text}>Acceso Al Hardware </Text>
            <Text style={styles.text}>Este es mi camara</Text>
          </View>
          <TouchableOpacity
            style={styles.roundButton}
            title="Voltear"
            onPress={() => {
              const { front, back } = Camera.Constants.Type;
              const nuevoTipo = tipo === back ? front : back;
              setTipo(nuevoTipo);
            }}
          >
            <View style={styles.label}>
              <Text style={styles.text}>Voltear</Text>
            </View>
          </TouchableOpacity>
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
    backgroundColor: "rgba(20,180,255,0.51)",
    justifyContent: "center",
    alignContent: "center",
    alignSelf: "flex-end",
    borderWidth: 3,
    borderRadius: 150,
    width: 150,
    height: 150,
  },
  label: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
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
