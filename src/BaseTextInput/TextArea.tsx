/* eslint-disable react-native/no-inline-styles */
import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import {
  TextInput as Input,
  StyleProp,
  Text,
  TextInputProps,
  View,
  ViewStyle,
} from "react-native";
import { Color, ConstantStyles, ScreenUtils } from "../Themes";
import { styles } from "./styles";

export declare interface ITextareaProps extends TextInputProps {
  label?: string;
  noteMessage?: string;
  errorMessage?: string;
  height?: number;
  containerStyle?: StyleProp<ViewStyle>;
  onClearInput?: () => void;
  inputStyle?: StyleProp<ViewStyle>;
  isFocus?: boolean;
  isRequired?: boolean;
  textRightComponent?: React.ReactNode;
  textLeftComponent?: React.ReactNode;
  /** num of limited of value length */
  limited?: number;
  /** set Font for Text */
  fontFamily?: string;
}

export const BaseTextArea: FunctionComponent<ITextareaProps> = ({
  label,
  containerStyle,
  editable = true,
  errorMessage,
  noteMessage,
  value,
  height,
  onChangeText,
  isFocus,
  limited = 24,
  fontFamily,
  ...props
}) => {
  const inputRef = useRef<Input>(null);
  const [focus, setFocus] = useState<boolean>(false);
  const counter = value ? `${value.length}/${limited}` : `0/${limited}`;

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

  const getInputStyle = errorMessage
    ? styles.inputErrorContainer
    : focus
    ? styles.inputFocusContainer
    : styles.inputDefaultContainer;

  return (
    <View style={[styles.container, containerStyle]}>
      {label && (
        <Text style={{ ...styles.label, fontFamily: fontFamily }}>{label}</Text>
      )}
      <View
        style={[
          editable ? getInputStyle : styles.inputDisableContainer,
          {
            paddingVertical: ConstantStyles.spacing16,
          },
        ]}
      >
        <Input
          ref={inputRef}
          autoFocus={focus}
          editable={editable}
          onChangeText={onChangeText}
          value={value}
          placeholderTextColor={Color.black4s}
          style={{
            ...styles.input,
            height: height || ScreenUtils.scale(124),
            paddingHorizontal: ConstantStyles.spacing16,
            textAlignVertical: "top",
            fontFamily: fontFamily,
          }}
          onFocus={handleFocus}
          maxLength={limited}
          onBlur={handleBlur}
          multiline
          {...props}
        />
      </View>
      <View style={styles.noteView}>
        <View
          style={{
            flex: 0.9,
          }}
        >
          {errorMessage ? (
            editable && (
              <Text
                style={{ ...styles.errorMessage, fontFamily: fontFamily }}
                numberOfLines={2}
              >
                {errorMessage}
              </Text>
            )
          ) : noteMessage ? (
            <Text
              style={{ ...styles.noteMessage, fontFamily: fontFamily }}
              numberOfLines={2}
            >
              {noteMessage}
            </Text>
          ) : null}
        </View>
        <Text style={{ ...styles.counter, fontFamily: fontFamily }}>
          {counter}
        </Text>
      </View>
    </View>
  );
};
