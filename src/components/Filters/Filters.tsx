import { ChangeEventHandler, useEffect, useState } from "react";
import { languages, levels } from "../constants";
import {
  Select,
  SelectContainer,
  Label,
  Form,
  Arrow,
  DropDown,
  SelectorItem,
} from "./Filters.styled";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { selectFilters } from "../redux/teachers/filter-selectors";
import { setFilters } from "../redux/teachers/filter-slice";
import arrow from "/icons/chevron-down.svg";
import { toggleDropDown } from "src/utils";

export const Filters = () => {
  const prices = Array.from({ length: 9 }, (_, index) => index * 5);

  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const { language, level, price } = useSelector(selectFilters);
  const [languageSelect, setLanguageSelect] = useState(languages);
  const [levelSelect, setLevelSelect] = useState(levels);
  const [priceSelect, setPriceSelect] = useState(prices);

  const [isDropDownOpen, setIsDropDownOpen] = useState({
    languages: false,
    levels: false,
    price: false,
  });

  useEffect(() => {
    setLanguageSelect(language);
    setLevelSelect(level);
    setPriceSelect(price);
  }, [language, level, price]);

  useEffect(() => {
    dispatch(
      setFilters({
        language: searchParams.get("language"),
        level: searchParams.get("level"),
        price: searchParams.get("price"),
      })
    );
  }, [searchParams, dispatch]);

  const handleSelectLanguage = (e: ChangeEventHandler) => {
    const languageValue = e.target.attributes.value.value;

    setIsDropDownOpen((prevState) => toggleDropDown(prevState, "language"));

    setSearchParams((prevParams) => ({
      ...prevParams,
      language: languageValue || "",
    }));
  };

  const handleSelectLevel = (e: ChangeEventHandler) => {
    const levelValue = e.target.attributes.value.value;

    setLevelSelect(levelValue);

    setIsDropDownOpen((prevState) => toggleDropDown(prevState, "level"));

    setSearchParams((prevParams) => ({
      ...prevParams,
      levels: levelValue || "",
    }));
  };

  const handleSelectPrice = (e: ChangeEventHandler) => {
    const priceValue = e.target.attributes.value.value;
    setPriceSelect(priceValue);

    setIsDropDownOpen((prevState) => toggleDropDown(prevState, "price"));

    setSearchParams((prevState) => ({
      ...prevState,
      price: priceSelect || "",
    }));
  };

  return (
    <>
      <Form>
        {" "}
        <label htmlFor="">
          <Label>Languages</Label>
          <SelectContainer>
            <Select
              width="224px"
              onChange={handleSelectLanguage}
              isOpen={isDropDownOpen.language}
              onClick={() =>
                setIsDropDownOpen((prevState) =>
                  toggleDropDown(prevState, "language")
                )
              }
            >
              {languageSelect || "Choose your language"}
            </Select>

            <Arrow src={arrow} $isOpen={isDropDownOpen.language} />

            {isDropDownOpen.language && (
              <DropDown
                close={() =>
                  setIsDropDownOpen((prevState) =>
                    toggleDropDown(prevState, "language")
                  )
                }
              >
                <ul>
                  {languages.map((option) => (
                    <SelectorItem
                      onClick={handleSelectLanguage}
                      key={option}
                      value={option}
                      $isActive={languageSelect === option}
                    >
                      {option}
                    </SelectorItem>
                  ))}
                </ul>
              </DropDown>
            )}
          </SelectContainer>
        </label>
        <label>
          <Label>Levels</Label>
          <Select
            width="224px"
            isOpen={isDropDownOpen.levels}
            onClick={() =>
              setIsDropDownOpen((prevState) =>
                toggleDropDown(prevState, "levels")
              )
            }
            onChange={handleSelectLevel}
          >
            {levelSelect || " Choose your Level"}
          </Select>

          <Arrow src={arrow} $isOpen={isDropDownOpen.levels} />

          {isDropDownOpen.levels && (
            <DropDown
              close={() =>
                setIsDropDownOpen((prevState) =>
                  toggleDropDown(prevState, "levels")
                )
              }
            >
              <ul>
                {levels.map((option) => (
                  <SelectorItem
                    onClick={handleSelectLevel}
                    key={option}
                    value={option}
                    $isActive={levelSelect === option}
                  >
                    {option}
                  </SelectorItem>
                ))}
              </ul>
            </DropDown>
          )}
        </label>
        <label htmlFor="">
          <Label>Price</Label>
          <Select
            width="224px"
            isOpen={isDropDownOpen.price}
            onClick={() =>
              setIsDropDownOpen((prevState) =>
                toggleDropDown(prevState, "price")
              )
            }
            onChange={handleSelectLevel}
          >
            {priceSelect || " Choose your price"}
          </Select>

          <Arrow src={arrow} $isOpen={isDropDownOpen.price} />

          {isDropDownOpen.price && (
            <DropDown
              close={() =>
                setIsDropDownOpen(toggleDropDown(prevState, "price"))
              }
            >
              <ul>
                {prices.map((option) => (
                  <SelectorItem
                    onClick={handleSelectPrice}
                    key={option}
                    value={option}
                    $isActive={priceSelect === option}
                  >
                    {option}
                  </SelectorItem>
                ))}
              </ul>
            </DropDown>
          )}
        </label>
      </Form>
    </>
  );
};
