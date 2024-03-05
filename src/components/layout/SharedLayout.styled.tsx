import styled from "styled-components";

export const Container = styled.div`
  /* width: 100%; */
  margin: 0 auto;
  padding: 0 20px;

  @media screen and (min-width: 1440px) {
    width: 1216px;
  }
`;

export const SectionFormContainer = styled.section`
  padding-top: 96px;
  padding-bottom: 96px;
  min-height: 100vh;
  background-color: ${({ theme: { colors } }) => colors.rootBodyColor};
`;
