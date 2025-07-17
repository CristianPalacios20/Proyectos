import { useEffect } from "react";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

export default function AnimatedScreenWrapper({
  children,
  animacion = "fade",
  delay = 0,
  duration = 400,
}) {
  const opacity = useSharedValue(animacion === "fade" ? 0 : 1);
  const translateY = useSharedValue(animacion === "slideUp" ? 500 : 0);
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
  });

  useEffect(() => {
    const timeOut = setTimeout(() => {
      if (animacion === "fade") opacity.value = withTiming(1, { duration });
      if (animacion === "slideUp") translateY.value = withTiming(0, { duration });
      if (animacion === "slideLeft") translateX.value = withTiming(0, { duration });
      if (animacion === "scale") scale.value = withTiming(1, { duration });
    }, delay);

    return () => clearTimeout(timeOut);
  }, []);

  return <Animated.View style={[{ flex: 1 }, animatedStyle]}>{children}</Animated.View>;
}
