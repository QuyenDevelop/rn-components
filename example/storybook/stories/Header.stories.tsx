/* eslint-disable react-native/no-inline-styles */
import { storiesOf } from "@storybook/react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import { HeaderDefault, HeaderWithSearch } from "../components";

storiesOf("Header Bar", module)
  .addDecorator((getStory) => {
    return <SafeAreaView style={{ flex: 1 }}>{getStory()}</SafeAreaView>;
  })
  .add("Header Default", () => <HeaderDefault />)
  .add("Header with Search", () => <HeaderWithSearch />);
