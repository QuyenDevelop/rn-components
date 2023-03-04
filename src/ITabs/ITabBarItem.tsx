import { Text } from "@rneui/themed";
import React, { FunctionComponent } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import type { TabModel } from ".";
import { IBadge, IDot } from "../Components";
import { Color, ScreenUtils, ConstantStyles, TextStyles } from "../Themes";

export interface ITabItemProps {
  tab: TabModel;
  index: number;
  isFocused: boolean;
  onChangeTab: (index: number) => void;
  renderTabIcon?: React.ReactNode;
  isShowRedDot?: boolean;
  isShowBadge?: boolean;
  itemWidth?: number;
  /** set Font for Text */
  fontFamily?: string;
}

export const ITabBarItem: FunctionComponent<ITabItemProps> = ({
  tab,
  index,
  isFocused,
  onChangeTab,
  renderTabIcon,
  itemWidth,
  isShowRedDot,
  isShowBadge,
  fontFamily,
}) => {
  return (
    <TouchableOpacity
      onPress={() => onChangeTab(index)}
      style={styles.container}
    >
      <View
        style={{
          ...styles.tabContainer,
          width: itemWidth,
        }}
      >
        {renderTabIcon && <View style={styles.tabIcon}>{renderTabIcon}</View>}
        <Text style={{ ...styles.contentStyle, fontFamily: fontFamily }}>
          {tab.title}
        </Text>
        {isShowRedDot ? (
          <View style={styles.view24}>
            <View style={styles.relativeView}>
              <IDot />
            </View>
          </View>
        ) : isShowBadge && tab.badgeNumber && tab.badgeNumber > 0 ? (
          <View style={styles.view24}>
            <View style={styles.relativeView}>
              <IBadge content={tab.badgeNumber} />
            </View>
          </View>
        ) : null}
      </View>
      <View
        style={{
          width: ScreenUtils.scale(36),
          height: ScreenUtils.scale(2),
          borderRadius: ScreenUtils.scale(2),
          backgroundColor: isFocused ? Color.brandA : Color.white6,
        }}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  tabContainer: {
    height: ConstantStyles.sizeMedium,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    paddingHorizontal: ConstantStyles.spacing8,
    backgroundColor: Color.white6,
  },
  tabIcon: {
    width: ConstantStyles.iconSizeMedium,
    height: ConstantStyles.iconSizeMedium,
    alignItems: "center",
    justifyContent: "center",
    marginRight: ConstantStyles.spacing4,
    overflow: "hidden",
  },
  contentStyle: {
    ...TextStyles.text14,
    fontWeight: "400",
    color: Color.black6s,
  },
  view24: {
    width: ConstantStyles.iconSizeMedium,
    marginLeft: ConstantStyles.spacing4,
  },
  relativeView: {
    position: "relative",
    top: -ConstantStyles.spacing4,
  },
});
