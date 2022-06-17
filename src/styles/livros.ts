import styled from 'styled-components';

export const Container = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;

  background-color: var(--gray-50);
  width: 100vw;
  min-height: 100vh;

  @media (max-width: 375px) {
    align-items: flex-start;
  }

  @media (max-width: 768px) {
    align-items: flex-start;
  }

  @media (max-width: 1024px) {
  }
`;

export const Header = styled.header`
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

export const Section = styled.section`
  width: 100%;
  max-width: 1200px;

  display: flex;
  column-gap: 1rem;
  flex-direction: column;

  @media screen and (min-width: 0px) {
    margin-top: 2.5rem;
    overflow: scroll;
  }

  @media screen and (min-width: 768px) {
    margin-top: 2.5rem;
  }

  @media screen and (max-width: 1024px) {
    justify-content: center;
    row-gap: 1rem;
  }

  @media screen and (min-width: 1025px) {
    margin: 2.5rem auto 0;
    padding: 0 1.5rem;
    row-gap: 1rem;
    overflow: hidden;
  }
`;

export const ItemsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  width: 100%;
`;
