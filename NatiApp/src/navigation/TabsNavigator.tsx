import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../screens/tabs/home";
import Message from "../screens/tabs/message";
import Profile from "../screens/tabs/profile";

const Tab = createBottomTabNavigator();

export default function TabsNavigator() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Message" component={Message} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
