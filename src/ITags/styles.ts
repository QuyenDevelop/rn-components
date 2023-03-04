import { StyleSheet } from "react-native";
import { ScreenUtils, ConstantStyles, TextStyles } from "../Themes";

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
  },
  tagsNameStyle: {
    ...TextStyles.text14,
    fontWeight: "400",
  },
});
