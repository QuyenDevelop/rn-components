import { storiesOf } from "@storybook/react-native";
import React from "react";
import { ContainerView, ITooltipAndTagPrimary } from "../components";

storiesOf("Tooltip And Tag", module)
  .addDecorator((getStory) => {
    return <ContainerView>{getStory()}</ContainerView>;
  })
  .add("Primary", () => <ITooltipAndTagPrimary />);
