import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Animated,
} from "react-native";

export default function ScrollViewPrueba() {
  const [visible, setVisible] = useState(true);
  const scrollY = new Animated.Value(0);

  const handleScroll = (event) => {
    const currentOffset = event.nativeEvent.contentOffset.y;
    setVisible(currentOffset < 10); // Oculta si se ha hecho scroll
  };

  return (
    <View style={styles.container}>
      {visible && (
        <View style={styles.header}>
          <Text style={styles.headerText}>Header Visible</Text>
        </View>
      )}
      <ScrollView
        onScroll={handleScroll}
        scrollEventThrottle={16}
        contentContainerStyle={styles.scrollContent}
      >
        {Array.from({ length: 30 }, (_, i) => (
          <Text key={i} style={styles.item}>
            Ítem {i + 1}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: {
    height: 100,
    padding: 20,
    backgroundColor: "#007BFF",
  },
  headerText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    paddingTop: 40,
  },
  scrollContent: {
    padding: 20,
  },
  item: {
    paddingVertical: 10,
    fontSize: 16,
  },
});
