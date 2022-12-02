import styled, { css, keyframes } from 'styled-components';

const FadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const SnackBar = styled.div`
  position: fixed;
  visibility: ${({ isActive }) => (isActive ? 'visible' : 'hidden')};
  min-width: 250px;
  margin-left: -125px;
  background-color: #333;
  color: ${({ theme }) => theme.WHITE};
  text-align: center;
  border-radius: 5px;
  padding: 16px;
  z-index: ${({ theme }) => theme.FRONT};
  bottom: 2%;
  font-size: 15px;

  left: 50%;
  left: ${({ isActive }) =>
    isActive &&
    css`
      animation: ${FadeIn} 1s;
    `};
`;

export { SnackBar };
