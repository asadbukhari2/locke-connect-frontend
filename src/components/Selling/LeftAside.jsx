import React from "react";
import welcomselling from "../../../public/welcomselling.svg";
import buttonIcon from "../../../public/key.svg";
import Image from "next/image";
import { LeftAsideStyles } from "./Selling.styles";
import Input from "../TextField";
import Button from "../Button";

const LeftAside = () => {
  return (
    <LeftAsideStyles>
      <form className="form">
        <strong className="title">
          Enter your address to connect an Agent
        </strong>
        <Input type="text" placeholder="Address" className="input_main" />
        <Button variant="primary">
          <Image src={buttonIcon} alt="icon" />
          Connect to Agent
        </Button>
      </form>
      <div className="imageWrapp">
        <Image src={welcomselling} alt="image" />
      </div>
    </LeftAsideStyles>
  );
};

export default LeftAside;
