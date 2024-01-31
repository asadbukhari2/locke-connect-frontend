import React from "react";
import { StyledBadge } from "./Badge.styles";

const Badge = ({ child, $variant, alignLeft }) => {
  return (
    <StyledBadge $variant={$variant} $alignLeft={alignLeft} translate="no">
      {child}
    </StyledBadge>
  );
};

export default Badge;
