import { useEffect } from "react";
import { ModalStyled } from "./DropDown.styled";

export const DropDow = ({ close, children }) => {
  useEffect(() => {
    const handleEscClick = ({ code }: KeyboardEvent) => {
      if (code === "Escape") {
        close();
      }
    };

    window.addEventListener("keydown", handleEscClick);

    return () => {
      window.removeEventListener("keydown", handleEscClick);
    };
  }, [close]);

  return <ModalStyled>{children}</ModalStyled>;
};
