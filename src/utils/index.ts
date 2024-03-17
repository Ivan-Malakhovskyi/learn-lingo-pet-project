export const toggleDropDown = (prevState, key: string) => {
  return {
    ...prevState,
    [key]: !prevState[key],
  };
};
