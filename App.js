import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  ActivityIndicator,
  Image,
  ImageBackground,
  Modal,
  Button,
  Alert,
} from "react-native";

const crearDialogo = () => {
  Alert.alert("Titulo", "Subtitulo o mensaje en si ...",
   [{
     text: 'Cancelar',
     onPress: () => {},
     style: 'cancel'
   },
  {
    text: 'Aceptar',
    onPress: () => { console.log('boton aceptar presionado!')},
    style: 'aceptar'
  }],
  {
    cancelable: false
  });
};

export default function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <View style={styles.center}>
        <Text>Cargando...</Text>
        <ActivityIndicator size="small" color="#0000ff" />
      </View>
    );

  return (
    <View style={styles.container}>
      <Image style={styles.photoPic} source={require("./assets/icon.png")} />

      <ImageBackground
        style={styles.photo}
        source={{ uri: "http://placekitten.com/500/300" }}
      >
        <FlatList
          data={users}
          renderItem={({ item }) => (
            <Text style={styles.item}> {item.name} </Text>
          )}
          keyExtractor={(item) => String(item.id)}
        />
      </ImageBackground>

      <Modal animationType="slide" transparent={true} visible={modal}>
        <View style={styles.center}>
          <Text style={styles.content}> Soy un Modal</Text>
          <Button title="Cerrar modal" onPress={() => setModal(!modal)} />
        </View>
      </Modal>

      <Button title="Abrir modal" onPress={() => setModal(!modal)} />

      <Button title="Abrir dialogo" onPress={crearDialogo} />
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: "#eee",
    alignItems: "center",
    justifyContent: "center",
    margin: 50,
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
    paddingTop: 22,
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
    height: 500,
    width: 300,
  },
  photoPic: {
    height: 60,
    width: 60,
  },
});
