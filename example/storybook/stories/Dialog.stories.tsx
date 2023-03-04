import { storiesOf } from "@storybook/react-native";
import React from "react";
import { ContainerView, DialogPrimary } from "../components";

storiesOf("Dialog", module)
  .addDecorator((getStory) => {
    return <ContainerView>{getStory()}</ContainerView>;
  })
  .add("Primary", () => <DialogPrimary />);

// 😀 😎 👍 💯
