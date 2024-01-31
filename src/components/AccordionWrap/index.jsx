import React from "react";
import Accordion from "../Accordion";
import { AccordionHolder, InfoContent } from "./AccordionWrap.styles";

const AccordionWrap = () => {

  return (
    <AccordionHolder>
      <Accordion title="Property, Lot, Community & Exterior Features">
        <InfoContent>
          <div className="column">
            <strong className="title">Water & Sewer Info</strong>
            <ul className="list">
              <li>Water Source: Public</li>
              <li>Hot Water Source: Electric</li>
              <li>Sewer: Sewer Connected</li>
            </ul>
          </div>
          <div className="column">
            <strong className="title">Water & Sewer Info</strong>
            <ul className="list">
              <li>Water Source: Public</li>
              <li>Hot Water Source: Electric</li>
              <li>Sewer: Sewer Connected</li>
            </ul>
          </div>
          <div className="column">
            <strong className="title">Water & Sewer Info</strong>
            <ul className="list">
              <li>Water Source: Public</li>
              <li>Hot Water Source: Electric</li>
              <li>Sewer: Sewer Connected</li>
            </ul>
          </div>
        </InfoContent>
      </Accordion>
      <Accordion title="Utilities & Other Information">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium laboriosam ipsam itaque sapiente asperiores modi mollitia voluptatem, delectus repellat consequatur nam dolorum rerum, aut ratione, tempore et. Quod, libero velit!</p>
      </Accordion>
      <Accordion title="Listing Details, Costs & Financing Information">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium laboriosam ipsam itaque sapiente asperiores modi mollitia voluptatem, delectus repellat consequatur nam dolorum rerum, aut ratione, tempore et. Quod, libero velit!</p>
      </Accordion>
      <Accordion title="School Neighborhood & Directions">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium laboriosam ipsam itaque sapiente asperiores modi mollitia voluptatem, delectus repellat consequatur nam dolorum rerum, aut ratione, tempore et. Quod, libero velit!</p>
      </Accordion>
    </AccordionHolder>
  );
};
export default AccordionWrap;
