import { storiesOf } from "@storybook/react-native";
import React from "react";
import { ContainerView, PopupPrimary, PopupSecondary } from "../components";

storiesOf("Popup", module)
  .addDecorator((getStory) => {
    return <ContainerView>{getStory()}</ContainerView>;
  })
  .add("Primary", () => <PopupPrimary />)
  .add("Full Image Popup", () => <PopupSecondary />);

// 😀 😎 👍 💯
