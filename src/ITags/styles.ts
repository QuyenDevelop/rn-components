import { StyleSheet } from "react-native";
import { ScreenUtils, ConstantStyles, TextStyles, Color } from "../Themes";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: ScreenUtils.scale(32),
    paddingHorizontal: ConstantStyles.spacing8,
    borderRadius: ConstantStyles.borderRadius16,
    overflow: "hidden",
  },
  leftIconStyle: {
    width: ConstantStyles.iconSizeMedium,
    height: ConstantStyles.iconSizeMedium,
    alignItems: "center",
    justifyContent: "center",
    marginRight: ConstantStyles.spacing4,
  },
  rightIconStyle: {
    width: ConstantStyles.iconSizeMedium,
    height: ConstantStyles.iconSizeMedium,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Color.black2s,
  },
  tagsNameStyle: {
    ...TextStyles.text14,
    fontWeight: "400",
  },
  overflowHidden: {
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
});
