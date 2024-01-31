import React from "react";
import { ToggleSwitchStyle } from "./UserSearchFilter.styles";

const ToggleSwitch = ({ fieldName = "label", sm }) => {
  return (
    <ToggleSwitchStyle $sm={sm}>
      <input type="checkbox" id={fieldName} />
      <label className="switch" htmlFor={fieldName}></label>
    </ToggleSwitchStyle>
  );
};

export default ToggleSwitch;
