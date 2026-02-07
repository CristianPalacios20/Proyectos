import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../screens/auth/login";
import Step1 from "../screens/auth/step1";
import Step2 from "../screens/auth/step2";
import Step3 from "../screens/auth/step3";
import Step4 from "../screens/auth/step4";

const Stack = createNativeStackNavigator();

export default function AuthNavigator({ onloginSuccess }: any) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login">
        {(props) => <Login {...props} />}
      </Stack.Screen>
      <Stack.Screen name="Step1">
        {(props) => <Step1 {...props} onLoginSuccess={onloginSuccess} />}
      </Stack.Screen>
      <Stack.Screen name="Step2">
        {(props) => <Step2 {...props} onLoginSuccess={onloginSuccess} />}
      </Stack.Screen>
      <Stack.Screen name="Step3">
        {(props) => <Step3 {...props} />}
      </Stack.Screen>
      <Stack.Screen name="Step4">
        {(props) => <Step4 {...props} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}
