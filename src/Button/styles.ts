import { StyleSheet } from "react-native";
import { Color, ConstantStyles } from "../Themes";

export const styles = StyleSheet.create({
  disableStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    borderRadius: ConstantStyles.borderRadius8,
    backgroundColor: Color.black3s,
  },
  enableStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    borderRadius: ConstantStyles.borderRadius8,
  },
  contentStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  ButtonLeftStyles: {
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: ConstantStyles.spacing8,
  },
  textStyle: {
    textAlign: "center",
    fontWeight: "500",
  },
  iconButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Color.black3s,
  },
  closestText: {
    fontSize: 14,
    fontWeight: "bold",
    color: Color.white6,
  },
});
