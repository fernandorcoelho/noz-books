import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  padding: 1rem;

  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(2px);
  border-radius: 4px;

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    position: absolute;
    top: -8px;
    left: 20px;
  }

  p {
    color: #fff;
    font-weight: 700;
    font-size: 1rem;
  }
`;
