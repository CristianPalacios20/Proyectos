// ChatScreen.js
// import React from 'react';
import { View, Text } from 'react-native';

export default function ChatScreen({ route }) {
  const { chatId, userName, message } = route.params;

  return (
    <View style={{ flex: 1, padding: 20 }}>
      {/* <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
        Chat {userName}
      </Text> */}
      {/* <Text>ID del chat: {chatId}</Text> */}
      <Text>{message}</Text>
      {/* Aquí puedes renderizar los mensajes según el chatId */}
    </View>
  );
}
