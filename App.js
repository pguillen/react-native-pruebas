import React, { useState } from "react";
import { StyleSheet, Text, View, Dimensions, Button } from "react-native";
import { Map, Modal, Panel, Input, List } from "./components";

export default function App() {
  const [puntos, setPuntos] = useState([]);
  const [puntoTemp, setPuntoTemp] = useState({});
  const [nombre, setNombre] = useState("");
  const [visibilityFilter, setVisibilityFilter] = useState("new_punto");
  const [visibility, setVisibility] = useState(false);
  const [pointsFilter, setPointsFilter] = useState(false);

  const togglePointsFilter = () => setPointsFilter(!pointsFilter);

  const handleLoongPress = (e) => {
    setPuntoTemp(e.nativeEvent.coordinate);
    setVisibilityFilter("new_punto");
    setVisibility(true);
  };

  const handleChangeText = (text) => {
    setNombre(text);
  };

  const handlerSubmit = () => {
    const newPunto = { coordinate: puntoTemp, name: nombre };
    setPuntos(puntos.concat(newPunto));
    setVisibility(false);
    setNombre("");
  };

  const handlerList = () => {
    setVisibilityFilter("all_puntos");
    setVisibility(true);
  };

  console.log(puntos);

  return (
    <View style={styles.container}>
      <Map
        onLongPress={handleLoongPress}
        puntos={puntos}
        pointsFilter={pointsFilter}
      />
      <Panel
        onPressLeft={handlerList}
        textLeft="Lista"
        togglePointsFilter={togglePointsFilter}
      />
      <Modal visibility={visibility}>
        {visibilityFilter === "new_punto" ? (
          <View style={styles.form}>
            <Input
              title="Nombre"
              placeholder="Nombre del punto"
              onChangeText={handleChangeText}
            />
            <Button title="Aceptar" onPress={handlerSubmit} />
          </View>
        ) : (
          <List puntos={puntos} closeModal={() => setVisibility(false)} />
        )}
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    padding: 15,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
