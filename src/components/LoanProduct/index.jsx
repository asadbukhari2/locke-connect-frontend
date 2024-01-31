import React from "react";
import Input from "../TextField";
import Select from "../DropDown/PropertyDropDown";
import { DownPayment, CreditScore, UsStates } from "../Constants";
import {
  ListCompare,
  ListItems,
  StyledLoanProduct,
} from "./LoanProduct.styles";
import { RxCross2 } from "react-icons/rx";
import { IoMdAdd } from "react-icons/io";
import Button from "../Button";
import Graph from "./Graph";
const data = [
  {
    discretion: "30-yr fixed",
    percentage: "8.083%",
    color: "var(--success-500)",
  },
  {
    discretion: "10-yr fixed",
    percentage: "6.083%",
    color: "var(--danger-500)",
  },
  {
    discretion: "10-yr fixed",
    percentage: "6.083%",
    color: "var(--warning-500)",
  },
];
function LoanProduct() {
  return (
    <StyledLoanProduct>
      <strong className="date">Nov 16, 2023</strong>
      <div className="input-wrap">
        <Input
          className="input-group"
          placeholder="Enter Number"
          label="Loan amount"
          type="number"
        />
        <div className="selectDropDown">
          <span className="label-text">Down payment</span>
          <Select
            title="20%"
            onChange={(value, name) => console.log(value)}
            option={DownPayment}
          />
        </div>
        <div className="selectDropDown">
          <span className="label-text">State </span>
          <Select
            title="Select..."
            onChange={(value, name) => console.log(value)}
            option={UsStates}
          />
        </div>

        <div className="selectDropDown">
          <span className="label-text">Credit score</span>
          <Select
            title="700-800"
            onChange={(value, name) => console.log(value)}
            option={CreditScore}
          />
        </div>
      </div>
      <div className="info-holder">
        <ListCompare>
          {data.map((elem, ind) => (
            <ListItems key={ind} $bgColor={elem.color}>
              <span className="discreption">{elem.discretion}</span>
              <span className="percentage">{elem.percentage}</span>
              <div className="cross">
                <RxCross2 size="18" />
              </div>
            </ListItems>
          ))}
        </ListCompare>
        <Button variant="success" width="241px">
          <IoMdAdd color="#fff" size="18" />
          Add Loan Type To Compare
        </Button>
      </div>
      <div className="graph-holder">
        <strong className="title">History</strong>
        <div className="graph">
          <Graph />
        </div>
      </div>
    </StyledLoanProduct>
  );
}

export default LoanProduct;
