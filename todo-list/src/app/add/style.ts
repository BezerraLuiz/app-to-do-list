import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    justifyContent: "center",

    width: "100%",
    height: 45,

    padding: 10,

    borderBottomWidth: 1,
    borderBottomColor: colors.gray[200],
  },
  title: {
    fontSize: 30,
    fontWeight: 600,
    marginTop: 15,
    marginBottom: 15,
  },
  btnCreate: {
    justifyContent: "center",
    alignItems: "center",

    width: 100,
    height: 35,

    padding: 5,
    marginTop: 15,

    borderRadius: 5,
    backgroundColor: colors.green[300],
  },
  btnText: {
    fontSize: 18,
    fontWeight: 600,
    color: colors.gray[950],
  },
});
