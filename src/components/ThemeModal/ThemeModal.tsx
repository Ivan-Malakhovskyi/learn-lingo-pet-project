import { FC } from "react";
import { Modal } from "../Global/Modal";
import { ThemeSwitcher } from "../ThemeSwitcher";

interface IThemeModalProps {
  toggle: () => void;
}

export const ThemeModal: FC<IThemeModalProps> = ({ toggle }) => {
  return (
    <Modal close={toggle}>
      <ThemeSwitcher />
    </Modal>
  );
};
