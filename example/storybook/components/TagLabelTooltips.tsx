import { boolean, text } from "@storybook/addon-knobs";
import React, { FunctionComponent } from "react";
import { ITags, ITooltip, IconButtonClear } from "@quyendev/rn-components";
import { FlexCenterView } from ".";

export const ITooltipAndTagPrimary: FunctionComponent = () => {
  const [show, setShow] = React.useState<boolean>(false);

  return (
    <FlexCenterView>
      <ITooltip
        onCloseTooltip={() => setShow(false)}
        isVisible={show}
        message={text("ITooltip message", "this is ITags example")}
      >
        <ITags
          leftIcon={<IconButtonClear />}
          tagName={text("ITag name", "ITags example")}
          isShowClose={boolean("Show/hide icon close tag", true)}
          onCloseTag={() => {}}
          onSelectedTag={() => setShow(true)}
          isSelected={boolean("Is selected Tag", false)}
        />
      </ITooltip>
    </FlexCenterView>
  );
};
