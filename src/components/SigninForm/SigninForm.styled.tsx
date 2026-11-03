import styled from "styled-components";
import { ErrorMessage, Field } from "formik";

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  gap: 18px;
`;

export const Title = styled.h2`
  font-size: 40px;
  font-weight: 500;
  line-height: 1.2;
  max-width: 200px;
  margin-bottom: 20px;
`;

export const Paragraph = styled.p`
  color: ${({ theme }) => theme.blackOverlay};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.37;
  margin-bottom: 40px;
`;

export const FieldForm = styled(Field)`
  width: calc(100% - 35px);
  padding: 16px 18px;
  border: 1px solid ${({ theme }) => theme.blackTransparent};
  border-radius: 12px;

  &::placeholder {
    color: ${({ theme }) => theme.primaryText};
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
`;

export const IconsWrapper = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  cursor: pointer;
`;

export const BtnSubmit = styled.button`
  color: ${({ theme }) => theme.primaryText};
  width: 100%;
  padding: 16px 21px;
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  border: none;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.primary};

  transition: background-color 250ms
    ${({ theme: { transitions } }) => transitions.cubic};

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.secondary};
  }
`;

export const ErrMessage = styled(ErrorMessage)`
  color: ${({ theme }) => theme.primaryRed};
  margin-top: 4px;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
`;

export const GoogleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 20px;

  /* @media screen and (max-width: 767px) {
    justify-content: center;
    gap: 20px;
  } */
`;

export const StyledText = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 100%;
  letter-spacing: 4%;
`;

export const StyledGoogleBtn = styled.button`
  display: flex;
  gap: 10px;
  align-items: center;
  border-radius: 26px;
  height: 40px;
  width: 120px;
  color: ${({ theme }) => theme.primaryText};
  background-color: ${({ theme }) => theme.primary};
  padding: 10px 20px;
  font-weight: 500;
  font-size: 14px;
  line-height: 100%;
  letter-spacing: 2%;
  box-shadow: 1px 2px 3px rgba(170, 178, 197, 0.2);
  transition:
    background-color 250ms ${({ theme: { transitions } }) => transitions.cubic},
    color ${({ theme: { transitions } }) => transitions.cubic};

  &:hover,
  &:focus,
  &:active {
    background-color: ${({ theme }) => theme.secondary};
    /* color: ${({ theme }) => theme.secondaryBackground};   */
  }
`;
