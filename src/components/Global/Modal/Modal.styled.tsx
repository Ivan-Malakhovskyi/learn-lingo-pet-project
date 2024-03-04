import styled from "styled-components";

export const Backdrop = styled.div`
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
`;

export const ModalContent = styled.div`
  max-width: 438px;
  position: relative;
  max-height: 100vh;
  width: 100%;
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
