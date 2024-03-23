import { ReactNode } from "react";

export type TModalProps = {
  close: () => void;
  children: ReactNode;
  maxwidth?: number;
  maxheight?: number;
};

export type TModalTypes = {
  maxheight?: number;
  maxwidth?: number;
};
