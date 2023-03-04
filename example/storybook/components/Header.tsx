import { action } from "@storybook/addon-actions";
import { select, text } from "@storybook/addon-knobs";
import React, { FunctionComponent } from "react";
import {
  BaseHeaderBar,
  BaseSearch,
  HeaderTypes,
  Themes,
} from "@phamquyen/rn-core-components";
import { Text, TouchableOpacity } from "react-native";

export const HeaderDefault: FunctionComponent = () => {
  return (
    <BaseHeaderBar
      title={text("Title content", "Title tối đa 1 dòng nhiều")}
      headerType={select(
        "Header color of content",
        HeaderTypes,
        HeaderTypes.DARK
      )}
      onPressGoBack={action("Handle go Back")}
      headerColor={select("Header color background", Themes.Color, undefined)}
      renderIconRight={
        <TouchableOpacity>
          <Text>Lưu</Text>
        </TouchableOpacity>
      }
    />
  );
};

export const HeaderWithSearch: FunctionComponent = () => {
  return (
    <>
      <BaseHeaderBar
        title={text("Title content", "Title tối đa 1 dòng nhiều")}
        headerType={select(
          "Header color of content",
          HeaderTypes,
          HeaderTypes.DARK
        )}
        onPressGoBack={action("Handle go Back")}
        headerColor={select("Header color of content", Themes.Color, undefined)}
      />
      <BaseSearch
        placeHolder={text("Placeholder", "Placeholder...")}
        value={text("Input value", "Input here...")}
        onChangeText={() => {}}
        onClearInput={() => {}}
      />
    </>
  );
};
