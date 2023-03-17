import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import {
  TextInput as Input,
  StyleProp,
  Text,
  TextInputProps,
  View,
  ViewStyle,
} from "react-native";
import { IconButtonClear, IconColor } from "../Button";
import { Color, ConstantStyles, ScreenUtils } from "../Themes";
import { styles } from "./styles";
import { StyleSheet } from "react-native";

export declare interface ITextInputProps extends TextInputProps {
  label?: string;
  noteMessage?: string;
  errorMessage?: string;
  height?: number;
  containerStyle?: StyleProp<ViewStyle>;
  isHideClear?: boolean;
  onClearInput?: () => void;
  inputStyle?: StyleProp<ViewStyle>;
  isRequired?: boolean;
  isFocus?: boolean;
  textRightComponent?: React.ReactNode;
  textLeftComponent?: React.ReactNode;
  showTextRightComponent?: boolean;
  showTextLeftComponent?: boolean;
  /** set Font for Text */
  fontFamily?: string;
}

export const BaseTextInput: FunctionComponent<ITextInputProps> = ({
  label,
  noteMessage,
  errorMessage,
  value,
  height,
  onChangeText,
  isHideClear,
  onClearInput,
  containerStyle,
  keyboardType,
  secureTextEntry,
  inputStyle,
  isRequired,
  textRightComponent,
  textLeftComponent,
  editable = true,
  isFocus,
  fontFamily,
  showTextRightComponent = true,
  showTextLeftComponent = true,
  ...props
}) => {
  const [focus, setFocus] = useState<boolean>(false);

  const inputRef = useRef<Input>(null);
  const getInputStyle = errorMessage
    ? styles.inputErrorContainer
    : focus
    ? styles.inputFocusContainer
    : styles.inputDefaultContainer;

  useEffect(() => {
    if (isFocus) {
      inputRef.current?.focus;
      setFocus(editable ? isFocus : false);
    }
  }, [isFocus, editable]);

  const handleFocus = () => {
    props?.onFocus;
    setFocus(true);
  };
  const handleBlur = () => {
    props?.onBlur;
    setFocus(false);
  };

  return (
    <View style={[styles.container, containerStyle]}>
      {label && (
        <Text style={{ ...styles.label, fontFamily: fontFamily }}>
          {label}
          <Text style={styles.required}>{isRequired ? " *" : ""}</Text>
        </Text>
      )}
      <View
        style={
          editable ? [getInputStyle, inputStyle] : styles.inputDisableContainer
        }
      >
        {textLeftComponent && showTextLeftComponent && (
          <View>{textLeftComponent}</View>
        )}
        <Input
          ref={inputRef}
          allowFontScaling={false}
          editable={editable}
          autoFocus={focus}
          onChangeText={onChangeText}
          value={value}
          keyboardType={keyboardType || "default"}
          secureTextEntry={secureTextEntry}
          placeholderTextColor={Color.black4s}
          style={{
            ...styles.input,
            marginLeft:
              textLeftComponent && showTextLeftComponent
                ? ConstantStyles.spacing8
                : undefined,
            height: height || ScreenUtils.scale(40),
            fontFamily: fontFamily,
          }}
          onFocus={handleFocus}
          onBlur={handleBlur}
          multiline={false}
          {...props}
        />
        {focus && value && editable && !isHideClear && (
          <View
            style={{
              paddingRight:
                textRightComponent && showTextRightComponent
                  ? ScreenUtils.scale(8)
                  : undefined,
            }}
          >
            <IconButtonClear
              onPress={onClearInput}
              iconColor={IconColor.DARK}
            />
          </View>
        )}
        {textRightComponent && showTextRightComponent && (
          <View
            style={{
              paddingLeft: ScreenUtils.scale(8),
              borderLeftWidth:
                focus && value && editable && !isHideClear
                  ? 2 * StyleSheet.hairlineWidth
                  : undefined,
              borderLeftColor: Color.black1s,
            }}
          >
            {textRightComponent}
          </View>
        )}
      </View>
      {errorMessage ? (
        editable && (
          <View
            style={{
              marginTop: ConstantStyles.spacing4,
            }}
          >
            <Text
              style={{ ...styles.errorMessage, fontFamily: fontFamily }}
              numberOfLines={2}
            >
              {errorMessage}
            </Text>
          </View>
        )
      ) : noteMessage ? (
        <View
          style={{
            marginTop: ConstantStyles.spacing4,
          }}
        >
          <Text
            style={{ ...styles.noteMessage, fontFamily: fontFamily }}
            numberOfLines={2}
          >
            {noteMessage}
          </Text>
        </View>
      ) : null}
    </View>
  );
};
