import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",

    width: "100%",
    height: 45,

    marginTop: 15,

    borderRadius: 5,
    backgroundColor: colors.gray[300],
  },
  taskContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",

    width: "95%",
  },
  taskTitle: {
    fontSize: 18,
    fontWeight: 600,
  },
  iconContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
  },
});
