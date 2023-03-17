import { StyleSheet } from "react-native";
import { Color, ConstantStyles } from "../Themes";

export const styles = StyleSheet.create({
  childrenContentStyle: {
    flex: 1,
    marginHorizontal: ConstantStyles.spacing4,
  },
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
  },
  contentStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    width: "100%",
    height: "100%",
    borderRadius: ConstantStyles.borderRadius8,
  },
  ButtonLeftStyles: {
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: ConstantStyles.spacing4,
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
  overflowHidden: {
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
  flexRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
