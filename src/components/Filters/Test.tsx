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
  const [languageSelect, setLanguageSelect] = useState("All");
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

  const handleLanguageSelect = (item: string) => {
    setLanguageSelect(item);
    handleDropdownClick("language");
  };

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
                value={languageSelect}
                width={221}
                onClick={handleDropdownClick("language")}
              />
              <ToggleBtn onClick={handleDropdownClick("language")}>
                <FaChevronUp />
              </ToggleBtn>
              <ListOptions>
                {isLanguage &&
                  languages.map((language) => (
                    <ListItem
                      key={language}
                      onClick={() => handleLanguageSelect(language)}
                    >
                      {language}
                    </ListItem>
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
                value={levelSelect}
              />
              <ToggleBtn onClick={handleDropdownClick("level")}>
                <FaChevronUp />
              </ToggleBtn>
              <ListOptions>
                {" "}
                {isLevel &&
                  levels.map((level) => (
                    <ListItem
                      key={level}
                      onClick={() => handleLanguageSelect(level)}
                    >
                      {level}
                    </ListItem>
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
                value={priceSelect}
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
