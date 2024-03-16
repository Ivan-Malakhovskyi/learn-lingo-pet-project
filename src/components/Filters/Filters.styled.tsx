import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  gap: 20px;
`;

export const ListFilters = styled.ul`
  display: flex;
  gap: 20px;

  @media screen and (max-width: 767px) {
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
`;

export const LabelWrapper = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
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

export const Select = styled.div`
  display: flex;
  align-items: center;
  padding-left: 18px;
  padding-left: 18px;
  width: 198px;
  height: 48px;
  border: none;
  border-radius: 14px;
  background: #f7f7fb;

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

export const DropDown = styled.div`
  position: relative;
  display: inline-block;
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0%;
  color: ${({ theme: { colors } }) => colors.mainBlack};
`;

export const Arrow = styled.img`
  position: absolute;
  top: 50%;
  right: 14px;
  pointer-events: none;

  transform: rotate(${({ $isOpen }) => ($isOpen ? "180deg" : "360deg")})
    translateY(-50%);
  transform-origin: top;
`;

export const SelectorItem = styled.li`
  cursor: pointer;
  &:not(:last-child) {
    margin-bottom: 8px;
  }
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

export const ListItem = styled.li`
  /* background-color: ${({ theme: { colors } }) => colors.mainWhite}; */
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
  background-color: rgb(255, 255, 255);
`;
