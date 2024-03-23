import { TFilterProps, TFilterSelectorProps } from "./Filters.types";
import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  gap: 20px;
  align-items: center;

  @media screen and (max-width: 767px) {
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
`;

export const ListFilters = styled.ul`
  display: flex;
  gap: 20px;
`;

export const Label = styled.span`
  color: ${({ theme: { colors } }) => colors.mainGrey};
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0%;
`;

export const SelectContainer = styled.div`
  position: relative;
`;

export const Select = styled.div<TFilterProps>`
  display: flex;
  align-items: center;
  padding-left: 18px;
  padding-left: 18px;
  width: 198px;
  height: 48px;
  border: none;
  border-radius: 14px;
  background: ${({ theme: { colors } }) => colors.addWhite};

  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;
`;

export const ToggleBtn = styled.button`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 50%;
  right: 14px;
  pointer-events: none;

  transform-origin: top;
  transition: transform 250ms
    ${({ theme: { transitions } }) => transitions.cubic};
`;

export const Main = styled.div`
  margin-bottom: 32px;
`;

export const Arrow = styled.img<TFilterProps>`
  position: absolute;
  top: 25px;
  right: 14px;
  cursor: pointer;

  transform: rotate(${({ $isOpen }) => ($isOpen ? "180deg" : "360deg")})
    translateY(-50%);

  &:hover,
  &:focus {
    scale: 1.3;
  }

  transition: transform 250ms
      ${({ theme: { transitions } }) => transitions.cubic},
    scale 250ms ${({ theme: { transitions } }) => transitions.cubic};
  transform-origin: top;
`;

export const SelectorItem = styled.li<TFilterSelectorProps>`
  cursor: pointer;

  color: ${({ $isActive, theme: { colors } }) =>
    $isActive ? colors.mainBlack : colors.mainGrey};

  &:hover,
  &:focus {
    color: ${({ theme: { colors } }) => colors.mainBlack};
  }

  &:not(:last-child) {
    margin-bottom: 8px;
  }

  transition: color 250ms ${({ theme: { transitions } }) => transitions.cubic};
`;

export const Options = styled.input`
  border: none;
  width: ${({ width }) => width}px;
  color: rgb(18, 20, 23);
  font-family: Roboto;
  font-size: 18px;
  font-weight: 500;
  border-radius: 14px;
  padding: 18px 16px;
  background-color: ${({ theme: { colors } }) => colors.mainWhite};
`;

export const ListOptions = styled.ul`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1;
  transform: translateY(4px);
  padding: 0;
  margin: 0;
  border-radius: 12px;
  background-color: ${({ theme: { colors } }) => colors.mainWhite};
`;

export const BtnReset = styled.button`
  padding: 14px 39px;
  border-radius: 12px;
  background-color: ${({ theme: { colors }, disabled }) =>
    disabled ? colors.mainGrey : colors.mainBlack};
  color: ${({ theme: { colors } }) => colors.mainWhite};
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;

  transition: background-color 250ms
    ${({ theme: { transitions } }) => transitions.cubic};

  &:hover,
  &:focus {
    background-color: ${({ theme: { colors }, disabled }) =>
      disabled ? null : colors.mainBgBlack};
  }

  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;
