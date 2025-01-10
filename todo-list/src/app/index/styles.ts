import { StyleSheet } from "react-native";
import { colors } from "@/styles/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  todoContainer: {
    justifyContent: "center",
    alignItems: "center",

    width: "85%",
    height: "90%",

    borderRadius: 10,
    backgroundColor: colors.gray[200],
  },
  titleList: {
    fontSize: 30,
    fontWeight: 600,
    marginTop: 15,
  },
  divisorTitle: {
    width: "30%",
    height: 1,

    marginVertical: 10,

    backgroundColor: colors.gray[500],
  },
  btnAdd: {
    fontSize: 15,
    padding: 10,

    borderRadius: 5,
    backgroundColor: colors.green[300],
    color: colors.white[100],
  },
});
