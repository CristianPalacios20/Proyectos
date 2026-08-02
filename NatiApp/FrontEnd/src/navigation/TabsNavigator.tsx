import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../screens/tabs/home";
import InfoNatillera from "../screens/tabs/infoNatillera";
import Personas from "../screens/tabs/personas";
import Prestamos from "../screens/tabs/prestamos";
import Aportes from "../screens/tabs/aportes";
import ResumenAnual from "../screens/tabs/resumenAnual";
import Profile from "../screens/tabs/profile";

const Tab = createBottomTabNavigator();

export default function TabsNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false, tabBarStyle: { display: "none" } }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="InfoNatillera" component={InfoNatillera} />
      <Tab.Screen name="Personas" component={Personas} />
      <Tab.Screen name="Prestamos" component={Prestamos} />
      <Tab.Screen name="Aportes" component={Aportes} />
      <Tab.Screen name="ResumenAnual" component={ResumenAnual} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
