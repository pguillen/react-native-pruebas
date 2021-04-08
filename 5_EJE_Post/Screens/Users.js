import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import ListItem from "../components/ListItem";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  list: {
    alignSelf: "stretch",
  },
});

const users = [
  { id: 1, name: "Chanchito" },
  { id: 2, name: "Ervin" },
];

export default () => {
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={users}
        keyExtractor={(x) => x.id}
        renderItem={({ item }) => <ListItem title= {item.name} />}
      />
    </View>
  );
};
