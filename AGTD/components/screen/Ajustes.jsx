import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Ajustes() {
  return (
    <View style={stylesAjustes.content}>
        <Text style={stylesAjustes.title}>Ajustes</Text>
    </View>
  )
}

const stylesAjustes = StyleSheet.create({
  content: {
    flex: 1,
  },
  title: {
    padding: 20,
    fontSize: 35,
    fontWeight: "bold",
  }
})
