import { Tab } from "@rneui/themed";
import React, { FunctionComponent, useRef } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { Color, ScreenUtils, ConstantStyles } from "../Themes";
import { ITabBarItem, ITabItemProps } from "./ITabBarItem";

export declare type TabModel = {
  key: string;
  icon?: string;
  title: string;
  badgeNumber?: number;
  accessibilityLabel?: string;
};

export declare type NavigationState = {
  index: number;
  routes: TabModel[];
};

export interface ITabsProps {
  navigationState: NavigationState;
  onIndexChange: (index: number) => void;
  renderScene?: (prop: { tab: TabModel }) => React.ReactNode;
  isHideTabBar?: boolean;
  disableSwipe?: boolean;
  isFixed?: boolean;
  renderTab?: (
    props: ITabItemProps & { tabKey?: string }
  ) => React.ReactElement;
  isShowRedDot?: boolean;
  isShowBadge?: boolean;
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export const ITabView: FunctionComponent<ITabsProps> = ({
  navigationState,
  onIndexChange,
  isHideTabBar = false,
  isFixed,
  renderScene,
  disableSwipe,
  renderTab,
  isShowRedDot,
  isShowBadge,
}) => {
  const index = navigationState.index || 0;
  const itemWidth = isFixed
    ? (ScreenUtils.WIDTH_SCREEN - ConstantStyles.spacing8 * 2) /
      navigationState.routes.length
    : undefined;
  const flatListRef = useRef<FlatList>(null);

  const onChangeTabIndex = (i: number) => {
    flatListRef.current?.scrollToIndex({
      animated: false,
      index: i,
    });
    return onIndexChange(i);
  };

  return (
    <View style={styles.container}>
      {!isHideTabBar && (
        <Tab
          value={index}
          onChange={onChangeTabIndex}
          disableIndicator
          scrollable={!isFixed}
          style={{
            paddingHorizontal: ConstantStyles.spacing8,
            borderBottomWidth: 2 * StyleSheet.hairlineWidth,
            borderBottomColor: Color.black1s,
          }}
        >
          {navigationState.routes.map((tab, ind: number) => {
            const rest = {
              key: tab.key,
              tab: tab,
              index: ind,
              onChangeTab: onChangeTabIndex,
              isFocused: index === ind,
              itemWidth: itemWidth,
              isShowRedDot: isShowRedDot,
              isShowBadge: isShowBadge,
            };

            return renderTab ? renderTab(rest) : <ITabBarItem {...rest} />;
          })}
        </Tab>
      )}
      {renderScene && (
        <FlatList
          ref={flatListRef}
          data={navigationState.routes}
          keyExtractor={(_item, i) => i.toString()}
          horizontal
          pagingEnabled
          scrollEnabled={disableSwipe ? false : true}
          showsHorizontalScrollIndicator={false}
          onScroll={(e) => {
            const transX = e.nativeEvent.contentOffset.x;
            const ind = transX / ScreenUtils.WIDTH_SCREEN;
            return onIndexChange(Math.floor(ind));
          }}
          renderItem={({ item }) => {
            return (
              <View style={{ width: ScreenUtils.WIDTH_SCREEN }}>
                {renderScene({ tab: item })}
              </View>
            );
          }}
        />
      )}
    </View>
  );
};
