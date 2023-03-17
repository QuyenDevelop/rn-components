import React, { FunctionComponent } from "react";
import {
  StyleSheet,
  View,
  TouchableHighlight,
  Text,
  Image,
} from "react-native";
import { Color, ScreenUtils, ConstantStyles, TextStyles } from "../Themes";
import { Images } from "../assets";
import { TouchableOpacity } from "react-native";

export interface CheckBoxProps {
  size?: number;
  isChecked?: boolean;
  isDisabled?: boolean;
  customIconRadioCheck?: React.ReactNode;
  content?: string;
  /** set Font for Text */
  fontFamily?: string;
  handleCheck?: () => void;
}

export const IRadioCheckBox: FunctionComponent<CheckBoxProps> = ({
  size = ConstantStyles.iconSizeMedium,
  isChecked,
  isDisabled,
  handleCheck,
  fontFamily,
  content,
}) => {
  const getColor = isDisabled ? Color.black3s : Color.primary6s;

  return (
    <TouchableOpacity
      onPress={!isDisabled ? handleCheck : undefined}
      style={styles.container}
    >
      <TouchableHighlight
        onPress={!isDisabled ? handleCheck : undefined}
        style={styles.touchContainer}
        underlayColor={Color.black1}
      >
        <View
          style={{
            ...styles.checkBoxStyle,
            width: size,
            height: size,
            borderColor: getColor,
          }}
        >
          {isChecked && (
            <View
              style={{
                width: size / 2,
                height: size / 2,
                borderRadius: size / 4,
                backgroundColor: getColor,
              }}
            />
          )}
        </View>
      </TouchableHighlight>
      {content && (
        <Text
          style={{
            ...TextStyles.text14,
            fontFamily: fontFamily,
            color: isDisabled ? Color.black5s : Color.black6s,
          }}
        >
          {content}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export const ICheckBox: FunctionComponent<CheckBoxProps> = ({
  size = ConstantStyles.iconSizeMedium,
  isChecked,
  isDisabled,
  handleCheck,
  customIconRadioCheck,
  content,
}) => {
  const getColor = isDisabled ? Color.black3s : Color.primary6s;

  return (
    <TouchableOpacity
      onPress={!isDisabled ? handleCheck : undefined}
      style={styles.container}
    >
      <TouchableHighlight
        onPress={!isDisabled ? handleCheck : undefined}
        underlayColor={Color.black1}
        style={styles.touchContainer}
      >
        <View
          style={{
            ...styles.radioContainer,
            width: size,
            height: size,
            borderColor: getColor,
            backgroundColor:
              isDisabled && isChecked
                ? Color.black3s
                : isChecked
                ? Color.primary6s
                : Color.white6,
          }}
        >
          {isChecked ? (
            customIconRadioCheck ? (
              customIconRadioCheck
            ) : (
              <Image
                source={Images.icCheck}
                style={styles.iconCloseStyle}
                resizeMode="contain"
              />
            )
          ) : null}
        </View>
      </TouchableHighlight>
      {content && (
        <Text
          style={{
            ...TextStyles.text14,
            color: isDisabled ? Color.black5s : Color.black6s,
          }}
        >
          {content}
        </Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  touchContainer: {
    width: ScreenUtils.scale(36),
    height: ScreenUtils.scale(36),
    borderRadius: ScreenUtils.scale(18),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Color.white6,
  },
  checkBoxStyle: {
    borderRadius: ConstantStyles.borderRadius16,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2 * StyleSheet.hairlineWidth,
  },
  radioContainer: {
    borderRadius: ConstantStyles.borderRadius4,
    justifyContent: "center",
    alignItems: "center",
    marginRight: ConstantStyles.spacing8,
    borderWidth: 2 * StyleSheet.hairlineWidth,
  },
  iconCloseStyle: {
    width: ScreenUtils.scale(12),
    height: ScreenUtils.scale(12),
  },
});
