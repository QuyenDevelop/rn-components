import { storiesOf } from "@storybook/react-native";
import React from "react";
import { SheetEmptyChangeImage, SheetEmptyPrimary } from "../components";

storiesOf("Empty State", module)
  .add("Default Image", () => <SheetEmptyPrimary />)
  .add("Change Image", () => <SheetEmptyChangeImage />);
