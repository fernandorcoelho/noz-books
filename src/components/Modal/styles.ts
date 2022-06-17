import { RiCloseCircleFill } from 'react-icons/ri';

import { motion } from 'framer-motion';
import styled from 'styled-components';

const backgroundVariants = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

const modalVariants = {
  initial: {
    opacity: 0,
    y: 100
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.1,
      type: 'spring',
      stiffness: 1000
    }
  },
  exit: {
    opacity: 0,
    y: -200
  }
};

export const Background = styled(motion.div).attrs({
  variants: backgroundVariants,
  animate: 'animate',
  initial: 'initial',
  exit: {
    opacity: 0
  }
})`
  backdrop-filter: blur(2px);
  background: rgba(0, 0, 0, 0.4);

  height: 100%;
  left: 0;
  top: 0;
  position: fixed;
  width: 100%;
  z-index: 99;

  align-items: center;
  display: flex;
  justify-content: center;
`;

export const ModalWrapper = styled(motion.div).attrs({
  variants: modalVariants,
  animate: 'animate',
  initial: 'initial',
  exit: {
    opacity: 0,
    y: '-100vh'
  }
})`
  background: var(--white);
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  color: var(--gray-900);
  border-radius: 4px;

  width: clamp(400px, 90vw, 850px);
  height: 80vh;
  z-index: 100;

  display: flex;
  overflow: scroll;

  @media screen and (max-width: 375px) {
    width: 90vw;
    height: 85vh;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--purple-700);
    border-radius: 0;
  }
`;

export const CloseModalButton = styled(RiCloseCircleFill)`
  color: var(--white);
  cursor: pointer;

  height: 32px;
  padding: 0;
  position: absolute;
  right: 20px;
  top: 20px;
  width: 32px;
  z-index: 10;
`;
