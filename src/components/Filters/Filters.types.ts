import { BaseSyntheticEvent } from "react";

export type ToggleBtnProps = {
  $isOpen: boolean;
  onClick: () => void;
};

export type TFilterProps = {
  $isOpen: boolean;
};

export type TFilterSelectorProps = {
  $isActive: boolean;
  onClick: (e: BaseSyntheticEvent<HTMLLIElement>) => void;
};
