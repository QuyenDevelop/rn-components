import * as React from "react";
import {
  Image,
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from "react-native";
import { IconButtonClear, IconColor } from "../Button";
import { Color, ConstantStyles, ScreenUtils } from "../Themes";
import { Images } from "../assets";

export interface SearchProps extends TextInputProps {
  /** hint text */
  placeHolder?: string;
  /** can edit input value */
  editable?: boolean;

  isFocus?: boolean;
  /** event clear value input */
  onClearInput?: () => void;
  /** customize styles of text box */
  containerStyle?: ViewStyle;
  /** customize icon clear text */
  clearTextIcon?: React.ReactNode;
  /** set Font for Text */
  fontFamily?: string;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  inputDefaultContainer: {
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
    borderRadius: ConstantStyles.borderRadius8,
    borderWidth: 2 * StyleSheet.hairlineWidth,
    borderColor: Color.black2s,
    paddingHorizontal: ConstantStyles.spacing12,
  },
  inputFocusContainer: {
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
    borderRadius: ConstantStyles.borderRadius8,
    borderWidth: 2 * StyleSheet.hairlineWidth,
    borderColor: Color.blue6s,
    paddingHorizontal: ConstantStyles.spacing12,
  },
  input: {
    flex: 1,
    fontSize: 14,
    fontWeight: "400",
    color: Color.black6s,
    height: ScreenUtils.scale(36),
    textAlignVertical: "center",
  },
  iconClearView: {
    width: ConstantStyles.iconSizeMedium,
    height: ConstantStyles.iconSizeMedium,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: ConstantStyles.spacing8,
  },
});

const _BaseSearch: React.FunctionComponent<SearchProps> = ({
  placeHolder,
  isFocus,
  editable,
  onClearInput,
  containerStyle,
  clearTextIcon,
  fontFamily,
  ...props
}) => {
  const [focus, setFocus] = React.useState<boolean>(false);
  const inputRef = React.useRef<TextInput>(null);

  React.useEffect(() => {
    if (isFocus) {
      inputRef.current?.focus;
      setFocus(editable ? isFocus : false);
    }
  }, [isFocus, editable]);

  const handleFocus = React.useCallback(() => {
    props?.onFocus;
    setFocus(true);
  }, [props?.onFocus]);

  const handleBlur = React.useCallback(() => {
    props?.onBlur;
    setFocus(false);
  }, [props?.onBlur]);

  const getInputStyle = focus
    ? styles.inputFocusContainer
    : styles.inputDefaultContainer;

  return (
    <View style={[styles.container, containerStyle]}>
      <View style={getInputStyle}>
        <Image
          source={Images.icSearch}
          style={{
            width: ConstantStyles.iconSizeMedium,
            height: ConstantStyles.iconSizeMedium,
            marginRight: ConstantStyles.spacing8,
          }}
          resizeMode="cover"
        />
        <TextInput
          ref={inputRef}
          allowFontScaling={false}
          autoFocus={focus}
          onChangeText={props.onChangeText}
          value={props.value}
          placeholder={placeHolder}
          keyboardType={props.keyboardType || "default"}
          secureTextEntry={props.secureTextEntry}
          placeholderTextColor={Color.black4s}
          style={{ ...styles.input, fontFamily: fontFamily }}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...props}
        />
        {props.value && onClearInput && focus && (
          <View style={styles.iconClearView}>
            {clearTextIcon ? (
              clearTextIcon
            ) : (
              <IconButtonClear
                onPress={onClearInput}
                iconColor={IconColor.DARK}
                backgroundColor={Color.black2s}
              />
            )}
          </View>
        )}
      </View>
    </View>
  );
};

export const BaseSearch = React.memo(_BaseSearch);
