import React from 'react'
import { View } from 'react-native'

export default function Contenedor({children}) {
  return(
    <View style={{margin: 10,}}>
        {children}
    </View>
  )
}
