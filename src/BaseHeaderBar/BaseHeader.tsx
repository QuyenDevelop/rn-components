import * as React from "react";
import {
  Image,
  Platform,
  StatusBar,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import { Color, ConstantStyles } from "../Themes";
import { Images } from "../assets";
import { styles } from "./styles";

/** Thanh điều hướng ở trên cùng của app để điều hướng người dùng và có các nút điều khiển */

export type HeaderType = "LIGHT" | "DARK";
export enum HeaderTypes {
  LIGHT = "LIGHT",
  DARK = "DARK",
}

export interface HeaderBarProps {
  /** Property is Header types (value: "LIGHT" | "DARK") */
  headerType?: HeaderType;
  /** Property is used customize style of header container */
  containerStyle?: ViewStyle;
  /** Property is used setup background color of Header */
  headerColor?: string;
  /** show/hide icon left (Icon goBack) default = true */
  isShowGoBack?: boolean;
  /** Property is used render icon Left and action Left */
  renderIconLeft?: React.ReactNode;
  /** Property is Event when click icon Left */
  onPressGoBack?: () => void;
  /** Property is used render list icons right | action right (maximum 2 icon) */
  renderIconRight?: React.ReactNode;
  /** property is header title show */
  title: string;
  /** set Font for Text */
  fontFamily?: string;
  /** Property is used customize style of header title */
  headerTextStyle?: TextStyle;
}

const _BaseHeaderBar: React.FunctionComponent<HeaderBarProps> = ({
  headerType = HeaderTypes.DARK,
  containerStyle,
  headerColor,
  renderIconLeft,
  renderIconRight,
  title,
  isShowGoBack = true,
  fontFamily,
  headerTextStyle,
  onPressGoBack,
}) => {
  React.useEffect(() => {
    if (Platform.OS === "android") {
      StatusBar.setBackgroundColor("transparent");
      StatusBar.setTranslucent(true);
    }
    StatusBar.setBarStyle(
      headerType === HeaderTypes.DARK ? "dark-content" : "light-content"
    );
  }, [headerType]);

  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: headerColor,
      }}
    >
      <View style={[styles.contentContainer, containerStyle]}>
        <View
          style={{ ...styles.iconLeft, marginLeft: ConstantStyles.spacing4 }}
        >
          {isShowGoBack && (
            <TouchableOpacity
              style={styles.iconBackPress}
              onPress={onPressGoBack}
            >
              {renderIconLeft ? (
                renderIconLeft
              ) : (
                <Image
                  source={
                    headerType === HeaderTypes.DARK
                      ? Images.icBack
                      : Images.icBackWhite
                  }
                />
              )}
            </TouchableOpacity>
          )}
        </View>
        <Text
          style={[
            {
              ...styles.headerTextStyle,
              fontFamily: fontFamily,
              color:
                headerType === HeaderTypes.DARK ? Color.black6s : Color.white6,
            },
            headerTextStyle,
          ]}
          numberOfLines={1}
        >
          {title}
        </Text>
        <View style={styles.iconLeft}>{renderIconRight}</View>
      </View>
    </View>
  );
};

export const BaseHeaderBar = React.memo(_BaseHeaderBar);
