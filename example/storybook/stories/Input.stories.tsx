import { storiesOf } from "@storybook/react-native";
import React from "react";
import {
  ContainerView,
  TextAreaDefault,
  TextDropdown,
  TextInputDefault,
} from "../components";

storiesOf("Input", module)
  .addDecorator((getStory) => {
    return <ContainerView>{getStory()}</ContainerView>;
  })
  .add("Text Input", () => <TextInputDefault />)
  .add("Text Area", () => <TextAreaDefault />)
  .add("Text Dropdown List", () => <TextDropdown />);

// 😀 😎 👍 💯
