import styled from "styled-components";

export const Container = styled.section`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
`;

export const SectionFormContainer = styled.section`
  padding: 0 16px;
  padding-top: 96px;
  padding-bottom: 96px;
  min-height: 100vh;
  background-color: ${({ theme: { colors } }) => colors.rootBodyColor};
`;
