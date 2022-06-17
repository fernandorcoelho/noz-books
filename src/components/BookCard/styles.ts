import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled(motion.div)`
  background-color: var(--white);
  border-radius: 4px;
  box-shadow: 0px 6px 24px rgba(84, 16, 95, 0.13);

  align-items: center;
  display: flex;

  height: 160px;
  width: 272px;

  &:hover {
    cursor: pointer;
  }

  .img {
    height: 122px;
    width: 81px;
    margin: 0 1rem;
  }

  div {
    h2 {
      font-size: 0.875rem;
      font-weight: 600;
      color: var(--gray-800);
    }

    h3 {
      font-size: 0.75rem;
      font-weight: 500;
      color: var(--main);
    }

    p {
      color: var(--gray-900);
      font-size: 0.75rem;
      font-weight: 400;
      line-height: 20px;

      padding-top: 1.5rem;
    }
  }
`;
