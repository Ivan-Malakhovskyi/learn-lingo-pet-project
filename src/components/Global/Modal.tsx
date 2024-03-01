import { createPortal } from "react-dom";
import {
  Backdrop,
  CloseButton,
  // Container,
  ModalContent,
} from "./Modal.styled";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { useEffect } from "react";
import iconClose from "/icons/x.svg";

const modalRoot = document.querySelector("#modal-root");

export const Modal = ({ close, children }) => {
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

  const handleBackdropClick = ({ target, currentTarget }) => {
    if (target === currentTarget) {
      close();
    }
  };

  return createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <ModalContent>
        <CloseButton onClick={close}>
          <img src={iconClose} alt="icon_close" width={32} height={32} />
        </CloseButton>

        {children}
      </ModalContent>
    </Backdrop>,
    modalRoot
  );
};
