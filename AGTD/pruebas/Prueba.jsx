import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { EvilIcons, FontAwesome, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function NavigationHeader() {
  const navigation = useNavigation();
  const [selectedTab, setSelectedTab] = useState('Archivos');

  const tabs = [
    { name: 'Archivos', icon: <EvilIcons name="archive" size={30} /> },
    { name: 'Tareas', icon: <FontAwesome name="tasks" size={25} /> },
    { name: 'Ajustes', icon: <Ionicons name="settings" size={25} /> },
  ];

  return (
    <View style={styles.contenedor}>
      <View style={styles.nav}>
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab.name}
            style={styles.navItem}
            onPress={() => {
              setSelectedTab(tab.name);
              navigation.navigate(tab.name);
            }}
          >
            {/* Cambiar color dinámicamente */}
            {React.cloneElement(tab.icon, {
              color: selectedTab === tab.name ? '#4caf50' : 'gray'
            })}
            <Text style={[
              styles.texto,
              { color: selectedTab === tab.name ? '#4caf50' : 'gray' }
            ]}>
              {tab.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    paddingTop: 20,
    backgroundColor: '#fff',
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
  navItem: {
    alignItems: 'center',
  },
  texto: {
    marginTop: 5,
    fontSize: 14,
  },
});
