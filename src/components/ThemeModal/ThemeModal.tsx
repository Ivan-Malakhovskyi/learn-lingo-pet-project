import { FC } from "react";
import Modal from "../Global/Modal";
import { ThemeSwitcher } from "../ThemeSwitcher";

interface IThemeModalProps {
  toggle: () => void;
}

const ThemeModal: FC<IThemeModalProps> = ({ toggle }) => {
  return (
    <Modal close={toggle}>
      <ThemeSwitcher onClose={toggle} />
    </Modal>
  );
};

export default ThemeModal;
