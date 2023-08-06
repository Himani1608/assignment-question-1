// .storybook/Dropdown.stories.js
import React from "react";
import { action } from "@storybook/addon-actions";

import Dropdown from "./Dropdown";

export default {
  title: "Components/Dropdown",
  component: Dropdown,
};

const options = ["USD", "EUR", "GPY" , "EUR"];

export const One = () => (
  <Dropdown
    options={options}
    onChange={action("Option changed")}
    selectedItem={options[0]}
    variant="one"
  />
);

export const Two = () => (
  <Dropdown
    options={options}
    onChange={action("Option changed")}
    selectedItem={options[2]}
    variant="two"
  />
);

export const Three = () => (
    <Dropdown
      options={options}
      onChange={action("Option changed")}
      selectedItem={options[1]}
      variant="three"
    />
  );