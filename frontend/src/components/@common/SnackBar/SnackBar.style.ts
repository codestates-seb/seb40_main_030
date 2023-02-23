import styled, { css, keyframes } from 'styled-components';

interface Snackbar {
  isActive: boolean;
  matches: boolean;
  confirm: boolean;
}

const FadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const SnackBar = styled.div<Snackbar>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: fixed;
  visibility: ${({ isActive }) => (isActive ? 'visible' : 'hidden')};
  min-width: ${({ matches }) => (matches ? '300px' : '250px')};
  margin-left: ${({ confirm }) => (confirm ? '-150px' : '-125px')};
  background-color: #333;
  color: ${({ theme }) => theme.WHITE};
  text-align: center;
  border-radius: 5px;
  padding: 16px 20px;
  z-index: ${({ theme }) => theme.SNACKBAR};
  bottom: 2%;
  font-size: 15px;

  font-size: 13px;

  left: ${({ matches }) => (matches ? '45%' : '50%')};

  ${({ isActive }) =>
    isActive &&
    css`
      animation: ${FadeIn} 1s;
    `};

  button {
    width: 40px;
    height: 20px;
    color: ${({ theme }) => theme.WHITE};
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export { SnackBar, ButtonContainer };
