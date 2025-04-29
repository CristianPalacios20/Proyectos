export default function Tareas({ data, isLoading }) {
    return (
      <View style={stylesTareas.content}>
        <View style={stylesTareas.taskBody}>
          <View>
            <Text style={stylesTareas.title}>Tareas</Text>
          </View>
  
          {isLoading ? (
            <ActivityIndicator size={"large"} color={"#007BFF"} style={{ flex: 1 }} />
          ) : !data || data.length === 0 ? (
            <Text>No se encontraron chats.</Text>
          ) : (
            <ScrollView>
              {data.map((chat) => (
                <View key={chat.chatId} style={{ marginBottom: 20 }}>
                  <Text style={stylesTareas.chatTitle}>{chat.title}</Text> {/* mostrar título del chat */}
  
                  {chat.tasks && chat.tasks.length > 0 ? (
                    chat.tasks.map((task) => (
                      <View key={task.taskId} style={{ marginLeft: 10 }}>
                        <Text>
                          {task.name} - {task.status} ({task.priority})
                        </Text>
                      </View>
                    ))
                  ) : (
                    <Text style={{ marginLeft: 10, color: 'gray' }}>No hay tareas.</Text>
                  )}
                </View>
              ))}
            </ScrollView>
          )}
        </View>
      </View>
    );
  }
  