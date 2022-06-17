import { ImQuotesLeft } from 'react-icons/im';

import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  display: flex;

  @media screen and (min-width: 0px) {
    flex-direction: column;
    width: 100%;
    height: auto;
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1020px) {
    flex-direction: row;
  }

  > div {
    & + div {
      margin-right: 3rem;

      @media screen and (min-width: 0px) {
        margin: 1rem 1.5rem;
        padding-bottom: 2rem;
      }

      @media screen and (min-width: 420px) {
        margin: 0 1.5rem;
        padding-bottom: 2rem;
      }

      h1 {
        color: var(--gray-800);
        font-size: 1.75rem;
        font-weight: 600;
        line-height: 3rem;

        @media screen and (max-width: 375px) {
          font-size: 2rem;
        }
      }

      h2 {
        color: var(--purple-800);
        font-weight: 400;
        font-size: 0.75rem;
      }

      article {
        padding-top: 2rem;

        h4 {
          color: var(--gray-800);
          font-size: 0.75rem;
          text-transform: uppercase;
        }

        p {
          color: var(--gray-600);
          font-size: 0.75rem;
          line-height: 1.25rem;
          font-weight: 400;

          span {
            height: 14px;
            width: 14px;
            content: '\f10d';
          }
        }
      }
    }

    > div {
      display: flex;
      flex-direction: column;

      h3 {
        color: var(--gray-800);
        font-size: 0.75rem;
        font-weight: 600;
        text-transform: uppercase;

        padding-top: 2rem;
      }

      ul {
        display: flex;
        flex-direction: column;
        row-gap: 0.5rem;

        color: var(--gray-800);
        font-size: 0.75rem;
        font-weight: 500;
        padding-top: 1rem;

        li {
          display: flex;
          justify-content: space-between;
          div {
            color: var(--gray-600);
          }
        }
      }
    }
  }
`;

export const ImgBook = styled.div`
  @media screen and (min-width: 1020px) {
    width: 100%;
  }

  img {
    margin: 3rem;
    filter: drop-shadow(0px 12px 18px rgba(0, 0, 0, 0.3));

    @media screen and (min-width: 0px) {
      margin: 1rem 0 0 0;
      width: 80vw;
      height: auto;
    }

    @media screen and (min-width: 768px) {
      margin: 1rem 0 0 0;
      width: 100%;
      height: 350px;
    }

    @media screen and (min-width: 1020px) {
      margin: 3rem;
      height: 512px;
      width: auto;
    }
  }
`;

export const QuotesLeft = styled(ImQuotesLeft)`
  color: var(--gray-600);
  font-size: 1.5rem;
  padding-right: 0.3rem;
`;
