import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import CircularProgress from "../../components/progress/CircularProgress";
import acciones from "../../data/acciones.json";

import vertor8 from "../../assets/images/Vector8.png";
import iconBack from "../../assets/icons/iconBack.png";
import iconCamera from "../../assets/icons/IconCamera.png";
import iconGroup from "../../assets/icons/iconGroup.png";
import iconEdit from "../../assets/icons/IconEdit.png";
import iconArrowLeft from "../../assets/icons/iconArrowLeft.png";
import iconos from "../../data/iconos";
import { BlurView } from "expo-blur";
import { useAuth } from "../../context/AuthContext";

export default function Profile({ navigation }: any) {
  const {logout} = useAuth()
  return (
    <View style={styles.container}>
      {/* <StatusBar /> */}
      <ImageBackground source={vertor8} style={styles.headerBackground}>
        <SafeAreaView style={styles.safeArea} edges={["top"]}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}
          >
            <Image source={iconBack} style={styles.backIcon} />
          </TouchableOpacity>
          <View style={styles.headerContainer}>
            {/* Avatar */}
            <View style={styles.avatarContainer}>
              <Text style={styles.avatarText}>CP</Text>
              <View style={styles.contentAvatarIcon}>
                <Image source={iconCamera} style={styles.avatarIcon} />
              </View>
            </View>

            {/* Información del perfil */}
            <View style={styles.profileContainer}>
              <View style={styles.profileInfo}>
                <Text style={styles.userName}>Cristian Palacios</Text>

                <View style={styles.roleContainer}>
                  <Text style={styles.roleText}>Administrador</Text>
                </View>

                <View style={styles.groupContainer}>
                  <Image source={iconGroup} style={styles.groupIcon} />
                  <Text style={styles.groupText}>
                    Natillera los ahorradores
                  </Text>
                </View>
              </View>

              {/* Botón editar */}
              <TouchableOpacity style={styles.editButton}>
                <Image source={iconEdit} style={styles.editIcon} />
                <Text style={styles.editButtonText}>Editar perfil</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </ImageBackground>

      {/* Contenido */}
      <View style={styles.contentContainer}>
        <View style={styles.summaryCard}>
          <View style={styles.summaryImageContainer}>
            <Image style={styles.summaryImage} />
          </View>

          <View style={styles.summaryInfoContainer}>
            <Text style={styles.summaryTitle}>Resumen de mi natillera</Text>

            <View style={styles.summaryStatsContainer}>
              <View style={styles.statItem}>
                <Text style={styles.statValue}>24</Text>
                <Text style={styles.statLabel}>Participantes</Text>
              </View>

              <View style={styles.statItem}>
                <Text style={styles.statValue}>8.750.000</Text>
                <Text style={styles.statLabel}>Administrados</Text>
              </View>

              <View style={styles.progressContainer}>
                <View style={styles.progressInfo}>
                  <Text style={styles.progressValue}>90%</Text>
                  <Text style={styles.progressLabel}>Aportes</Text>
                </View>

                <View style={styles.progressBarContainer}>
                  <CircularProgress porcentaje={90} />
                </View>
              </View>
            </View>
          </View>
        </View>
        <ScrollView style={{ flex: 1 }}>
          <View style={styles.sectionsContainer}>
            {acciones.map((seccion) => (
              <View key={seccion.id} style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>{seccion.titulo}</Text>
                <View style={styles.contentActions}>
                  {seccion.opciones.map((opcion) => (
                    <TouchableOpacity
                      key={opcion.id}
                      style={styles.optionButton}
                      onPress={() => navigation.navigate(opcion.pantalla)}
                    >
                      <Image
                        source={iconos[opcion.icono as keyof typeof iconos]}
                        style={styles.optionIcon}
                      />
                      <View style={styles.optionInfo}>
                        <Text style={styles.optionText}>{opcion.nombre}</Text>
                        <Image
                          source={iconArrowLeft}
                          style={styles.optionArrow}
                        />
                      </View>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
        <BlurView intensity={10} style={styles.logoutContainer}>
          <TouchableOpacity onPress={logout} style={styles.logoutButton}>
            <Text style={styles.logoutButtonText}>Cerrar sesión</Text>
          </TouchableOpacity>
        </BlurView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },

  headerBackground: {
    height: 250,
    paddingHorizontal: 20,
  },

  safeArea: {},

  backButton: {
    width: 40,
  },

  backIcon: {
    width: 30,
    height: 30,
  },

  headerContainer: {
    flexDirection: "row",
    paddingVertical: 20,
    gap: 15,
  },

  avatarContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: 105,
    height: 105,
    borderWidth: 6,
    borderColor: "#fff",
    borderRadius: 100,
  },

  avatarText: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#fff",
  },

  contentAvatarIcon: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    right: 0,
    bottom: 0,
    width: 30,
    height: 30,
    backgroundColor: "#fff",
    borderRadius: 100,
  },

  avatarIcon: {
    width: 20,
    height: 20,
  },

  profileContainer: {
    gap: 22,
  },

  profileInfo: {
    gap: 8,
  },

  userName: {
    fontSize: 18,
    fontWeight: "600",
    color: "#fff",
  },

  roleContainer: {
    width: 102,
    paddingHorizontal: 10,
    paddingVertical: 4,
    backgroundColor: "#2DB96427",
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "#2DB96480",
  },

  roleText: {
    fontSize: 12,
    color: "#fff",
  },

  groupContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  groupIcon: {
    width: 20,
    height: 20,
  },

  groupText: {
    color: "#fff",
  },

  editButton: {
    flexDirection: "row",
    alignItems: "center",
    width: 120,
    height: 30,
    paddingHorizontal: 10,
    paddingVertical: 4,
    gap: 8,
    backgroundColor: "#fff",
    borderRadius: 5,
  },

  editIcon: {
    width: 14,
    height: 14,
    resizeMode: "contain",
  },

  editButtonText: {
    fontWeight: "600",
  },

  contentContainer: {
    flex: 1,
    // borderWidth: 1,
  },

  summaryCard: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: "#fff",
    // borderWidth: 1,
  },

  summaryImageContainer: {
    width: 50,
    height: 50,
    backgroundColor: "#2DB96427",
    borderRadius: 100,
  },

  summaryImage: {},

  summaryInfoContainer: {
    flex: 1,
    gap: 10,
  },

  summaryTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },

  summaryStatsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  statItem: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
    gap: 3,
    borderRightWidth: 1,
    borderColor: "#B3B6B7",
  },

  statValue: {
    fontSize: 16,
    fontWeight: "bold",
  },

  statLabel: {
    fontSize: 12,
    fontWeight: "600",
    color: "#555555",
  },

  progressContainer: {
    flexDirection: "row",
    gap: 8,
  },

  progressInfo: {
    alignItems: "center",
    justifyContent: "center",
  },

  progressValue: {
    fontSize: 16,
    fontWeight: "bold",
  },

  progressLabel: {
    fontSize: 12,
    fontWeight: "600",
    color: "#555555",
  },

  progressBarContainer: {},

  progressBar: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    width: 40,
    height: 40,
    borderWidth: 6,
    borderColor: "#2DB964",
    borderRadius: 100,
  },

  sectionsContainer: {
    flex: 1,
    padding: 10,
    paddingBottom: 40,
    gap: 25,
  },

  sectionContainer: {
    height: 164,
    gap: 15,
  },

  contentActions: {
    height: 140,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
  },

  sectionTitle: {
    fontSize: 14,
    fontWeight: "600",
    textTransform: "uppercase",
    color: "#7B7D7D",
  },

  optionButton: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 35,
    paddingHorizontal: 20,
    gap: 14,
  },

  optionContent: {
    // borderWidth: 1,
    flexDirection: "row",
  },

  optionInfo: {
    flex: 1,
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderColor: "#B3B6B7",
  },

  optionIcon: {
    width: 20,
    height: 20,
  },

  optionText: {
    fontSize: 16,
  },

  optionArrow: {
    width: 20,
    height: 20,
  },

  logoutContainer: {},

  logoutButton: {
    alignItems: "center",
    justifyContent: "center",
    width: 240,
    height: 60,
    backgroundColor: "#E7180B20",
    borderTopRightRadius: "80%",
  },

  logoutButtonText: {
    fontSize: 16,
    color: "red",
    fontWeight: "bold",
  },
});
