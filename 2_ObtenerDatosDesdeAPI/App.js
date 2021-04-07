import React, { useState, useEffect, useReducer } from "react";
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

const inistialState = {
  cont: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "incrementar": {
      return { cont: state.cont + 1 };
    }
    case "decrementar": {
      return { cont: state.cont - 1 };
    }
    default: {
      return state;
    }
  }
};

const crearDialogo = () => {
  Alert.alert(
    "Titulo",
    "Subtitulo o mensaje en si ...",
    [
      {
        text: "Cancelar",
        onPress: () => {},
        style: "cancel",
      },
      {
        text: "Aceptar",
        onPress: () => {
          console.log("boton aceptar presionado!");
        },
        style: "aceptar",
      },
    ],
    {
      cancelable: false,
    }
  );
};

export default function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState(false);
  const [state, dispaatch] = useReducer(reducer, inistialState);

  const fetchUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    setUsers(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
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
      <ImageBackground
        style={styles.photo}
        source={{ uri: "http://placekitten.com/500/300" }}
      >
        <FlatList
          style={styles.list}
          data={users}
          renderItem={({ item }) => (
            <Text style={styles.item}> {item.name} </Text>
          )}
          keyExtractor={(item) => String(item.id)}
        />
      </ImageBackground>

      <View style={styles.container}>
        <Text onPress={() => dispaatch({ type: "incrementar" })}> + </Text>
        <Text style={styles.text}> {state.cont} </Text>
        <Text onPress={() => dispaatch({ type: "decrementar" })}> - </Text>
      </View>

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
  list:{

  },
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
    marginTop:25, 
  },
  photoPic: {
    height: 60,
    width: 60,
  },
});
