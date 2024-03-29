import { useEffect, useState, FC, BaseSyntheticEvent } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { selectFilters } from "../redux/teachers/filter-selectors";
import { setFilters } from "../redux/teachers/filter-slice";

import { IDropDownState, toggleDropDown } from "src/utils";
import { languages, levels, prices } from "../constants";
import { DropDown } from "../Global/DropDown/DropDown.styled";

import {
  Select,
  SelectContainer,
  Label,
  Form,
  Arrow,
  SelectorItem,
  BtnReset,
} from "./Filters.styled";

import arrow from "/icons/chevron-down.svg";
import { useAppDispatch } from "../redux/store";

export const Filters: FC = () => {
  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const { language, level, price } = useSelector(selectFilters);
  const [languageSelect, setLanguageSelect] = useState<
    string[] | null | string
  >(languages);
  const [levelSelect, setLevelSelect] = useState<string | null | string[]>(
    levels
  );
  const [priceSelect, setPriceSelect] = useState<number[]>(prices);
  const [isDropDownOpen, setIsDropDownOpen] = useState({
    language: false,
    level: false,
    price: false,
  });
  const [isBtnActive, setIsBtnActive] = useState(false);

  useEffect(() => {
    setLanguageSelect(language);
    setLevelSelect(level);
    setPriceSelect(price as number[]);
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

  const handleFilterChange = (
    filterName: string,
    filterValue: string | number[] | number
  ) => {
    const isFiltersSelected =
      filterValue &&
      !!(
        filterName === "language" ||
        filterName === "level" ||
        filterName === "price"
      );

    switch (filterName) {
      case "language":
        setLanguageSelect(filterValue as string);
        break;

      case "level":
        setLevelSelect(filterValue as string);
        break;

      case "price":
        setPriceSelect(filterValue as number[]);
        break;

      default:
        break;
    }

    setIsDropDownOpen((prevState) =>
      toggleDropDown(prevState, filterName as keyof IDropDownState)
    );

    setIsBtnActive(isFiltersSelected as boolean);

    setSearchParams((prevParams) => {
      const newParams = new URLSearchParams(prevParams);
      newParams.set(filterName, filterValue as string);
      return newParams;
    });
  };

  const handleSelectLanguage = (e: BaseSyntheticEvent<HTMLLIElement>) => {
    const languageValue = e.target.attributes.value.value;

    handleFilterChange("language", languageValue);
  };

  const handleSelectLevel = (e: BaseSyntheticEvent<HTMLLIElement>) => {
    const levelValue = e.target.attributes.value.value;
    handleFilterChange("level", levelValue);
  };

  const handleSelectPrice = (e: BaseSyntheticEvent<HTMLLIElement>) => {
    const priceValue = e.target.attributes.value.value;
    const parsedPrice = parseInt(priceValue);

    handleFilterChange("price", parsedPrice);
  };

  const handleResetFilters = () => {
    setLanguageSelect(language);
    setLevelSelect(level);
    setPriceSelect(price as number[]);
    setIsBtnActive(false);
    setSearchParams(new URLSearchParams());
  };

  return (
    <>
      <Form>
        {" "}
        <label htmlFor="language">
          <Label id="language">Languages</Label>
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
        <label htmlFor="level">
          <Label id="level">Levels</Label>

          <SelectContainer>
            <Select $isOpen={isDropDownOpen.level}>
              {levelSelect || "All levels"}
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
        <label htmlFor="price">
          <Label id="price">Price</Label>
          <SelectContainer>
            <Select $isOpen={isDropDownOpen.price}>
              {priceSelect || "All prices"}
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
                  setIsDropDownOpen((prevState) =>
                    toggleDropDown(prevState, "price")
                  )
                }
              >
                <ul>
                  {prices.map((option) => (
                    <SelectorItem
                      onClick={handleSelectPrice}
                      key={option}
                      value={option}
                      $isActive={priceSelect === (option as any)}
                    >
                      {option}
                    </SelectorItem>
                  ))}
                </ul>
              </DropDown>
            )}
          </SelectContainer>
        </label>
        <BtnReset
          type="button"
          disabled={!isBtnActive}
          onClick={handleResetFilters}
        >
          Reset filters
        </BtnReset>
      </Form>
    </>
  );
};
