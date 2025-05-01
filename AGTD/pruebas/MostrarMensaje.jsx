import React from 'react'
import { View, Text } from 'react-native'

export default function MostrarMensaje({mensaje2}) {
  return (
    <View>
        <Text>
            Mensaje recibido: {mensaje2}
        </Text>
    </View>
  )
}
