export interface IDropDownState {
  language: boolean;
  level: boolean;
  price: boolean;
}

export const toggleDropDown = (
  prevState: IDropDownState,
  key: keyof IDropDownState
) => {
  return {
    ...prevState,
    [key]: !prevState[key],
  };
};
