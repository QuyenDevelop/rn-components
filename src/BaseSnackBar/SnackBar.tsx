import * as React from "react";
import {
  Animated,
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewProps,
} from "react-native";
import { Color, ConstantStyles, TextStyles } from "../Themes";
import { ScreenUtils } from "../Themes/ScreenUtils";

export declare type SnackBarType = "INFO" | "ERROR" | "SUCCESS";
export enum SnackBarTypes {
  INFO = "INFO",
  ERROR = "ERROR",
  SUCCESS = "SUCCESS",
}
export declare type SnackBarPositionType = "top" | "bottom";
export enum SnackBarPosition {
  TOP = "top",
  BOTTOM = "bottom",
}

export interface SnackRef {}
export interface SnackBarProperties {
  /** snack bar Message */
  message: string;
  /** snack bar type ("INFO" | "ERROR" | "SUCCESS") */
  type?: SnackBarType;
  /** snack bar position ("top" | "bottom")*/
  position?: SnackBarPositionType;
  /** snack bar show/hide */
  visible?: boolean;
  /** snack bar timing */
  duration?: number;
  /** snack bar customize icon */
  snackBarIcon?: React.ReactNode;
  /** snack bar button name */
  buttonName?: string;
  /** snack bar event of button */
  snackBarAction?: ((event: GestureResponderEvent) => void) | undefined;
  /** set Font for Text */
  fontFamily?: string;
}

export interface SnackBarProps extends ViewProps, SnackBarProperties {}

export const BaseSnackBar = React.forwardRef<SnackRef, SnackBarProps>(
  (
    {
      message,
      type = SnackBarTypes.SUCCESS,
      position = SnackBarPosition.BOTTOM,
      duration = 5000,
      snackBarIcon,
      buttonName,
      snackBarAction,
      fontFamily,
      ...props
    },
    SnackRef
  ) => {
    const animatedValue = React.useRef(new Animated.Value(0));

    const snackBarBG =
      type === SnackBarTypes.INFO
        ? Color.black6s
        : type === SnackBarTypes.ERROR
        ? Color.red6s
        : Color.green6s;

    const showSnackBar = React.useCallback(() => {
      Animated.timing(animatedValue.current, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: false,
      }).start(() => {
        const hideTimer = setTimeout(() => hideSnackBar(), duration);

        return () => clearTimeout(hideTimer);
      });
    }, [duration]);

    const hideSnackBar = () => {
      Animated.timing(animatedValue.current, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: false,
      }).start();
    };

    React.useEffect(() => {
      showSnackBar();
    }, [message, showSnackBar]);

    return (
      <Animated.View
        style={[
          styles.snackBar,
          {
            [position]: animatedValue.current.interpolate({
              inputRange: [0, 1],
              outputRange: [-300, 50],
            }),
          },
        ]}
        ref={SnackRef}
        {...props}
      >
        <TouchableOpacity
          style={{ ...styles.snackBarContent, backgroundColor: snackBarBG }}
          onPress={snackBarAction || undefined}
        >
          <View style={styles.flexRow}>
            {snackBarIcon && (
              <View style={styles.iconView}>{snackBarIcon}</View>
            )}
            <Text
              style={{ ...styles.contentStyle, fontFamily: fontFamily }}
              numberOfLines={3}
            >
              {message}
            </Text>
          </View>
          {buttonName && (
            <View
              style={{
                marginLeft: ConstantStyles.spacing16,
              }}
            >
              <TouchableOpacity
                style={{
                  paddingLeft: ConstantStyles.spacing16,
                  borderLeftWidth: 2 * StyleSheet.hairlineWidth,
                  borderLeftColor: Color.white6,
                }}
                onPress={snackBarAction}
              >
                <Text style={{ ...styles.buttonName, fontFamily: fontFamily }}>
                  {buttonName}
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </TouchableOpacity>
      </Animated.View>
    );
  }
);

const styles = StyleSheet.create({
  snackBar: {
    flex: 1,
    width: ScreenUtils.WIDTH_SCREEN - ConstantStyles.spacing16 * 2,
    minHeight: ConstantStyles.sizeLarge,
    position: "absolute",
  },
  snackBarContent: {
    flex: 1,
    paddingHorizontal: ConstantStyles.spacing16,
    paddingVertical: ConstantStyles.spacing8,
    borderRadius: ConstantStyles.borderRadius8,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  contentStyle: {
    flex: 1,
    ...TextStyles.text14,
    color: Color.white6,
  },
  iconView: {
    width: ConstantStyles.iconSizeMedium,
    alignItems: "center",
    justifyContent: "center",
    marginRight: ConstantStyles.spacing8,
  },
  flexRow: { flex: 1, flexDirection: "row" },
  buttonName: {
    ...TextStyles.text14,
    color: Color.white6,
    fontWeight: "500",
  },
});
