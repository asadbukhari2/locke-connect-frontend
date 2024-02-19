import React from 'react';
import { ToggleSwitchStyle } from './UserSearchFilter.styles';

const ToggleSwitch = ({ fieldName = 'label', sm, value, onChange = () => {} }) => {
  return (
    <ToggleSwitchStyle $sm={sm}>
      <input type="checkbox" id={fieldName} name={fieldName} checked={value} onChange={onChange} />
      <label className="switch" htmlFor={fieldName}></label>
    </ToggleSwitchStyle>
  );
};

export default ToggleSwitch;
