import React, {useState} from "react";
import { LuPlus, LuMinus } from "react-icons/lu";
import { AccordionContainer, AccordionHeader, Icon, AccordionContent } from "./Accordion.styles";

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AccordionContainer>
      <AccordionHeader onClick={toggleAccordion}>
        {title}
        <Icon>{isOpen ? <LuMinus /> : <LuPlus />}</Icon>
      </AccordionHeader>
      <AccordionContent isOpen={isOpen}>
        <div className="inner">
          {children}
        </div>
      </AccordionContent>
    </AccordionContainer>
  );
};
export default Accordion;
