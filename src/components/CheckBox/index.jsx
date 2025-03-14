import React from 'react';
import { StyledCheckBox } from './CheckBox.styles';

const CheckBox = ({ type = 'checkbox', label, fieldName, className, onChange = () => {}, checked }) => {
  function handelChange(e) {
    const isChecked = e.target.checked;
    onChange({ fieldName, isChecked, name: fieldName });
  }
  return (
    <StyledCheckBox $type={type} className={className}>
      <input type="checkbox" id={fieldName} onChange={handelChange} name={fieldName} checked={checked} />
      <label htmlFor={fieldName}>{label}</label>
    </StyledCheckBox>
  );
};

export default CheckBox;
