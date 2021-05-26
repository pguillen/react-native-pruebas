import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ComponenteTexto = (props) => {
  const { texto } = props;
  return (
    <Text> {texto} </Text>
    )
  };
  
  const ComponenteTextoPropChildren = (props) => {
    const { children } = props;
    return (
      <Text> {children} </Text>
      )
    };

    const ComponenteTextoPropsCombinadas = (props) => {
      const { texto, children } = props;
      return (
        <Text> Este componente combina las dos props: 
        {"\n"}{'\t'}{texto}
        {"\n"}{'\t'}{children} </Text>
        )
      };
    
    export default function App() {
      return (
        <View style={styles.container}>
        <Text>Texto Fijo</Text>

        <ComponenteTexto texto={'Este componente usa una prop comun'}/>
        
        <ComponenteTextoPropChildren>
          Este componente utiliza las props children
        </ComponenteTextoPropChildren>

        <ComponenteTextoPropsCombinadas texto={'Valor de la Prop comun'}>
          Valor del children
        </ComponenteTextoPropsCombinadas>
        <StatusBar style="auto" />
        </View>
        );
      }
      
      const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
        },
      });
      