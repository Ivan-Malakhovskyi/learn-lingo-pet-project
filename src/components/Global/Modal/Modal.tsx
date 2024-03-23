import { createPortal } from "react-dom";
import { Backdrop, CloseButton, ModalContent } from "./Modal.styled";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { FC, useEffect } from "react";
import iconClose from "/icons/x.svg";
import { TModalProps } from "./Modal.types";

const modalRoot = document.querySelector("#modal-root")!;

export const Modal: FC<TModalProps> = ({
  close,
  children,
  maxwidth,
  maxheight,
}) => {
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
    <Backdrop onClick={handleBackdropClick} maxheight={maxheight}>
      <ModalContent maxwidth={maxwidth}>
        <CloseButton onClick={close}>
          <img src={iconClose} alt="icon_close" width={32} height={32} />
        </CloseButton>

        {children}
      </ModalContent>
    </Backdrop>,
    modalRoot
  );
};
