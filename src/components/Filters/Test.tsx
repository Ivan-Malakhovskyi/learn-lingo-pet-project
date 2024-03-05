import {
  DropDown,
  Label,
  LabelWrapper,
  ListFilters,
  ListItem,
  ListOptions,
  Main,
  Options,
  ToggleBtn,
} from "./Filters.styled";
import { languages, levels } from "../constants";
import { useState } from "react";
import { FaChevronUp } from "react-icons/fa";

const prices = Array.from({ length: 9 }, (_, index) => index * 5);

export const Test = () => {
  //! Дописати скрізь setlanguageSelect,setlevelSelect,setPriceSelect
  const [languageSelect] = useState("All");
  const [levelSelect] = useState("All");
  const [priceSelect] = useState("All");
  // const [selectedOption, setSelectedOption] = useState(null);

  const [isLanguage, setIsLanguage] = useState(false);
  const [isLevel, setIsLevel] = useState(false);
  const [isPrice, setIsPrice] = useState(false);

  const handleDropdownClick = (type: "language" | "level" | "price") => () => {
    if (type === "language") setIsLanguage(!isLanguage);
    if (type === "level") setIsLevel(!isLevel);
    if (type === "price") setIsPrice(!isPrice);
  };

  // const handleChange = (e) => {
  //   e.preventDefault();

  //   // Use the corresponding set functions to update the state
  // (e.target.value);
  //   setLevelSelect(e.target.value);
  //   setPriceSelect(e.target.value);
  // };

  return (
    <Main>
      <ListFilters>
        <li>
          <LabelWrapper>
            <Label>Languages</Label>
            <DropDown>
              <Options
                name="language"
                type="text"
                value={languageSelect || "All"}
                width={221}
                onClick={handleDropdownClick("language")}
              />
              <ToggleBtn onClick={handleDropdownClick("language")}>
                <FaChevronUp />
              </ToggleBtn>
              <ListOptions>
                {isLanguage &&
                  languages.map((language) => (
                    <ListItem key={language}>{language}</ListItem>
                  ))}
              </ListOptions>
            </DropDown>
          </LabelWrapper>
        </li>
        <li>
          <LabelWrapper>
            <Label>Level of knowledge</Label>
            <DropDown>
              {" "}
              <Options
                width={194}
                name="level"
                type="text"
                value={levelSelect || "All"}
              />
              <ToggleBtn onClick={handleDropdownClick("level")}>
                <FaChevronUp />
              </ToggleBtn>
              <ListOptions>
                {" "}
                {isLevel &&
                  levels.map((level) => (
                    <ListItem key={level}>{level}</ListItem>
                  ))}
              </ListOptions>
            </DropDown>
          </LabelWrapper>
        </li>
        <li>
          <LabelWrapper>
            <Label>Price</Label>
            <DropDown>
              {" "}
              <Options
                width={123}
                name="price"
                type="text"
                value={priceSelect || "All"}
              />
              <ToggleBtn onClick={handleDropdownClick("price")}>
                <FaChevronUp />
              </ToggleBtn>
              <ListOptions>
                {isPrice &&
                  prices.map((price) => (
                    <ListItem key={price}>{price}</ListItem>
                  ))}
              </ListOptions>
            </DropDown>
          </LabelWrapper>
        </li>
      </ListFilters>
    </Main>
  );
};
