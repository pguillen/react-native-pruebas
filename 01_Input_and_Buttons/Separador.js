import React from "react";
import {StyleSheet, Text, View } from "react-native";

export const Separador = (props) => {
    if (!props)
    props = "default";
    
    const { children } = props;
    
    return (
        <View style={styles.separador}>
        <Text>{"\n"}</Text>
        <Text  style={styles.line}>  {children} {"\n"}</Text>
        <Text>{"\n"}</Text>
        </View>
        );
    };
    
    const styles = StyleSheet.create({
        separador: {
            flex: 1,
            width:"100%",
            alignItems: "center",
            justifyContent: "space-evenly",
        },
        line:{
            textAlign: 'center',
            borderColor: 'black',
            borderWidth: 1,
            backgroundColor: "#ccc" ,
            alignItems: "center",
            justifyContent: "center",
            width:"100%",
        }
    });