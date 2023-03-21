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
  const sizeValue = size * 1.5;

  return (
    <TouchableOpacity
      onPress={!isDisabled ? handleCheck : undefined}
      style={styles.container}
    >
      <TouchableHighlight
        onPress={!isDisabled ? handleCheck : undefined}
        style={{
          ...styles.touchContainer,
          width: sizeValue,
          height: sizeValue,
          borderRadius: sizeValue / 2,
        }}
        underlayColor={Color.black1}
      >
        <View
          style={{
            ...styles.touchContainer,
            width: size,
            height: size,
          }}
        >
          <View
            style={{
              ...styles.checkBoxStyle,
              width: size - ScreenUtils.scale(4),
              height: size - ScreenUtils.scale(4),
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
  const sizeValue = size * 1.5;

  return (
    <TouchableOpacity
      onPress={!isDisabled ? handleCheck : undefined}
      style={styles.container}
    >
      <TouchableHighlight
        onPress={!isDisabled ? handleCheck : undefined}
        underlayColor={Color.black1}
        style={{
          ...styles.touchContainer,
          width: sizeValue,
          height: sizeValue,
          borderRadius: sizeValue / 2,
        }}
      >
        <View
          style={{
            ...styles.touchContainer,
            width: size,
            height: size,
          }}
        >
          <View
            style={{
              ...styles.radioContainer,
              width: size - ScreenUtils.scale(4),
              height: size - ScreenUtils.scale(4),
              borderColor: getColor,
              backgroundColor:
                isDisabled && isChecked
                  ? Color.black3s
                  : isChecked
                  ? Color.primary6s
                  : undefined,
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
    alignItems: "center",
    justifyContent: "center",
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
    borderWidth: 2 * StyleSheet.hairlineWidth,
  },
  iconCloseStyle: {
    width: ScreenUtils.scale(12),
    height: ScreenUtils.scale(12),
  },
});
