import styled from 'styled-components';

export const Main = styled.main`
  width: 100vw;
  height: 100vh;

  background: url('/images/background-image.png') center / cover no-repeat;

  display: flex;
  align-items: center;

  @media screen and (max-width: 375px) {
    justify-content: center;
  }
`;

export const Section = styled.section`
  max-width: 1200px;
  padding-left: 7.25rem;

  @media screen and (max-width: 375px) {
  }

  @media screen and (max-width: 768px) {
    padding-left: 0;
    width: 90vw;
    margin: 0 auto;
  }

  > div {
    display: flex;
    column-gap: 1rem;
    padding-bottom: 3rem;

    p {
      color: var(--white);
      font-size: 1.75rem;
      font-weight: 300;
    }
  }
  form {
    width: 295px;

    button {
      background-color: var(--white);
      border: 0 none;
      border-radius: 44px;
      color: var(--purple-700);

      font-size: 1rem;
      font-weight: 500;

      padding: 0.5rem 1.25rem;
      display: flex;
      align-items: center;
      justify-content: center;

      transition: all 0.2s ease-in;

      &:hover {
        filter: brightness(0.9);
      }

      &:disabled {
        cursor: not-allowed;
        opacity: 0.7;

        &:hover {
          filter: brightness(0.9);
        }
      }

      svg {
        animation: loading 1.5s linear infinite;
      }

      @keyframes loading {
        0% {
          transform: rotateZ(0deg);
        }
        100% {
          transform: rotateZ(-360deg);
        }
      }
    }
  }
`;
