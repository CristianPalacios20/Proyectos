import { useEffect } from "react";
import { View } from "react-native-animatable";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

export default function AnimatedScreenWrapper({
  children,
  animacion = "fade" || "slideUp" || "slideUp" || "slideLeft",
  delay = 0,
  duracion = 400,
}) {
  const opacity = useSharedValue(animacion === "fade" ? 0 : 1);
  const translateY = useSharedValue(animacion === "slideUp" ? 30 : 0);
  const translateX = useSharedValue(animacion === "slideLeft" ? 30 : 0);
  const scale = useSharedValue(animacion === "scale" ? 0.8 : 1);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      transform: [
        { translateY: translateY.value },
        { translateX: translateX.value },
        { scale: scale.value },
      ],
    };
  }, []);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      if (animacion === "fade") opacity.value = withTiming(1, { duracion });
      if (animacion === "slideUp")
        translateY.value = withTiming(0, { duracion });
      if (animacion === "slideLeft")
        translateX.value = withTiming(0, { duracion });
      if (animacion === "scale") scale.value = withTiming(0, { duracion });
    });
    return () => clearImmediate.apply(timeOut);
  }, delay);

  return <Animated.View style={[{ flex: 1 }, animatedStyle]}> {children}</Animated.View>;
}
