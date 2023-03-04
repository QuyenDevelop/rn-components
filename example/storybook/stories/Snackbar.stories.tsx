import { storiesOf } from "@storybook/react-native";
import React from "react";
import { ContainerView, SnackBarPrimary } from "../components";

storiesOf("Snack Bar", module)
  .addDecorator((getStory) => {
    return <ContainerView>{getStory()}</ContainerView>;
  })
  .add("Primary", () => <SnackBarPrimary />);
