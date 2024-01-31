import React from "react";
import { StyleBoughtSold } from "./BoughtSold.styles";

function BoughtSold({ ...rest }) {
  return (
    <StyleBoughtSold {...rest}>
      <div className="col active">
        <strong className="number">336</strong>
        <span className="text">House Sold</span>
      </div>
      <div className="col">
        <strong className="number">265</strong>
        <span className="text">Houses Bought</span>
      </div>
    </StyleBoughtSold>
  );
}

export default BoughtSold;
