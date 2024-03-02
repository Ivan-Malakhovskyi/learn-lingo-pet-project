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
  color: ${({ theme: { colors } }) => colors.mainBgBlack};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.37;
  margin-bottom: 40px;
`;

export const FieldForm = styled(Field)`
  width: calc(100% - 35px);
  padding: 16px 18px;
  border: 1px solid ${({ theme: { colors } }) => colors.accentBlack};
  border-radius: 12px;
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
  color: ${({ theme: { colors } }) => colors.mainBlack};
  width: 100%;
  padding: 16px 21px;
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  border: none;
  border-radius: 12px;
  background-color: ${({ theme: { colors } }) => colors.mainYellow};

  transition: background-color 250ms
    ${({ theme: { transitions } }) => transitions.cubic};

  &:hover,
  &:focus {
    background-color: ${({ theme: { colors } }) => colors.accentYellow};
  }
`;

export const ErrMessage = styled(ErrorMessage)`
  color: ${({ theme: { colors } }) => colors.mainRed};
  margin-top: 4px;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
`;
