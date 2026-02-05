import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../screens/auth/login";
import Step1 from "../screens/auth/step1";
import Step2 from "../screens/auth/step2";
import Step3 from "../screens/auth/step3";
import Step4 from "../screens/auth/step4";

const Stack = createNativeStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Step1" component={Step1} />
      <Stack.Screen name="Step2" component={Step2} />
      <Stack.Screen name="Step3" component={Step3} />
      <Stack.Screen name="Step4" component={Step4} />
    </Stack.Navigator>
  );
}
