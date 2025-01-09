import { View, Text } from "react-native";
import { styles } from "./style";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "@/styles/colors";

export function Task() {
  return (
    <View style={styles.container}>
      <View style={styles.task}>
        <Text style={styles.taskTitle} numberOfLines={1}>
          Nome
        </Text>

        <View style={styles.iconContainer}>
          <MaterialIcons name="edit" size={25} color={colors.green[300]} />
        </View>
      </View>
    </View>
  );
}
