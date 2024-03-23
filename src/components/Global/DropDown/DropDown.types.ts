import { ReactNode } from "react";

export type DropDownProps = {
  close: () => void;
  children: ReactNode;
  maxwidth?: number;
  maxheight?: number;
};
