import { Pressable } from "react-native-gesture-handler";

export default function LongPressWrapper({
  children,
  onPress,
  onLongPress,
  minDuration = 800,
}) {
  return (
    <>
      <Pressable
        onPress={onPress}
        onLongPress={onLongPress}
        delayLongPress={minDuration} // tiempo mínimo para activar long press
      >
        {children}
      </Pressable>
    </>
  );
}
