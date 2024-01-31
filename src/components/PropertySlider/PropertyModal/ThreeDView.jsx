import React from "react";
import { StyledPropertyModal, ThreeDViewStyle } from "./PropertyModal.styles";
import { MdOutlineClose } from "react-icons/md";

const ThreeDView = () => {
  return (
    <StyledPropertyModal>
      <div className="title">
        <span>3D View</span>
      </div>
      <ThreeDViewStyle>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/mJVuZiK9a6I?si=ljdlSigphrvLiKMQ"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </ThreeDViewStyle>
    </StyledPropertyModal>
  );
};

export default ThreeDView;
