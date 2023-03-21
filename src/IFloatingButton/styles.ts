import { StyleSheet } from "react-native";
import { Color, ScreenUtils, ConstantStyles } from "../Themes";
import { TextStyles } from "../Themes/TextStyles";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  modalContainer: {
    flex: 1,
    margin: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  areIconSupport: {
    flex: 1,
    padding: ConstantStyles.spacing8,
  },
  imgSupport: {
    width: ScreenUtils.scale(64),
    height: ScreenUtils.scale(64),
    borderRadius: ScreenUtils.scale(32),
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  overView: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    paddingHorizontal: ConstantStyles.spacing16,
    paddingBottom: ConstantStyles.spacing24,
    width: ScreenUtils.WIDTH_SCREEN,
  },
  iconCloseSup: {
    marginTop: ScreenUtils.scale(16),
    height: ConstantStyles.iconSizeLarge,
    width: ConstantStyles.iconSizeLarge,
    borderRadius: ScreenUtils.scale(24),
    backgroundColor: Color.white6,
    alignItems: "center",
    justifyContent: "center",
  },
  supportTouch: {
    flexDirection: "row",
    alignItems: "center",
    height: ScreenUtils.scale(48),
    marginBottom: ScreenUtils.scale(16),
  },
  buttonText: {
    ...TextStyles.text16,
    fontWeight: "500",
    color: Color.white6,
    marginRight: ScreenUtils.scale(16),
  },
  imgStyle: {
    width: ScreenUtils.scale(48),
    height: ScreenUtils.scale(48),
    borderRadius: ScreenUtils.scale(24),
  },
});
