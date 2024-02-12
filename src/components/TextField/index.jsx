import React from 'react';
import { InputStyled, StyledTextField } from './TextField.styles';
import info from '../../../public/infoIcon.svg';
import question from '../../../public/question.svg';
import Image from 'next/image';

const Input = ({ Field_Name, label, error, toolTip, className, hasIcon, disabled, ...rest }) => {
  return (
    <StyledTextField className={className}>
      {label && (
        <label htmlFor={Field_Name} className="label">
          {label}
        </label>
      )}
      <InputStyled $error={error} className="inputstyle_custom" $hasIcon={hasIcon} $disable={disabled}>
        <div className="iconWrapper">{hasIcon}</div>
        <input {...rest} id={Field_Name} disabled={disabled} />
      </InputStyled>
      <div className="info">
        {error?.length > 0 && (
          <div className="error">
            <figure className="imageWrapper">
              <Image src={info} alt="info" />
            </figure>
            <p>{error}</p>
          </div>
        )}
        {toolTip?.length > 0 && (
          <figure className="question">
            <Image src={question} alt="question" />
            <div className="toolTip">{toolTip}</div>
          </figure>
        )}
      </div>
    </StyledTextField>
  );
};

export default Input;
