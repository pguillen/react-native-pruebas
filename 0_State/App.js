import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ComponenteTexto = ({ style }) => {
    /// Hacemos Destructuring y recibe
    // 1. El valor del estado
    // 2. Una funciòn para actualizar el estado.
    const [texto, setTexto] = useState('Click me');

    const actualizaTexto = () => {
        if (texto == 'Hola mundo!') {
            setTexto('Chao mundo!');
        } else {
            setTexto('Hola mundo!');
        }
    };

    return (
        <Text style={[styles.text, style]} onPress={actualizaTexto}>
            {texto}
        </Text>
    );
};

export default function App() {
    return (
        <View style={styles.container}>
            <Text>Ejemplo Cambiando State</Text>

            <ComponenteTexto style={styles.red} />
            <ComponenteTexto style={styles.green} />
            <ComponenteTexto style={styles.blue} />
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        color: 'white',
        fontSize: 24,
        height: 100,
        width: 100,
    },
    red: {
        //flex: 1,
        backgroundColor: 'red',
    },
    green: {
        //flex: 2,
        backgroundColor: 'green',
    },
    blue: {
        // flex: 3,
        backgroundColor: 'blue',
    },
    container: {
        flex: 1,
        flexDirection: 'column-reverse',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
});
