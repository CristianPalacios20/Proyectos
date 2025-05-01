import React from 'react'
import {View, Text} from 'react-native'

export default function Message({text}) {
  return (
    // <View>
        <Text style={{fontSize: 20,}}>{text}</Text>
    // </View>
  )
}
