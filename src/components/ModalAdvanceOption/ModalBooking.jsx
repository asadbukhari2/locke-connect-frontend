import React from "react";
import Button from "../Button";
import { ModalContent } from "./ModalAdvanceOption.styles";
import { MdOutlineClose } from "react-icons/md";
import { IoCheckmark } from "react-icons/io5";
function ModalBooking({ setOpen }) {
  return (
    <ModalContent>
      <div className="bookingSuccess">
        <IoCheckmark size="30" color="var(--success-500)" />
      </div>
      <strong className="bookingTitle">Thanks For Your Booking</strong>
      <span className="para-booking">
        One of our representative will contact with you very soon again
      </span>
      <Button onClick={() => setOpen(false)}>Go Back</Button>
    </ModalContent>
  );
}

export default ModalBooking;
