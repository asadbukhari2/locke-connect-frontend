import React, { useState } from "react";
import { FormType, Item, MainWrapper } from "../Form.styles";
import UserRegister from "../UserRegister";
import ProfessionalRegister from "../ProfessionalRegister";

const SignUp = () => {
  const [formType, setFromType] = useState(1);
  return (
    <MainWrapper>
      <FormType>
        <Item
          $active={formType == 1 ? true : false}
          onClick={() => setFromType(1)}
        >
          User
        </Item>
        <Item
          $active={formType == 2 ? true : false}
          onClick={() => setFromType(2)}
        >
          Professional
        </Item>
      </FormType>
      {formType == 1 && <UserRegister />}
      {formType == 2 && <ProfessionalRegister />}
    </MainWrapper>
  );
};

export default SignUp;
