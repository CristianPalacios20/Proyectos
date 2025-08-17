import { useEffect } from "react";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  runOnJS,
} from "react-native-reanimated";

export default function AnimatedScreenWrapper({
  children,
  animacion = "fade",
  delay = 0,
  duration = 400,
  visible = true,
  onFinish = () => {},
  style,
}) {
  const opacity = useSharedValue(animacion === "fade" ? 0 : 1);
  const translateY = useSharedValue(animacion === "slideUp" ? 500 : 0);
  const translateX = useSharedValue(animacion === "slideLeft" ? 300 : 0);
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
      if (visible) {
        //ANIMACIÓN DE ENTRADA.
        if (animacion === "fade") opacity.value = withTiming(1, { duration });
        if (animacion === "slideUp")
          translateY.value = withTiming(0, { duration });
        if (animacion === "slideLeft")
          translateX.value = withTiming(0, { duration });
        if (animacion === "scale") scale.value = withTiming(1, { duration });
      } else {
        //ANIMACIÓN DE SALIDA.
        if (animacion === "fade")
          opacity.value = withTiming(0, { duration }, () =>
            runOnJS(onFinish)()
          );
        if (animacion === "slideUp")
          translateY.value = withTiming(500, { duration }, () =>
            runOnJS(onFinish)()
          );
        if (animacion === "slideLeft")
          translateX.value = withTiming(300, { duration }, () =>
            runOnJS(onFinish)()
          );
        if (animacion === "scale")
          scale.value = withTiming(0.8, { duration }, () =>
            runOnJS(onFinish)()
          );
      }
    }, delay);

    return () => clearTimeout(timeOut);
  }, [visible]);

  return (
    <Animated.View style={[{ flex: 1, }, animatedStyle, style]}>
      {children}
    </Animated.View>
  );
}
