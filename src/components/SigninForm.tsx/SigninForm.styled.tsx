import styled from "styled-components";
import { Field, Form } from "formik";

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  gap: 18px;
`;

export const FormUser = styled(Form)`
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

  @media screen and (min-width: 768px) {
    /* min-width: 384px; */
  }
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

  @media screen and (max-width: 768px) {
    /* max-width: 438px; */
  }

  @media screen and (min-width: 768px) {
    /* max-width: 392px; */
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
  color: ${({ theme: { colors } }) => colors.mainBlack};
  width: 100%;
  padding: 16px 21px;
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  border: none;
  border-radius: 12px;
  background-color: ${({ theme: { colors } }) => colors.mainYellow};

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: ${({ theme: { colors } }) => colors.accentYellow};
  }
`;
