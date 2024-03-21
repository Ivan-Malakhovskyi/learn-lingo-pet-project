import styled from "styled-components";

type ContainerProps = {
  containerwidth: number;
};

export const Container = styled.div<ContainerProps>`
  padding: 0 15px;
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;

  @media screen and (min-width: 1440px) {
    width: ${({ containerwidth }) => containerwidth}px;
  }
`;

export const SectionFormContainer = styled.section`
  padding-top: 96px;
  padding-bottom: 96px;
  min-height: 100vh;
  background-color: ${({ theme: { colors } }) => colors.rootBodyColor};
`;
