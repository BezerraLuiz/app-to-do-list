import { Input } from "@/components/input";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";

import { styles } from "./style";
import { colors } from "@/styles/colors";

import { taskStorage } from "@/storage/link-storage";
import { useState } from "react";

export default function Add() {
  const [nameTask, setNameTask] = useState("");

  const handleAdd = async () => {
    if (!nameTask) {
      return Alert.alert("Enter a task name");
    }

    await taskStorage.save({ name: nameTask });

    Alert.alert("Success", "Task added with success", [
      {
        text: "OK",
        onPress: () => router.back(),
      },
    ]);

    let response = await taskStorage.get();

    console.log(response);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity activeOpacity={0.5} onPress={() => router.back()}>
          <MaterialIcons name="arrow-back" size={20} color={colors.gray[600]} />
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Create Task</Text>
      <Input
        placeholder="Task Name"
        onChangeText={(value) => setNameTask(value)}
      />

      <TouchableOpacity
        style={styles.btnCreate}
        activeOpacity={0.5}
        onPress={handleAdd}
      >
        <Text style={styles.btnText}>DONE</Text>
      </TouchableOpacity>
    </View>
  );
}
