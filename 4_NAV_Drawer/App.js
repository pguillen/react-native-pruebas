import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View, Button } from "react-native";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";

console.log("Ionicons: ", Ionicons);

const Logo = () => <Text>Lalala</Text>;

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      {/* <Button title="Ir a Detalle" onPress={() => navigation.push("Detalle")} /> */}
      <Button
       title="Ir a Detalle" 
       onPress={() => navigation.navigate('Detalle')} />
    </View>
  );
};

HomeScreen.navigationOptions = {
  drawerIcon: ({ tintColor }) => {
    <Ionicons name="ios-information-circle" size={25} color={tintColor} />;
  },
  headerTitle: <Logo />,
  headerStyle: {
    backgroundColor: "#f00",
  },
};

const DetalleScreen = ({ navigation }) => {
  const [cont, setCont] = useState(0);
  const incrementar = () => {
    setCont(cont + 1);
  };

  useEffect(() => {
    navigation.setParams({ incrementar });
  }, [cont]);

  const lala = navigation.getParam("lala", "valor por defecto");

  return (
    <View style={styles.container}>
      <Text>
        Soy la pantalla de detalle: {lala} contador: {cont}
      </Text>
      <Button title="Volver" onPress={() => navigation.navigate("MiModal")} />
    </View>
  );
};

DetalleScreen.navigationOptions = ({ navigation }) => {
  return {
    title: navigation.getParam("title", "Cargando..."),
    headerRight: (
      <Button
        title="Mas 1"
        color="#555"
        onPress={navigation.getParam("incrementar")}
      />
    ),
  };
};

const AppNavigator = createSwitchNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Detalle: {
      screen: DetalleScreen,
    },
  },
  {
    initialRouteName: "Home",
  }
);

const RootStack = createStackNavigator(
  {
    Main: AppNavigator,
    MiModal: () => <Text> Lalalal </Text>,
  },
  {
    mode: "modal",
    headerMode: "none",
  }
);

export default createAppContainer(RootStack);
//export default createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
