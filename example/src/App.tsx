/* eslint-disable react-native/no-inline-styles */
import * as React from "react";

import { View } from "react-native";
import {
  BaseHeaderBar,
  ITabBarItem,
  ITabItemProps,
  ITabView,
  TabModel,
} from "rn-core-components";
import BottomSheetTab from "./BottomSheet";
import ButtonTab from "./ButtonTab";
import EmptyStateTab from "./EmptyState";

export default function App() {
  const [index, setIndex] = React.useState<number>(0);
  const routes: Array<TabModel> = [
    {
      key: "Button",
      title: "Button",
    },
    {
      key: "BottomSheet",
      title: "BottomSheet",
    },
    {
      key: "Empty",
      title: "Empty",
    },
  ];

  const renderScene = React.useCallback(({ tab }: { tab: TabModel }) => {
    switch (tab.key) {
      case "Button":
        return <ButtonTab />;
      case "BottomSheet":
        return <BottomSheetTab />;
      case "Empty":
        return <EmptyStateTab />;
      default:
        return <></>;
    }
  }, []);

  const renderTabIcon = (props: ITabItemProps) => {
    return <ITabBarItem {...props} />;
  };

  return (
    <View style={{ flex: 1 }}>
      <BaseHeaderBar title={"Title tối đa 1 dòng nhiều"} />
      <ITabView
        onIndexChange={setIndex}
        renderScene={renderScene}
        navigationState={{ index, routes }}
        renderTab={renderTabIcon}
        // disableSwipe
        isFixed
      />
    </View>
  );
}
