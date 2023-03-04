import { storiesOf } from "@storybook/react-native";
import React from "react";
import {
  ContainerView,
  TabBarItemPrimary,
  TabViewPrimary,
} from "../components";

storiesOf("Tab view", module)
  .addDecorator((getStory) => {
    return <ContainerView>{getStory()}</ContainerView>;
  })
  .add("Primary", () => <TabViewPrimary />)
  .add("Tab Item", () => <TabBarItemPrimary />);
