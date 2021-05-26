import React, { useEffect, useState } from "react";
import { StyleSheet, FlatList, SectionList, Text, Dimensions, View, Button, ScrollView } from "react-native";
import { Separador } from "./Separador";
import { MiFlatList } from "./MiFlatList";

//***************************** *
//    Flat List & useEffect
//***************************** */

export default function App() {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <View style={styles.center}>
        <Text>Cargando...</Text>
      </View>);
  }

  return (
    <View style={styles.container}>
      <MiFlatList style={styles.item}>
        {users}
      </MiFlatList>
    </View >
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 10,
    fontSize: 22,
    height: 50,
    backgroundColor: "#fff",
    borderBottomColor: '#eee',
    borderBottomWidth: 1,

  },
  input: {
    height: 40,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    width: "100%",
  },
  container: {
    flex: 1,
    backgroundColor: "#15f",
    alignItems: 'stretch',
    justifyContent: "center",
    paddingTop: 22,
  },
  scrollView: {
    width: Dimensions.get('window').width,
    backgroundColor: "#fff",
  },
  section: {
    fontSize: 16,
    fontWeight: "bold",
    backgroundColor: '#eee',
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
  },
  center: {
    flex: 0.3,
    alignItems: 'center',
    justifyContent: "center",
  }
});