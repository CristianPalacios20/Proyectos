import { View } from "react-native-animatable";
import AnimatedScreenWrapper from "../animaciones/AnimatedScreenWrapper";
import Tareas from "../screen/Tareas";
import Ajustes from "../screen/Ajustes";
import BuscarOCrear from "../screen/BuscarTarea";
import CrearTarea from "../screen/CrearTarea";
import EditarPerfil from "../screen/EditarPerfil";

import { SafeAreaView } from "react-native-safe-area-context";
import { useContext } from "react";
import { useChat } from "../context/chatContext";

export default function MainContent({
  selectedTab,
  setSelectedTab,
  selectedChat,
  isLoading,
  onLogout,
  openModal,
}) {
  const { dataChats = [] } = useChat();

  const renderScreen = () => {
    switch (selectedTab) {
      case "Tareas":
        return (
          <Tareas
            data={dataChats}
            isLoading={isLoading}
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
            openModal={openModal}
          />
        );
      case "Ajustes":
        return (
          <SafeAreaView edges={["top"]} style={{ flex: 1 }}>
            <AnimatedScreenWrapper key={selectedTab} animacion="slideLeft">
              <Ajustes onLogout={onLogout} setSelectedTab={setSelectedTab} />
            </AnimatedScreenWrapper>
          </SafeAreaView>
        );

      case "Buscar":
        return (
          <SafeAreaView edges={["top"]} style={{ flex: 1 }}>
            <AnimatedScreenWrapper key={selectedTab} animacion="slideUp">
              <BuscarOCrear
                selectedTab={selectedTab}
                setSelectedTab={setSelectedTab}
              />
            </AnimatedScreenWrapper>
          </SafeAreaView>
        );

      case "CrearTarea":
        return (
          <CrearTarea
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
            openModal={openModal}
          />
        );

      case "EditarPerfil":
        return (
          <SafeAreaView edges={["top"]} style={{ flex: 1 }}>
            <AnimatedScreenWrapper key={selectedTab} animacion="slideLeft">
              <EditarPerfil
                selectedTab={selectedTab}
                setSelectedTab={setSelectedTab}
              />
            </AnimatedScreenWrapper>
          </SafeAreaView>
        );
    }
  };
  return <View style={{ flex: 1 }}>{renderScreen()}</View>;
}
