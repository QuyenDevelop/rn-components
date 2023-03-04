import { StyleSheet } from "react-native";
import {
  ShadowStyles,
  Color,
  ConstantStyles,
  TextStyles,
  ScreenUtils,
} from "../Themes";

export const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    margin: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  contentContainer: {
    ...ShadowStyles.secondary,
    backgroundColor: Color.white6,
    paddingHorizontal: ConstantStyles.spacing16,
    borderRadius: ConstantStyles.borderRadius12,
    width: ConstantStyles.dialogWidthPrimary,
    justifyContent: "center",
    overflow: "hidden",
    alignItems: "center",
  },
  content: {
    paddingVertical: ConstantStyles.spacing16,
  },
  title: {
    textAlign: "center",
    ...TextStyles.text16,
    color: Color.black6s,
    fontWeight: "500",
  },
  message: {
    textAlign: "center",
    ...TextStyles.text14,
    color: Color.black5s,
    fontWeight: "400",
    marginTop: ConstantStyles.spacing8,
  },
  buttonBox: {
    flexDirection: "row",
    marginTop: ConstantStyles.spacing16,
  },
  imageBackground: {
    width: ConstantStyles.dialogWidthPrimary,
    height: ScreenUtils.scale(ConstantStyles.dialogWidthPrimary),
  },
  imageBackgroundAction: {
    flex: 1,
    width: "100%",
    paddingHorizontal: ConstantStyles.spacing16,
    paddingBottom: ConstantStyles.spacing16,
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  icCloseButton: {
    position: "absolute",
    right: ConstantStyles.spacing12,
    top: ConstantStyles.spacing12,
    zIndex: 999,
  },
});
