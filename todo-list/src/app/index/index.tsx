import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { Task } from "@/components/task";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.todoContainer}>
        <Text style={styles.titleList}>Task List</Text>
        <View style={styles.divisorTitle}></View>

        <TouchableOpacity activeOpacity={0.4}>
          <Text style={styles.btnAdd}>Add Task</Text>
        </TouchableOpacity>

        <Task></Task>
      </View>
    </View>
  );
}
