import { View } from "react-native-animatable";
import AnimatedScreenWrapper from "../animaciones/AnimatedScreenWrapper";
import Tareas from "../screen/Tareas";
import Ajustes from "../screen/Ajustes";
import BuscarOCrear from "../screen/BuscarTarea";
import CrearTarea from "../screen/CrearTarea";
import { SafeAreaView } from "react-native-safe-area-context";

export default function MainContent({
  selectedTab,
  setSelectedTab,
  selectedChat,
  isLoading,
  dataChats,
  onLogout,
}) {
  const renderScreen = () => {
    switch (selectedTab) {
      case "Tareas":
        return (
          <Tareas
            data={dataChats}
            isLoading={isLoading}
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
          />
        );
      case "Ajustes":
        return (
          <Stack.Screen name="Ajustes">
            <Ajustes onLogout={onLogout} setSelectedTab={setSelectedTab} />
          </Stack.Screen>
        );
        break;
      case "Buscar":
        return (
          <AnimatedScreenWrapper animacion="slideUp">
            <BuscarOCrear
              selectedTab={selectedTab}
              setSelectedTab={setSelectedTab}
            />
          </AnimatedScreenWrapper>
        );
        break;
      case "CrearTarea":
        return (
          <AnimatedScreenWrapper animacion="slideUp">
            <CrearTarea
              selectedTab={selectedTab}
              setSelectedTab={setSelectedTab}
            />
          </AnimatedScreenWrapper>
        );
      default:
        return (
          <Tareas selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        );
        break;
    }
  };
  return <View style={{ flex: 1 }}>{renderScreen()}</View>;
}
