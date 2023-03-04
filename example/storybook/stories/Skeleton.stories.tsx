import { storiesOf } from "@storybook/react-native";
import React from "react";
import { LinePrimary, SkeletonExample, SquarePrimary } from "../components";

storiesOf("Skeleton", module)
  .add("Example", () => <SkeletonExample />)
  .add("Square Skeleton", () => <SquarePrimary />)
  .add("Line Skeleton", () => <LinePrimary />);
