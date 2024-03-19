import { Field } from "formik";
import styled from "styled-components";

export const RadioWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-bottom: 46px;
`;

export const RadioValue = styled.span`
  margin-left: 8px;
  color: ${({ theme: { colors } }) => colors.mainBlack};
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
`;

export const StyledField = styled(Field)`
  cursor: pointer;
`;
