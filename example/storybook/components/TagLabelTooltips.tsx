import { ITags, ITooltip, Themes } from "@phamquyen/rn-core-components";
import { boolean, number, text } from "@storybook/addon-knobs";
import React, { FunctionComponent } from "react";
import { Text } from "react-native";
import { FlexCenterView } from "./FlexCenterView";

export const ITooltipAndTagPrimary: FunctionComponent = () => {
  const [show, setShow] = React.useState<boolean>(false);
  const [color, setColor] = React.useState<string>(Themes.Color.black6s);

  const handleSelect = () => {
    setShow(true);
    setColor(Themes.Color.white6);
  };

  const onCloseTooltip = () => {
    setShow(false);
    setColor(Themes.Color.black6s);
  };

  return (
    <FlexCenterView>
      <ITooltip
        onCloseTooltip={onCloseTooltip}
        isVisible={show}
        message={text("ITooltip message", "this is ITags example")}
        duration={number("Duration", 0)}
      >
        <ITags
          leftIcon={
            <Text
              style={{
                color: color,
              }}
            >
              {text("ITag Icon", "👍")}
            </Text>
          }
          showLeftIcon={boolean("Show/hide icon Left", true)}
          tagName={text("ITag name", "ITags example")}
          isShowClose={boolean("Show/hide icon close tag", true)}
          onCloseTag={() => {}}
          onSelectedTag={handleSelect}
          isSelected={show}
        />
      </ITooltip>
    </FlexCenterView>
  );
};
