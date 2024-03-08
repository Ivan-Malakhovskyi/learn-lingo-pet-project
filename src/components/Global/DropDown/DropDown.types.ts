import { ReactNode } from "react";

export type DropDownProps = {
  close: () => void;
  children: ReactNode;
  maxWidth?: number;
  maxHeight?: number;
};
