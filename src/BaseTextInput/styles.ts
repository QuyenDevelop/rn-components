import { StyleSheet } from "react-native";
import { Color, ConstantStyles, TextStyles } from "../Themes";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  label: {
    ...TextStyles.text16,
    color: Color.black5s,
    marginBottom: ConstantStyles.spacing8,
  },
  required: {
    color: Color.red6s,
  },
  inputDefaultContainer: {
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
    borderRadius: ConstantStyles.borderRadius8,
    borderWidth: 2 * StyleSheet.hairlineWidth,
    borderColor: Color.black2s,
    paddingHorizontal: ConstantStyles.spacing16,
  },
  inputFocusContainer: {
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
    borderRadius: ConstantStyles.borderRadius8,
    borderWidth: 2 * StyleSheet.hairlineWidth,
    borderColor: Color.blue6s,
    paddingHorizontal: ConstantStyles.spacing16,
  },
  inputErrorContainer: {
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
    borderRadius: ConstantStyles.borderRadius8,
    borderWidth: 2 * StyleSheet.hairlineWidth,
    borderColor: Color.red6s,
    paddingHorizontal: ConstantStyles.spacing16,
  },
  inputDisableContainer: {
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
    borderRadius: ConstantStyles.borderRadius8,
    borderWidth: 2 * StyleSheet.hairlineWidth,
    borderColor: Color.black2s,
    backgroundColor: Color.black2s,
    paddingHorizontal: ConstantStyles.spacing16,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: Color.black6s,
    marginRight: ConstantStyles.spacing8,
  },
  errorMessage: {
    ...TextStyles.text14,
    color: Color.red6s,
    marginLeft: ConstantStyles.spacing16,
  },
  noteMessage: {
    ...TextStyles.text14,
    color: Color.black5s,
    marginLeft: ConstantStyles.spacing16,
  },
  noteView: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: ConstantStyles.spacing4,
  },
  counter: {
    ...TextStyles.text14,
    color: Color.black5s,
    width: ConstantStyles.spacing40,
    textAlign: "right",
  },
});
