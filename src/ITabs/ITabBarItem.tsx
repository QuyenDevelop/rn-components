import React, { FunctionComponent } from "react";
import { StyleSheet, TouchableHighlight, View, Text } from "react-native";
import type { TabModel } from ".";
import { IBadge, IDot } from "../Components";
import { Color, ScreenUtils, ConstantStyles, TextStyles } from "../Themes";

export interface ITabItemProps {
  tab: TabModel;
  index: number;
  isFocused: boolean;
  onChangeTab: (index: number) => void;
  renderTabIcon?: React.ReactNode;
  showItemTabIcon?: boolean;
  isShowRedDot?: boolean;
  isShowBadge?: boolean;
  itemWidth?: number;
  /** set Font for Text */
  fontFamily?: string;
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Color.white6,
  },
  tabContainer: {
    height: ConstantStyles.sizeMedium,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    paddingHorizontal: ConstantStyles.spacing8,
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
    color: Color.black6s,
  },
  view24: {
    // width: ConstantStyles.iconSizeMedium,
    marginLeft: ConstantStyles.spacing4,
  },
  relativeView: {
    position: "relative",
    top: -ConstantStyles.spacing4,
  },
});

const _ITabBarItem: FunctionComponent<ITabItemProps> = ({
  tab,
  index,
  isFocused,
  onChangeTab,
  renderTabIcon,
  showItemTabIcon = true,
  itemWidth,
  isShowRedDot,
  isShowBadge,
  fontFamily,
}) => {
  return (
    <TouchableHighlight
      onPress={() => onChangeTab(index)}
      style={styles.container}
      underlayColor={Color.black1s}
    >
      <>
        <View
          style={{
            ...styles.tabContainer,
            width: itemWidth,
          }}
        >
          {renderTabIcon && showItemTabIcon && (
            <View style={styles.tabIcon}>{renderTabIcon}</View>
          )}
          <Text
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              ...styles.contentStyle,
              fontFamily: fontFamily,
              fontWeight: isFocused ? "500" : "400",
            }}
          >
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
            backgroundColor: isFocused ? Color.brandA : undefined,
          }}
        />
      </>
    </TouchableHighlight>
  );
};

export const ITabBarItem = React.memo(_ITabBarItem);
