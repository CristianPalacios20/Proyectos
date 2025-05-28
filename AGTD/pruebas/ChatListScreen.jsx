// import React from 'react';
import { View, Button, SafeAreaView } from 'react-native';

export default function ChatListScreen({ navigation }) {
  const chats = [
    { id: '1', name: 'Alice', message: `Hola, este es un mensaje` },
    { id: '2', name: 'Bob', message: `Hola, este es un mensaje` },
  ];

  return (
    <SafeAreaView style={{ flex: 1, padding: 20 }}>
      {chats.map(chat => (
        <Button
          key={chat.id}
          title={`Chat con ${chat.name}`}
          onPress={() =>
            navigation.navigate('Chat', {
              chatId: chat.id,
              userName: chat.name,
              message : chat.message,
            })
          }
        />
      ))}
    </SafeAreaView>
  );
}