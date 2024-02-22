import React from 'react';
import { StyledButton } from './Button.styles';

const Button = ({ children, gap, sm, outline, variant, width, loader, lg, ...rest }) => {
  return (
    <StyledButton $sm={sm} $lg={lg} $outline={outline} $variant={variant} $gap={gap} $width={width} {...rest}>
      {loader ? <span class="loader"></span> : children}
    </StyledButton>
  );
};

export default Button;
