import styled from "styled-components";
import { TModalTypes } from "./Modal.types";

export const Backdrop = styled.div<TModalTypes>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: scroll;
  background-color: ${({ theme: { colors } }) => colors.mainBgBlack};
  z-index: 1200;

  @media screen and (max-height: ${({ maxHeight }) => maxHeight}px) {
    align-items: flex-start;
  }
`;

export const ModalContent = styled.div<TModalTypes>`
  max-width: ${({ maxWidth }) => maxWidth}px;
  position: relative;
  padding: 64px;
  border-radius: 30px;
  background-color: ${({ theme: { colors } }) => colors.mainWhite};
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  outline: none;
  position: absolute;
  padding: 0;
  top: 20px;
  right: 20px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.2);
  }
`;
