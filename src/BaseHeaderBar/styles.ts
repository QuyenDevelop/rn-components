import { StyleSheet } from "react-native";
import { ScreenUtils, ConstantStyles, Color, TextStyles } from "../Themes";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: ScreenUtils.getStatusBarHeight(),
    borderBottomWidth: 2 * StyleSheet.hairlineWidth,
    borderBottomColor: Color.black1s,
  },
  contentContainer: {
    flex: 1,
    width: "100%",
    height: ConstantStyles.headerHeight,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: ConstantStyles.spacing8,
  },
  iconLeft: {
    minWidth: ScreenUtils.scale(40),
    maxWidth: ScreenUtils.scale(84),
    alignItems: "center",
    justifyContent: "center",
  },
  iconBackPress: {
    width: ScreenUtils.scale(40),
    height: ScreenUtils.scale(40),
    alignItems: "center",
    justifyContent: "center",
  },
  headerTextStyle: {
    flex: 1,
    textAlign: "center",
    marginLeft: ConstantStyles.spacing4,
    ...TextStyles.text16,
    fontWeight: "500",
  },
});
