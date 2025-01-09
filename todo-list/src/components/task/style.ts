import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "90%",
    height: 45,

    marginTop: 15,

    borderRadius: 5,
    backgroundColor: colors.gray[300],
  },
  task: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  taskTitle: {
    fontSize: 20,
    fontWeight: 600,
  },
  iconContainer: {},
});
