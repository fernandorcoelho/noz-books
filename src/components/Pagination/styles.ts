import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';

import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  display: flex;
  column-gap: 1rem;
  justify-content: flex-end;

  max-width: 1200px;
  width: 100%;

  padding: 1rem 1.5rem;

  @media screen and (max-width: 1180px) {
    justify-content: center;
  }

  p {
    color: var(--gray-800);
    font-size: 1rem;
    font-weight: 500;
    margin-right: 1rem;

    @media screen and (max-width: 768px) {
      order: 2;
    }
  }

  button {
    background-color: transparent;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 50%;

    height: 32px;
    width: 32px;

    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 768px) {
      &.next {
        order: 3;
      }
    }

    &:disabled {
      opacity: 0.95;
      cursor: not-allowed;
    }
  }
`;

export const ArrowRight = styled(IoIosArrowForward)``;

export const ArrowLeft = styled(IoIosArrowBack)``;
