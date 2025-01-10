import { TouchableOpacity, View, Text, Alert } from "react-native";
import { styles } from "./style";
import { router, useLocalSearchParams } from "expo-router";
import { colors } from "@/styles/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { Input } from "@/components/input";
import { taskStorage } from "@/storage/link-storage";

export default function Edit() {
  const { name } = useLocalSearchParams();
  const [oldName, setOldName] = useState("");
  const [newName, setNewName] = useState("");

  const handleEdit = async () => {
    if (!newName) {
      return Alert.alert("Enter a new task name");
    }

    await taskStorage.update(oldName, newName);

    Alert.alert("Success", "Task updated with success", [
      {
        text: "OK",
        onPress: () => router.back(),
      },
    ]);

    let response = await taskStorage.get();

    console.log(response);
  };

  useEffect(() => {
    if (name) {
      setOldName(String(name));
      setNewName(String(name));
    }
  }, [name]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity activeOpacity={0.5} onPress={() => router.back()}>
          <MaterialIcons name="arrow-back" size={20} color={colors.gray[600]} />
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Edit Task</Text>
      <Input
        placeholder="New Task Name"
        value={newName}
        onChangeText={(value) => setNewName(value)}
      />

      <TouchableOpacity
        style={styles.btnUpdate}
        activeOpacity={0.5}
        onPress={handleEdit}
      >
        <Text style={styles.btnText}>DONE</Text>
      </TouchableOpacity>
    </View>
  );
}
