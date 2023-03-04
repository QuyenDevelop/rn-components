import { boolean, object } from "@storybook/addon-knobs";
import React, { FunctionComponent } from "react";
import { Text } from "react-native";
import {
  ITabBarItem,
  ITabItemProps,
  ITabView,
  TabModel,
} from "@phamquyen/rn-core-components";
import { FlexCenterView } from ".";

export const TabViewPrimary: FunctionComponent = () => {
  const [index, setIndex] = React.useState<number>(0);

  const routes: Array<TabModel> = [
    {
      key: "Button",
      title: "Button",
      badgeNumber: 5,
    },
    {
      key: "BottomSheet",
      title: "BottomSheet",
      badgeNumber: 10,
    },
    {
      key: "Empty",
      title: "Empty",
      badgeNumber: 0,
    },
  ];

  const renderScene = React.useCallback(({ tab }: { tab: TabModel }) => {
    switch (tab.key) {
      case "Button":
        return (
          <FlexCenterView>
            <Text>Button</Text>
          </FlexCenterView>
        );
      case "BottomSheet":
        return (
          <FlexCenterView>
            <Text>BottomSheet</Text>
          </FlexCenterView>
        );
      case "Empty":
        return (
          <FlexCenterView>
            <Text>Empty</Text>
          </FlexCenterView>
        );
      default:
        return <></>;
    }
  }, []);

  const renderTabIcon = React.useCallback((props: ITabItemProps) => {
    return <ITabBarItem {...props} />;
  }, []);

  return (
    <FlexCenterView>
      <ITabView
        onIndexChange={setIndex}
        renderScene={renderScene}
        navigationState={object("initial state", {
          index: index,
          routes: routes,
        })}
        renderTab={renderTabIcon}
        isHideTabBar={boolean("Show/Hide Tab Bar", false)}
        isShowRedDot={boolean("Show/Hide Dot", false)}
        isShowBadge={boolean("Show/Hide Badge", false)}
        disableSwipe={boolean("disable/enable Swipe", false)}
        isFixed={boolean("Fixed width Item Tab", true)}
      />
    </FlexCenterView>
  );
};

export const TabBarItemPrimary: FunctionComponent = () => {
  return (
    <FlexCenterView>
      <ITabBarItem
        tab={object("Tab bar item", {
          key: "1",
          title: "Tab 01",
          badgeNumber: 9,
        })}
        index={0}
        isFocused={boolean("show/hide Focus", true)}
        onChangeTab={() => {}}
        isShowBadge={boolean("show/hide Badge", false)}
        isShowRedDot={boolean("show/hide Dot", false)}
      />
    </FlexCenterView>
  );
};
