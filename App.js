import React, { useState } from "react";
import { StyleSheet, Text, FlatList, View } from "react-native";

export default function App() {
  const [text, setText] = useState("Chanchito Feliz");
  const [submit, setSubmit] = useState("");

  return <View style={styles.container}>
    <FlatList 
    data={[
      { key: '1', name: 'Pablo' },
      { key: '2', name: 'Antonia' },
      { key: '3', name: 'Pelusa' },
      { key: '4', name: 'Dragon' },
      { key: '5', name: 'Tanque' },
      { key: '6', name: 'Verde' },
      { key: '7', name: 'Peca' },
      { key: '8', name: 'German' },
      { key: '9', name: 'Nico' },
      { key: '10', name: 'Andre' },
      { key: '11', name: 'Vivi' },
      { key: '12', name: 'Lucas' },
      { key: '13', name: 'Tormenta' },
      { key: '14', name: 'Torpe' },
      { key: '15', name: 'Xamarin' },
      { key: '16', name: 'Zorro' },
      { key: '17', name: 'Barro' },
      { key: '18', name: 'Nieto' },
    ]}

    renderItem={({ item }) => <Text style={styles.item}> {item.name} </Text>}
    />

  </View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
    paddingTop:22,
  },
  item:{
    padding: 10,
    fontSize:22,
    height:50,
    borderBottomWidth: '#ccc',
    borderBottomWidth: 1,
  }
});
