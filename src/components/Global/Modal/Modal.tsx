import { createPortal } from "react-dom";
import { FC, useEffect } from "react";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { Backdrop, CloseButton, CloseIcon, ModalContent } from "./Modal.styled";
import iconClose from "/icons/x.svg";
import { TModalProps } from "./Modal.types";
import { modalContentVariants } from "./animations";

const modalRoot = document.querySelector("#modal-root")!;

const Modal: FC<TModalProps> = ({ close, children, maxwidth, maxheight }) => {
  useEffect(() => {
    const handleEscClick = ({ code }: KeyboardEvent) => {
      if (code === "Escape") {
        close();
      }
    };

    window.addEventListener("keydown", handleEscClick);

    disableBodyScroll(document.body);

    return () => {
      window.removeEventListener("keydown", handleEscClick);
      enableBodyScroll(document.body);
    };
  }, [close]);

  const handleBackdropClick = ({
    target,
    currentTarget,
  }: React.MouseEvent<HTMLElement>) => {
    if (target === currentTarget) {
      close();
    }
  };

  return createPortal(
    <Backdrop
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={handleBackdropClick}
      maxheight={maxheight}
    >
      <ModalContent maxwidth={maxwidth} variants={modalContentVariants}>
        <CloseButton onClick={close}>
          <CloseIcon src={iconClose} alt="icon_close" />
        </CloseButton>
        {children}
      </ModalContent>
    </Backdrop>,
    modalRoot,
  );
};

export default Modal;
