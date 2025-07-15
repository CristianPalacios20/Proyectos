import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

import InvitarAmigos from "./InvitarAmigos";
import CustomSwitch from "../CustomSwitch";

import iconArrow from "../../../assets/icons/iconArrowBack.png";
import iconCompartir from "../../../assets/icons/iconCompartir.png";
import iconEmail from "../../../assets/icons/iconEmail.png";
import iconQR from "../../../assets/icons/iconQR.png";
import iconTime from "../../../assets/icons/iconTime.png";

export default function InformacionScreen({ route }) {
  const { label } = route.params;
  const navigation = useNavigation();

  const [switchStates, setSwitchStates] = useState(false);
  function getContenidoPorLabel(label) {
    switch (label) {
      case "Cuenta":
        return {
          items: [
            { label: "Solicitar info de mi cuenta", icon: iconArrow },
            { label: "Cambiar correo electrónico", icon: iconArrow },
            { label: "Actualizar número de teléfono", icon: iconArrow },
            { label: "Clave de acceso", icon: iconArrow },
            { label: "Auteestnticación de dos pasos", icon: iconArrow },
            { label: "Idioma", icon: iconArrow },
            { label: "Historial de actividad", icon: "" },
            {
              isGroup: true,
              subItems: [
                { label: "Desactivar mi cuenta", icon: iconArrow },
                { label: "Eliminar mi cuenta", icon: iconArrow },
              ],
            },
          ],
        };
        break;
      case "Privacidad":
        return {
          items: [
            { label: "Bloquear perfil", icon: iconArrow },
            { label: "Aparición en resultados de búsqueda", icon: iconArrow },
            { label: "Quién puede ver mis tareas", icon: iconArrow },
            {
              isGroup: true,
              subItems: [
                {
                  label: "Solicitud de contacto",
                  isSwitch: true,
                  icon: (
                    <CustomSwitch
                      isOn={switchStates}
                      onToggle={() => setSwitchStates(!switchStates)}
                    />
                  ),
                },
                {
                  label: "Visisbilidad del estado en línea",
                  isSwitch: true,
                  icon: (
                    <CustomSwitch
                      isOn={switchStates}
                      onToggle={() => setSwitchStates(!switchStates)}
                    />
                  ),
                },
              ],
            },
            {
              isGroup: true,
              subItems: [
                { label: "Eliminar historial de actividad", icon: iconArrow },
                { label: "Acceso de terceros", icon: iconArrow },
              ],
            },
          ],
        };
        break;
      case "Notificaciones":
        return {
          items: [
            {
            //   Title: "Preguntas frecuentes",
              isGroup: true,
              subItems: [
                {
                  label: "Mostrar notificaciones",
                  isSwitch: true,
                  icon: (
                    <CustomSwitch
                      isOn={switchStates}
                      onToggle={() => setSwitchStates(!switchStates)}
                    />
                  ),
                },
                { label: "Prioridad de notificaciones", icon: iconArrow },
                { label: "Tipo de notificaciones", icon: iconArrow },
              ],
            },
            {
            //   Title: "Sonido y vibración",
              isGroup: true,
              subItems: [
                { label: "Tipo de notificaciones", icon: iconArrow },
                {
                  label: "Vibración",
                  isSwitch: true,
                  icon: (
                    <CustomSwitch
                      isOn={switchStates}
                      onToggle={() => setSwitchStates(!switchStates)}
                    />
                  ),
                },
              ],
            },
            {
            //   Title: "Recordatorios",
              isGroup: true,
              subItems: [
                {
                  label: "Recodatorio personalizados por tareas",
                  icon: iconArrow,
                },
                { label: "Frecuencia", icon: iconArrow },
              ],
            },
          ],
        };
        break;
      case "Ayuda":
        return {
          items: [
            { label: "Cómo crear una tarea", icon: iconArrow },
            {
              label: "Cómo compartir tareas con otros usuarios",
              icon: iconArrow,
            },
            {
              label: "¿Qué significa los colores de prioridad?",
              icon: iconArrow,
            },
            {
              label: "Buscar ayuda",
              icon: iconArrow,
            },

            {
              isGroup: true,
              subItems: [
                { label: "Conectar con soporte", icon: iconArrow },
                { label: "Enviar comentarios o sugerencias", icon: iconArrow },
              ],
            },
          ],
        };
        break;
      case "Invitar a amigos":
        return {
          items: [
            { icon: iconCompartir, label: "Compartir enlace de invitación" },
            { icon: iconEmail, label: "Enviar invitación por correo" },
            { icon: iconQR },
            { icon: iconTime, label: "Historial de invitaciones enviadas" },
          ],
        };
        break;
      default:
        break;
    }
  }

  const { items } = getContenidoPorLabel(label);

  return (
    <SafeAreaView edges={["top"]} style={style.contenedor}>
      <View style={style.body}>
        <View style={style.header}>
          <TouchableOpacity
            style={style.botonRegresar}
            onPress={() => navigation.goBack()}
          >
            <Image source={iconArrow} style={style.iconArrowBack} />
          </TouchableOpacity>
          <Text style={style.label}>{label}</Text>
        </View>

        <View style={style.contendorItems}>
          {label === "Invitar a amigos" ? (
            <View style={style.invitacionCustom}>
              {items.map((item, index) => {
                const esQR = item.icon === iconQR;

                return (
                  <TouchableOpacity
                    key={index}
                    style={esQR ? style.qrBoton : style.invitarBoton}
                  >
                    {item.icon && (
                      <Image
                        source={item.icon}
                        style={esQR ? style.qrIcono : style.invitarIcono}
                      />
                    )}
                    {item.label && (
                      <Text style={esQR ? style.qrTexto : style.invitarTexto}>
                        {item.label}
                      </Text>
                    )}
                  </TouchableOpacity>
                );
              })}
            </View>
          ) : (
            <>
              {/* Ítems normales */}
              <View style={style.items}>
                {items
                  .filter((item) => !item.isGroup)
                  .map((item, index) => (
                    <TouchableOpacity key={index} style={style.boton}>
                      <Text style={style.texto}>{item.label}</Text>
                      {item.icon !== "" && (
                        <Image source={item.icon} style={style.icono} />
                      )}
                    </TouchableOpacity>
                  ))}
              </View>

              {/* Ítems agrupados */}
              {items
                .filter((item) => item.isGroup && item.subItems)
                .map((item, index) => (
                  <View key={index} style={style.subItems}>
                    {item.label && (
                      <Text style={style.subtituloGrupo}>{item.label}</Text>
                    )}
                    {item.subItems.map((subItem, subIndex) => {
                      const switchKey = `${label}-${subItem.label}`;
                      const isOn = switchStates[switchKey] || false;

                      return (
                        <TouchableOpacity
                          key={subIndex}
                          style={style.botonSecundario}
                        >
                          <Text
                            style={[
                              style.texto,
                              (label === "Cuenta" || label === "Ayuda") &&
                                style.textobotonSecundario,
                            ]}
                          >
                            {subItem.label}
                          </Text>
                          {subItem.isSwitch ? (
                            <CustomSwitch
                              isOn={isOn}
                              onToggle={() => setSwitchStates((prev) =>({
                                ...prev,
                                [switchKey]: !isOn
                              }))}
                            />
                          ) : (
                            subItem.icon && (
                              <Image
                                source={subItem.icon}
                                style={style.icono}
                              />
                            )
                          )}
                        </TouchableOpacity>
                      );
                    })}
                  </View>
                ))}
            </>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  contenedor: {
    flex: 1,
    padding: 20,
    backgroundColor: "#ECF0F1",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 20,
  },

  botonRegresar: {
    position: "absolute",
    top: 6,
    left: 0,
  },

  iconArrowBack: {
    width: 20,
    height: 20,
  },

  contendorItems: {
    marginTop: 40,
    gap: 40,
  },

  componente: {
    flex: 1,
  },

  label: {
    fontWeight: "600",
    fontSize: 25,
  },

  items: {
    gap: 10,
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 10,
  },

  boton: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  texto: {
    padding: 5,
    fontSize: 16,
    maxWidth: "95%",
  },

  icono: {
    width: 20,
    height: 20,
    transform: [{ rotate: "180deg" }],
  },

  subItems: {
    gap: 10,
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 10,
  },

  botonSecundario: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  textobotonSecundario: {
    color: "#0099FF",
  },

  //   Estilos para invitar amigos
  invitacionCustom: {
    padding: 10,
    borderRadius: 12,
    gap: 15,
  },
  invitarBoton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    gap: 10,
  },
  invitarTexto: {
    fontSize: 16,
  },
  invitarIcono: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },
  qrBoton: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    width: "100%",
    padding: 20,
    borderRadius: 10,
    // backgroundColor: "#fff",
  },

  qrIcono: {
    width: 180,
    height: 180,
    resizeMode: "contain",
  },

  qrTexto: {
    marginTop: 10,
    fontSize: 16,
    color: "#009966",
  },
});
