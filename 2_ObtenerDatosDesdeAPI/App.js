import React, { useState, useEffect, useReducer, useMemo } from "react";
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

const users = [  { name: "lala", age: 2 },  { name: "lele", age: 3 }];

export default function App() {

  const [modal, setModal] = useState(false);

  const [state, dispaatch] = useReducer(reducer, inistialState);

  const totalAge = useMemo(() => {
    let age = 0;
    console.log("calculando...");
    users.forEach((element) => {
      age = age + element.age;
    });

    return age;
  }, [users]);

  console.log('Total Age: ', totalAge);


  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text onPress={() => dispaatch({ type: "incrementar" })}> + </Text>
        <Text style={styles.text}> {state.cont} </Text>
        <Text onPress={() => dispaatch({ type: "decrementar" })}> - </Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  list: {},
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
    marginTop: 25,
  },
  photoPic: {
    height: 60,
    width: 60,
  },
});
