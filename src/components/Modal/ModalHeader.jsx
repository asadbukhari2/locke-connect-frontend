import React, { useEffect } from "react";
import { ContentHolder, StyledModal } from "./Modal.styles";

const ModalHeader = ({
  children,
  open,
  setOpen,
  bg,
  padding,
  width,
  desktopRight,
  desktopTop,
}) => {
  useEffect(() => {
    // Function to disable scrolling when the modal is open
    const disableScroll = () => {
      document.body.style.overflow = "hidden";
    };

    // Function to enable scrolling when the modal is closed
    const enableScroll = () => {
      document.body.style.overflow = "auto";
    };

    if (open) {
      disableScroll();
    } else {
      enableScroll();
    }

    // Clean up the event listener when the component unmounts
    return () => {
      enableScroll();
    };
  }, [open]);
  return (
    open && (
      <StyledModal open={open} onClick={() => setOpen(false)}>
        <ContentHolder
          bg={bg}
          padding={padding}
          width={width}
          desktopRight={desktopRight}
          desktopTop={desktopTop}
          onClick={(e) => e.stopPropagation()}
        >
          <div>{children}</div>
        </ContentHolder>
      </StyledModal>
    )
  );
};

export default ModalHeader;
