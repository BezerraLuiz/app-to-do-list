import { View, Text, TouchableOpacity, FlatList, Alert } from "react-native";
import { styles } from "./styles";
import { Task } from "@/components/task";
import { router, useFocusEffect } from "expo-router";
import { taskStorage, TaskStorage } from "@/storage/link-storage";
import { useCallback, useState } from "react";

export default function Index() {
  const [tasks, setTasks] = useState<TaskStorage[]>([]);

  const getTasks = async () => {
    try {
      const response = await taskStorage.get();

      setTasks(response);
    } catch (error) {
      Alert.alert("Error on get tasks", "Its impossible to get tasks");
      console.log(error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      getTasks();
    }, [tasks])
  );

  return (
    <View style={styles.container}>
      <View style={styles.todoContainer}>
        <Text style={styles.titleList}>Task List</Text>
        <View style={styles.divisorTitle}></View>

        <TouchableOpacity
          activeOpacity={0.4}
          onPress={() => router.navigate("/add")}
        >
          <Text style={styles.btnAdd}>Add Task</Text>
        </TouchableOpacity>

        <FlatList
          data={tasks}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => {
            return <Task name={item.name} />;
          }}
        />
      </View>
    </View>
  );
}
