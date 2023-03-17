import { StyleSheet } from "react-native";
import { Themes } from "@phamquyen/rn-core-components";
import { CThemes } from "./CThemes";

const ViewStyles = StyleSheet.create({
  contentCenter: {
    alignItems: "center",
    justifyContent: "center",
  },
  contentBetween: {
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export const CGlobalStyles = StyleSheet.create({
  ...Themes.ShadowStyles,
  ...Themes.TextStyles,
  fontMedium: {
    fontFamily: CThemes.fonts.medium,
    fontWeight: "600",
  },
  fontRegular: {
    fontFamily: CThemes.fonts.regular,
    fontWeight: "400",
  },
  appContent: {
    flex: 1,
  },
  container: {
    flex: 1,
    width: CThemes.screenUtils.WIDTH_SCREEN,
    height: CThemes.screenUtils.HEIGHT_SCREEN,
  },
  childrenContainer: {
    paddingHorizontal: CThemes.constantStyles.spacing16,
  },
  flexCenter: {
    flex: 1,
    ...ViewStyles.contentCenter,
  },
  nonFlexCenterView: {
    ...ViewStyles.contentCenter,
  },
  rowInline: {
    flex: 1,
    flexDirection: "row",
  },
  rowCenter: {
    flex: 1,
    flexDirection: "row",
    ...ViewStyles.contentCenter,
  },
  rowCenterNonFlex: {
    flexDirection: "row",
    ...ViewStyles.contentCenter,
  },
  rowBetween: {
    flex: 1,
    flexDirection: "row",
    ...ViewStyles.contentBetween,
  },
  rowBetweenNonFlex: {
    flexDirection: "row",
    ...ViewStyles.contentBetween,
  },
});
