import LeftAside from '@/components/Selling/LeftAside';
import RightAside from '@/components/Selling/RightAside';
import { StyledSelling } from '@/components/Selling/Selling.styles';
import React from 'react';

const selling = () => {
  return (
    <StyledSelling>
      <LeftAside />
      <RightAside />
    </StyledSelling>
  );
};

export default selling;
