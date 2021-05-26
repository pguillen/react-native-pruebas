import React, { useState, useEfect } from "react";
import { StyleSheet, SectionList, Text, Dimensions, View, Button, ScrollView } from "react-native";
import { MiFlatList } from "./MiFlatList";
import { Separador } from "./Separador";

//***************************** *
//    Flat List & Section List
//***************************** */

const dataList = [
  { key: '1', name: 'Pablo' },
  { key: '2', name: 'Dragon' },
  { key: '3', name: 'Tom' },
  { key: '4', name: 'Mat' },
  { key: '5', name: 'Loki' },
  { key: '6', name: 'Pablo' },
  { key: '7', name: 'Dragon' },
  { key: '8', name: 'Tom' },
  { key: '9', name: 'Mat' },
  { key: '10', name: 'Loki' },
  { key: '11', name: 'Pablo' },
  { key: '12', name: 'Dragon' },
  { key: '13', name: 'Tom' },
  { key: '14', name: 'Mat' },
  { key: '15', name: 'Loki' },
  { key: '16', name: 'Pablo' },
  { key: '17', name: 'Dragon' },
  { key: '18', name: 'Tom' },
  { key: '19', name: 'Mat' },
  { key: '20', name: 'Loki' },
];


export default function App() {

  return (
    <View style={styles.container}>

      <Separador>  FlatList  </Separador>
      <MiFlatList style={styles.item}>
        {dataList}
      </MiFlatList>


      {/***************************************************************************************/
      /*
      <Separador>  SectionList  </Separador>
      <MiSectionList style={styles}>
      </MiSectionList>
      */
      /***************************************************************************************/}


      {/***************************************************************************************/}
      <Separador>  Fin  </Separador>
      {/***************************************************************************************/}
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

const MiSectionList = (props) => {

  const { style, children } = props;


  return (
    <View>
      <SectionList
        sections={
          [
            {
              title: 'Grupo 1',
              data: [
                { key: '8', name: 'Tom' },
                { key: '9', name: 'Mat' },
                { key: '10', name: 'Loki' },
                { key: '11', name: 'Pablo' },
                { key: '12', name: 'Dragon' },
                { key: '13', name: 'Tom' },
                { key: '14', name: 'Mat' },
                { key: '15', name: 'Loki' },
                { key: '16', name: 'Pablo' },
                { key: '17', name: 'Dragon' },
                { key: '2', name: 'Dragon' },
              ]
            },
            {
              title: 'Grupo 2',
              data: [
                { key: '8', name: 'Tom' },
                { key: '14', name: 'Mat' },
                { key: '15', name: 'Loki' },
                { key: '16', name: 'Pablo' },
              ]
            },
            {
              title: 'Grupo 3',
              data: [
                { key: '14', name: 'Mat' },
                { key: '15', name: 'Loki' },
              ]
            }
          ]
        }
        renderItem={({ item }) => <Text style={style.item}> {item.name} </Text>}
        renderSectionHeader={({ section }) => <Text style={style.section}> {section.title} </Text>}
      >
      </SectionList>
    </View>);
}