import React, { FunctionComponent } from "react";
import { StyleSheet, View, TouchableOpacity, Text, Image } from "react-native";
import { Color, ScreenUtils, ConstantStyles, TextStyles } from "../Themes";
import { Images } from "../assets";

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

export const ICheckBox: FunctionComponent<CheckBoxProps> = ({
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
      style={styles.container}
      onPress={!isDisabled ? handleCheck : undefined}
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
      {content && (
        <Text
          style={{
            ...TextStyles.text14,
            fontFamily: fontFamily,
            color: isDisabled ? Color.black3s : Color.black6s,
          }}
        >
          {content}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export const IRadioCheckBox: FunctionComponent<CheckBoxProps> = ({
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
      style={styles.container}
      onPress={!isDisabled ? handleCheck : undefined}
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
      {content && (
        <Text
          style={{
            ...TextStyles.text14,
            color: isDisabled ? Color.black3s : Color.black6s,
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
  checkBoxStyle: {
    borderRadius: ConstantStyles.borderRadius16,
    justifyContent: "center",
    alignItems: "center",
    marginRight: ConstantStyles.spacing8,
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
