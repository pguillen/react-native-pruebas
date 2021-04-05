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
} from "react-native";

export default function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

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
    </View>
  );
}

const styles = StyleSheet.create({
  photo: {
    height: 500,
    width: 300,
  },
  photoPic: {
    height: 60,
    width: 60,
  },
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
});
