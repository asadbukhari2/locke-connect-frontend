import React, { useEffect } from 'react';
import { ContentHolder, StyledModal } from './Modal.styles';
import { MdOutlineClose } from 'react-icons/md';

const Modal = ({
  children,
  open,
  setOpen,
  bg,
  padding,
  width,
  desktopRight,
  desktopTop,
  maxWidth,
  top,
  alignMiddle,
  closer = true,
  isCloseAble = true,
}) => {
  useEffect(() => {
    // Function to disable scrolling when the modal is open
    const disableScroll = () => {
      document.body.style.overflow = 'hidden';
    };

    // Function to enable scrolling when the modal is closed
    const enableScroll = () => {
      document.body.style.overflow = 'auto';
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
      <StyledModal open={open} onClick={() => isCloseAble && setOpen(false)} $alignMiddle={alignMiddle}>
        <ContentHolder
          bg={bg}
          padding={padding}
          width={width}
          desktopRight={desktopRight}
          desktopTop={desktopTop}
          maxWidth={maxWidth}
          $top={top}
          onClick={e => e.stopPropagation()}>
          {closer && (
            <div className="closer" onClick={() => setOpen(false)}>
              <MdOutlineClose size={20} />
            </div>
          )}
          {children}
        </ContentHolder>
      </StyledModal>
    )
  );
};

export default Modal;
