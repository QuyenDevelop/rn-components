import React, { FunctionComponent } from "react";
import { Fade, Placeholder, PlaceholderMedia } from "rn-placeholder";
import { Color, ConstantStyles } from "../Themes";

export interface ISquareSkeletonProps {
  size: number;
  isCircle?: boolean;
  cornerRadius?: number;
}

export const ISquareSkeleton: FunctionComponent<ISquareSkeletonProps> = ({
  size = ConstantStyles.sizeLarge,
  cornerRadius = ConstantStyles.borderRadius8,
  isCircle = false,
}) => {
  return (
    <Placeholder
      Animation={Fade}
      style={{
        margin: ConstantStyles.spacing4,
        width: size,
        height: size,
      }}
    >
      <PlaceholderMedia
        style={{
          width: size,
          height: size,
          borderRadius: isCircle ? size / 2 : cornerRadius,
        }}
        isRound={isCircle}
        color={Color.black1s}
      />
    </Placeholder>
  );
};
