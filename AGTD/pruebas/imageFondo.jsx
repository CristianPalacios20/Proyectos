import React from 'react';
import { ImageBackground, Text, StyleSheet, View } from 'react-native';

export default function ImageFondo() {
  return (
    <ImageBackground
      source={require('../assets/img/binario3.png')} // o una URL
      style={styles.fondo}
      resizeMode="cover" // "cover", "contain", "stretch", etc.
    >
      <View style={styles.contenido}>
        <Text style={styles.texto}>Hola con fondo</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contenido: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // oscurece si quieres contraste
    padding: 20,
    borderRadius: 10,
  },
  texto: {
    color: 'white',
    fontSize: 24,
  },
});
