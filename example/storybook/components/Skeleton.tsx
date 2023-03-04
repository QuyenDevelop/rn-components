import { boolean, number } from "@storybook/addon-knobs";
import React, { FunctionComponent } from "react";
import { ILineSkeleton, ISquareSkeleton } from "rn-core-components";
import { FlexCenterView } from ".";
import { View } from "react-native";

export const SkeletonExample: FunctionComponent = () => {
  return (
    <FlexCenterView>
      <View>
        <ISquareSkeleton size={120} />
        <ILineSkeleton width={100} height={16} />
        <ILineSkeleton width={50} height={16} />
        <ILineSkeleton width={80} height={16} />
      </View>
    </FlexCenterView>
  );
};

export const SquarePrimary: FunctionComponent = () => {
  return (
    <FlexCenterView>
      <ISquareSkeleton
        size={number("size of square", 48)}
        isCircle={boolean("is Square or Circle", false)}
      />
    </FlexCenterView>
  );
};

export const LinePrimary: FunctionComponent = () => {
  return (
    <FlexCenterView>
      <ILineSkeleton
        width={number("Width", 100)}
        height={number("Height", 8)}
        cornerRadius={number("Height", 8)}
      />
    </FlexCenterView>
  );
};
