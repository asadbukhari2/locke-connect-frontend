import React from "react";
import Button from "../Button";
import { ModalContent } from "./ModalDelete.styles";

function ModalDelete() {
  return (
    <>
      <ModalContent>
        <div className="text-box">
          <span className="title">Delete</span>
          <p>Are you sure you want to delete ?</p>
        </div>
        <div className="btn-holder">
          <Button variant="danger">Yes</Button>
          <Button variant="success">No</Button>
        </div>
      </ModalContent>
    </>
  );
}

export default ModalDelete;
