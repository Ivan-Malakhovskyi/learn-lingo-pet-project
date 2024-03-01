import styled from "styled-components";
import { Field, Form } from "formik";

export const FormWrapper = styled.div`
  /* display: flex;
  flex-direction: column;
  gap: 18px; */
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

export const FormUser = styled(Form)`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  margin-bottom: 40px;
`;

export const FieldForm = styled(Field)`
  display: block;
  width: 100%;
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
  top: 17px;
  right: 17px;
`;
