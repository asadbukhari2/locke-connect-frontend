import React from 'react';
import { StyledMortgageCalc } from './MortgageCalc.styles';
import Input from '../TextField';
import Select from '../DropDown/PropertyDropDown';
import { loanProgram } from '../Constants';
import Button from '../Button';

const MortgageCalc = () => {
  return (
    <StyledMortgageCalc>
      <strong className="title">Mortgage Calculator</strong>
      <Input label="Home price" Field_Name="homePrice" placeholder="$ 300,00" />
      <div className="cobineFields">
        <Input label="Down payment" Field_Name="downPayment" placeholder="$ 60,00" disabled />
        <Input placeholder="20 %" />
      </div>
      <Select option={loanProgram} onChange={e => console.log(e)} title="Loan program" className="select" />
      <Input label="Interest rate" Field_Name="interestRate" placeholder="5.54 %" />
      <Button variant="primary">See current rates</Button>
    </StyledMortgageCalc>
  );
};

export default MortgageCalc;
