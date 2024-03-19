import { ChangeEventHandler, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { selectFilters } from "../redux/teachers/filter-selectors";
import { setFilters } from "../redux/teachers/filter-slice";

import { toggleDropDown } from "src/utils";

import { languages, levels, prices } from "../constants";

import {
  Select,
  SelectContainer,
  Label,
  Form,
  Arrow,
  DropDown,
  SelectorItem,
} from "./Filters.styled";

import arrow from "/icons/chevron-down.svg";

export const Filters = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const { language, level, price } = useSelector(selectFilters);
  const [languageSelect, setLanguageSelect] = useState(languages);
  const [levelSelect, setLevelSelect] = useState(levels);
  const [priceSelect, setPriceSelect] = useState(prices);
  const [isDropDownOpen, setIsDropDownOpen] = useState({
    language: false,
    level: false,
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

  const handleFilterChange = (filterName: string, filterValue: string[]) => {
    if (
      (filterName === "language" && language === filterValue) ||
      (filterName === "level" && level === filterValue) ||
      (filterName === "price" && price === filterValue)
    ) {
      return; // Не оновлюємо, якщо значення не змінилося
    }

    switch (filterName) {
      case "language":
        setLanguageSelect(filterValue);
        break;

      case "level":
        setLevelSelect(filterValue);
        break;

      case "price":
        setPriceSelect(filterValue);
        break;

      default:
        break;
    }

    setIsDropDownOpen((prevState) => toggleDropDown(prevState, filterName));

    setSearchParams((prevParams) => {
      const newParams = new URLSearchParams(prevParams);
      newParams.set(filterName, filterValue);
      return newParams;
    });
  };

  const handleSelectLanguage = (e: ChangeEventHandler) => {
    const languageValue = e.target.attributes.value.value;

    handleFilterChange("language", languageValue);
  };

  const handleSelectLevel = (e: ChangeEventHandler) => {
    const levelValue = e.target.attributes.value.value;

    handleFilterChange("level", levelValue);
  };

  const handleSelectPrice = (e: ChangeEventHandler) => {
    const priceValue = e.target.attributes.value.value;
    const parsedPrice = parseInt(priceValue);

    handleFilterChange("price", parsedPrice);
  };

  return (
    <>
      <Form>
        {" "}
        <label htmlFor="">
          <Label>Languages</Label>
          <SelectContainer>
            <Select $isOpen={isDropDownOpen.language}>
              {languageSelect || "All languages"}
            </Select>

            <button
              type="button"
              onClick={() =>
                setIsDropDownOpen((prevState) =>
                  toggleDropDown(prevState, "language")
                )
              }
            >
              {" "}
              <Arrow src={arrow} $isOpen={isDropDownOpen.language} />
            </button>

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

          <SelectContainer>
            <Select $isOpen={isDropDownOpen.level}>
              {levelSelect || " Choose your Level"}
            </Select>

            <button
              type="button"
              onClick={() =>
                setIsDropDownOpen((prevState) =>
                  toggleDropDown(prevState, "level")
                )
              }
            >
              <Arrow src={arrow} $isOpen={isDropDownOpen.level} />
            </button>

            {isDropDownOpen.level && (
              <DropDown
                close={() =>
                  setIsDropDownOpen((prevState) =>
                    toggleDropDown(prevState, "level")
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
          </SelectContainer>
        </label>
        <label htmlFor="">
          <Label>Price</Label>
          <SelectContainer>
            <Select $isOpen={isDropDownOpen.price}>
              {priceSelect || " Choose your price"}
            </Select>

            <button
              type="button"
              onClick={() =>
                setIsDropDownOpen((prevState) =>
                  toggleDropDown(prevState, "price")
                )
              }
            >
              {" "}
              <Arrow src={arrow} $isOpen={isDropDownOpen.price} />
            </button>

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
          </SelectContainer>
        </label>
      </Form>
    </>
  );
};
