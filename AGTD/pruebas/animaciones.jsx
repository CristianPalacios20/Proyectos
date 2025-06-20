import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import Animated, { FadeInUp } from 'react-native-reanimated';

const DATA = Array.from({ length: 15 }, (_, i) => ({
  id: `${i}`,
  title: `Tarea #${i + 1}`,
}));

export default function AnimatedList() {
  const renderItem = ({ item, index }) => (
    <Animated.View
      entering={FadeInUp.delay(index * 100)}
      style={styles.item}
    >
      <Text style={styles.text}>{item.title}</Text>
    </Animated.View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#fff',
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: '#add8e6',
    borderRadius: 12,
  },
  text: {
    fontSize: 18,
    fontWeight: '500',
  },
});


// export default function Box() {
//   const offset = useSharedValue(0);

//   const animatedStyles = useAnimatedStyle(() => ({
//     transform: [{ translateX: offset.value }],
//   }));

//   return (
//     <View>
//       <Animated.View
//         style={[
//           { width: 100, height: 100, backgroundColor: "skyblue" },
//           animatedStyles,
//         ]}
//       />
//       <Button
//         title="Mover"
//         onPress={() => {
//           offset.value = withSpring(offset.value + 100);
//         }}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   box: {
//     width: 100,
//     height: 100,
//     backgroundColor: "tomato",
//   },
// });
