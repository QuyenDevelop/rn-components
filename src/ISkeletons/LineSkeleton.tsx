import React, { FunctionComponent } from "react";
import { Fade, Placeholder, PlaceholderLine } from "rn-placeholder";
import { Color, ConstantStyles } from "../Themes";

export interface ISkeletonProps {
  width: number;
  height?: number;
  cornerRadius?: number;
}

export const ILineSkeleton: FunctionComponent<ISkeletonProps> = ({
  width,
  height = ConstantStyles.spacing8,
  cornerRadius = ConstantStyles.borderRadius8,
}) => {
  return (
    <Placeholder
      Animation={Fade}
      style={{
        width: width,
        height: height,
        margin: ConstantStyles.spacing4,
      }}
    >
      <PlaceholderLine
        style={{
          width: width,
          height: height,
          borderRadius: cornerRadius,
        }}
        color={Color.black1s}
      />
    </Placeholder>
  );
};
