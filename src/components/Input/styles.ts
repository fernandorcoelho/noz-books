import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  background-color: var(--gray-900);
  border-radius: 0.25rem;

  max-width: 440px;
  padding: 0.5rem 0.75rem 0.5rem 1rem;
  width: 100%;

  height: 60px;
  display: flex;

  & + div {
    margin-top: 1rem;
  }

  button {
    height: 36px;
  }

  div {
    display: flex;
    flex: 1;
    flex-direction: column;

    label {
      color: var(--white);
      font-size: 0.75rem;
      font-weight: 400;
      margin-bottom: 0.25rem;
      opacity: 0.5;
    }

    input {
      background-color: transparent;
      border: 0 none;
      color: var(--white);
      font-size: 1rem;
      outline: none;

      height: 100%;
      flex: 1;

      &::placeholder {
        color: var(--white);
        font-weight: 300;
        font-size: 0.75rem;
        letter-spacing: 1px;
        opacity: 0.3;
      }
    }
  }
`;
