import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  align-items: center;
  display: flex;
  max-width: 1200px;

  @media screen and (max-width: 1024px) {
    justify-content: space-around;
    margin-top: 2.5rem;
  }

  @media screen and (min-width: 1025px) {
    justify-content: space-between;
    margin: 2.5rem auto 0;
    padding: 0 2.188rem;
  }

  div {
    display: flex;
    align-items: center;

    &:first-child {
      p {
        font-size: 1.75rem;
        font-weight: 300;
        padding-left: 1rem;
      }
    }

    & + div {
      p {
        font-size: 0.75rem;
        color: var(--gray-800);
        padding-right: 1rem;

        @media (max-width: 375px) {
          display: none;
        }
      }

      button {
        background: url('/images/logout.svg') center / cover no-repeat;
        height: 32px;
        width: 32px;
        border: 0 none;
        transition: filter 0.2s ease-in-out;

        &:hover {
          filter: opacity(0.75);
        }
      }
    }
  }
`;
