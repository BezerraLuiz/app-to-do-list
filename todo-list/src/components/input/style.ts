import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "90%",
    height: 45,
    padding: 15,

    borderRadius: 5,
    backgroundColor: colors.gray[900],
    color: colors.white[100],
  },
});
