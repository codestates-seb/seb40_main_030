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
  color: #fff;
  text-align: center;
  border-radius: 5px;
  padding: 16px;
  z-index: 1100;
  left: 50%;
  bottom: 2%;
  font-size: 15px;

  ${({ isActive }) =>
    isActive &&
    css`
      animation: ${FadeIn} 1s;
    `}
`;

export { SnackBar };