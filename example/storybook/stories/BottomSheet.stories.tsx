import { storiesOf } from "@storybook/react-native";
import React from "react";
import { BottomSheetPrimary, ContainerView } from "../components";

storiesOf("Bottom Sheet", module)
  .addDecorator((getStory) => {
    return <ContainerView>{getStory()}</ContainerView>;
  })
  .add("Primary", () => <BottomSheetPrimary />);

// 😀 😎 👍 💯
