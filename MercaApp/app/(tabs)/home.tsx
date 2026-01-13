import { router } from "expo-router";
import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

import iconNotification from "../../assets/icons/IconNotification.png";
import iconMessage from "../../assets/icons/iconMessage.png";
import iconToken from "../../assets/icons/iconToken.png";
import iconCarrito from "../../assets/icons/iconCarrito.png";
import iconMenu from "../../assets/icons/iconMenu.png";
import iconOk from "../../assets/icons/iconOk.png";
import iconTime from "../../assets/icons/iconTime.png";

export default function Home() {
  const tareas = [
    {
      icono: iconCarrito,
      cantidad: 12,
      texto: "Tiendas",
    },
    {
      icono: iconMenu,
      cantidad: 12,
      texto: "Pendientes",
    },
    {
      icono: iconOk,
      cantidad: "0",
      texto: "Completadas",
    },
    {
      icono: iconTime,
      texto: "Próxima visita",
      tipo: "proximaVisita",
    },
  ];

  {
    tareas.map((tarea, index) => {
      const tieneContenido = tarea.icono || tarea.cantidad || tarea.texto;

      if (!tieneContenido) return null;
    });
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.profileContainer}>
          <View style={styles.avatarContainer}>
            <Text style={styles.avatarText}>CP</Text>
          </View>

          <View style={styles.userInfo}>
            <Text style={styles.userName}>Cristian Palacios</Text>
            <View style={styles.roleContainer}>
              <Image source={iconToken} style={styles.roleIcon} />
              <Text style={styles.roleText}>mercaderista</Text>
            </View>
          </View>
        </View>

        <View style={styles.actionsContainer}>
          <TouchableOpacity
            onPress={() => router.push("/")}
            style={styles.actionWrapper}
          >
            <Image source={iconNotification} style={styles.actionIcon} />
            <View style={styles.badgeContainer}></View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => router.push("/message")}
            style={[styles.actionWrapper]}
          >
            <Image
              source={iconMessage}
              style={[styles.actionIcon, styles.iconMessage]}
            />
            <View
              style={[styles.badgeContainer, styles.badgeContainerMessage]}
            ></View>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.menu}>
        <Text style={styles.title}>Resumen del día</Text>

        <View style={styles.listContainer}>
          {tareas.map((tarea, index) => {
            const tieneContenido = tarea.icono || tarea.cantidad || tarea.texto;

            if (!tieneContenido) return null;

            return (
              <View
                key={index}
                style={[
                  styles.item,
                  tarea.tipo === "proximaVisita" && styles.proximaVisita,
                ]}
              >
                {tarea.icono && (
                  <Image source={tarea.icono} style={styles.itemIcon} />
                )}
                {tarea.cantidad && (
                  <Text style={styles.itemCantidad}>{tarea.cantidad}</Text>
                )}
                {tarea.texto && (
                  <Text style={styles.itemTexto}>{tarea.texto}</Text>
                )}
              </View>
            );
          })}
        </View>
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "white",
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  avatarContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: 55,
    height: 55,
    backgroundColor: "#E7E5E4",
    borderRadius: 50,
  },

  avatarText: {
    fontSize: 24,
    fontWeight: "500",
    color: "#007AFF",
  },

  userInfo: {
    gap: 4,
  },

  userName: {
    fontSize: 16,
    fontWeight: "bold",
  },

  roleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: 113,
    height: 26,
    backgroundColor: "#E7E5E4",
    borderRadius: 5,
  },

  roleIcon: {
    width: 20,
    height: 20,
  },

  roleText: {},

  actionsContainer: {
    position: "relative",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },

  actionWrapper: {},

  actionIcon: {
    width: 25,
    height: 25,
    resizeMode: "contain",
  },

  iconMessage: {
    width: 30,
    height: 27,
  },

  badgeContainer: {
    position: "absolute",
    width: 10,
    height: 10,
    backgroundColor: "green",
    borderRadius: 20,
    left: 15,
  },

  badgeContainerMessage: {
    left: 19,
  },

  menu: {
    marginTop: 40,
    gap: 20,
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
  },

  listContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  item: {
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
  },

  proximaVisita: {
    gap: 28,
    // borderWidth: 1,
    justifyContent: "space-around",
  },

  itemIcon: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },

  itemCantidad: {},
  itemTexto: {},
});
