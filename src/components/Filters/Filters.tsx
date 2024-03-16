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

export const Filters = () => {
  const prices = Array.from({ length: 9 }, (_, index) => index * 5);

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
        price: Number.parseInt(searchParams.get("price")),
      })
    );
  }, [searchParams, dispatch]);

  const handleSelectLanguage = (e: ChangeEventHandler) => {
    const value = e.target.attributes.value.value;

    setLanguageSelect(value);

    setIsDropDownOpen((prevState) => ({
      ...prevState,
      language: !prevState.language,
    }));

    setSearchParams((prevParams) => ({
      ...prevParams,
      language: value ?? "",
    }));
  };

  const handleSelectLevel = (e: ChangeEventHandler) => {
    setLevelSelect(e.target.value);

    const level = levelSelect || "";

    setSearchParams({ level });
  };

  const handleSelectPrice = (e: ChangeEventHandler) => {
    setPriceSelect(e.target.value);
    const price = priceSelect || "";

    setSearchParams({ price });
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
                setIsDropDownOpen((prevState) => ({
                  ...prevState,
                  language: !prevState.language,
                }))
              }
            >
              {languageSelect || "Choose your language"}
            </Select>

            <Arrow src={arrow} $isOpen={isDropDownOpen.language} />

            {isDropDownOpen.language && (
              <DropDown
                close={() =>
                  setIsDropDownOpen((prevState) => ({
                    ...prevState,
                    language: !prevState.language,
                  }))
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
        {/* <label>
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
        </label> */}
      </Form>
    </>
  );
};
