import { storiesOf } from "@storybook/react-native";
import React from "react";
import { CheckboxDefault, RadioCheckDefault } from "../components";

storiesOf("Check box", module)
  .add("Check box", () => <CheckboxDefault />)
  .add("Radio Check box", () => <RadioCheckDefault />);
