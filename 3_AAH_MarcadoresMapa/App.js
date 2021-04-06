import React, { useState, useEffect } from "react";
import { Alert, Dimensions, StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import Constants from "expo-constants";

export default function App() {
  const [locacion, setLocacion] = useState({});

  const buscarLocation = async () => {
    const { status } = await Location.requestPermissionsAsync();
    if (status !== "granted") {
      return Alert.alert("No tenemos permisos");
    } else {
      const location = await Location.getCurrentPositionAsync({});

      // console.log("latitude " + location.coords.latitude);
      // console.log("longitude " + location.coords.longitude);

      setLocacion(location);
    }
  };

  useEffect(() => {
    buscarLocation();
  });

  return (
    <View style={styles.container}>
      <Text>Acceso Al Hardware</Text>
      <Text>Este es mi mapa</Text>
      <MapView style={styles.map}>
        {locacion.coords ? (
          <Marker
            coordinate={locacion.coords}
            title="Titulo"
            description="Descripción del Punto"
          />
        ) : null}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 22,
    color: 'blue'
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height - 150,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
