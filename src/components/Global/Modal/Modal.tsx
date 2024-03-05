import { createPortal } from "react-dom";
import { Backdrop, CloseButton, ModalContent } from "./Modal.styled";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { FC, useEffect } from "react";
import iconClose from "/icons/x.svg";
import { DropDownProps } from "../DropDown/DropDown.types";

const modalRoot = document.querySelector("#modal-root")!;

export const Modal: FC<DropDownProps> = ({ close, children }) => {
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
