import styled from "styled-components";
import { motion } from "framer-motion";
import { TModalTypes } from "./Modal.types";

export const Backdrop = styled(motion.div)<TModalTypes>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: scroll;
  background-color: ${({ theme }) => theme.blackOverlay};
  z-index: 1200;

  @media screen and (max-height: ${({ maxheight }) => maxheight}px) {
    align-items: flex-start;
  }
`;

export const ModalContent = styled(motion.div)<TModalTypes>`
  max-width: ${({ maxwidth }) => maxwidth}px;
  position: relative;
  padding: 64px;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.primaryWhite};

  @media screen and (max-width: 1199px) {
    padding: 32px;
  }
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

  &:hover,
  &:focus {
    transform: scale(1.2);
  }

  @media screen and (max-width: 767px) {
    top: 12px;
    right: 12px;
  }
`;

export const CloseIcon = styled.img`
  width: 32px;
  height: 32px;

  @media screen and (max-width: 767px) {
    width: 16px;
    height: 16px;
  }
`;
