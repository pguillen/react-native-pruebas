import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { Separador } from "./Separador";
import { MiFlatList } from "./MiFlatList";


//***************************** *
//        SPINER
//***************************** */

export default function App() {

  return (
    <View style={styles.container}>
      <Separador> ActivityIndicator </Separador>
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View >
    </View >
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#15f",
    alignItems: 'stretch',
    justifyContent: "center",
    paddingTop: 22,
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: "center",
  },

});