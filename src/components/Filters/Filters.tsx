import { useState } from "react";
import { languages, levels } from "../constants";
import { Select, SelectContainer } from "./Filters.styled";

export const Filters = () => {
  const prices = Array.from({ length: 9 }, (_, index) => index * 5);

  const [languageSelect, setLanguageSelect] = useState("");
  const [levelSelect, setLevelSelect] = useState("");
  const [priceSelect, setSelectPrice] = useState("");

  const [isDropDownOpen, setIsDropDownOpen] = useState({
    language: false,
    level: false,
    price: false,
  });

  const handleChange = (e) => {
    e.preventDefault();

    const language = languageSelect || "";
    const level = levelSelect || "";
    const price = setSelectPrice || "";
  };

  const handleSelectLanguage = (e) => {
    setLanguageSelect(e.target.value);
  };

  const handleSelectLevel = (e) => {
    setLevelSelect(e.target.value);
  };

  const handleSelectPrice = (e) => {
    setSelectPrice(e.target.value);
  };

  return (
    <>
      <form onChange={handleChange}>
        {" "}
        <label htmlFor="">
          <SelectContainer>
            {/* <Label>Languages</Label> */}
            <Select
              value={languageSelect}
              onChange={handleSelectLanguage}
              isOpen={isDropDownOpen.language}
              onClick={() =>
                setIsDropDownOpen((prevState) => ({
                  ...prevState,
                  language: !prevState.language,
                }))
              }
            >
              <option value="" disabled>
                Choose your language
              </option>
              {languages.map((language) => (
                <option value={language}>{language}</option>
              ))}
            </Select>
          </SelectContainer>
        </label>
        <label>
          <Label>Levels</Label>
          <Select value={levelSelect} onChange={handleSelectLevel}>
            <option value="" disabled>
              Choose your Level
            </option>

            {levels.map((level) => (
              <option value={level}>{level}</option>
            ))}
          </Select>
        </label>
        <label htmlFor="">
          <Label>Price</Label>
          <Select value={priceSelect} onChange={handleSelectPrice}>
            <option value="" disabled>
              Price
            </option>
            {prices.map((price) => (
              <option value={price}>{price}</option>
            ))}
          </Select>
        </label>
      </form>
    </>
  );
};
