import { View, Text, Alert } from "react-native";
import { styles } from "./style";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "@/styles/colors";
import { taskStorage } from "@/storage/link-storage";
import { router } from "expo-router";

type Props = {
  name: string;
};

export function Task({ name }: Props) {
  const taskRemove = async () => {
    try {
      await taskStorage.remove(name);
    } catch (error) {
      Alert.alert("Error on remove task");
      console.log(error);
    }
  };

  const handleRemove = () => {
    try {
      Alert.alert("Remove Task", "You want to remove the task?", [
        { style: "cancel", text: "Cancel" },
        { text: "Remove", style: "destructive", onPress: taskRemove },
      ]);
    } catch (error) {
      Alert.alert("Error on remove task");
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.taskContainer}>
        <Text style={styles.taskTitle} numberOfLines={1}>
          {name}
        </Text>

        <View style={styles.iconContainer}>
          <MaterialIcons
            name="edit"
            size={25}
            color={colors.gray[800]}
            onPress={() => router.navigate(`/edit?name=${name}`)}
          />
          <MaterialIcons
            name="delete"
            size={25}
            color={colors.gray[800]}
            onPress={handleRemove}
          />
        </View>
      </View>
    </View>
  );
}
