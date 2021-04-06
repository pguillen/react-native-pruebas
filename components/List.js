import React from "react";
import {
  StyleSheet,
  FlatList,
  Text,
  View,
  Button,
  Dimensions,
} from "react-native";

export default function List({ puntos, closeModal }) {
  return (
    <>
      <View style={styles.list}>
        <FlatList
          data={puntos.map((x) => x.name)}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text> {item} </Text>
            </View>
          )}
          keyExtractor={(item) => item}
        />
      </View>
      <View style={styles.button}>
        <Button title="Cerrar" onPress={closeModal} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingBottom: 15,
  },

  list: {
    height: Dimensions.get("window").height - 250,
  },
  item: {
    borderBottomWidth: 1,
    borderColor: "#ccc",
    height: 50,
    justifyContent: "center",
    padding: 15,
  },
});
