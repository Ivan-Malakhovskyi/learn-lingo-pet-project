import { FC, useEffect } from "react";
import { ModalStyled } from "./DropDown.styled";
import { DropDownProps } from "./DropDown.types";

export const DropDow: FC<DropDownProps> = ({ close, children }) => {
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
