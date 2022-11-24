import styled from 'styled-components';

const SnackBar = styled.div`
  visibility: hidden;
  min-width: 250px;
  margin-left: -125px;
  background-color: #333;
  color: #fff;
  text-align: center;
  border-radius: 2px;
  padding: 16px;
  position: fixed;
  z-index: 1100;
  left: 50%;
  bottom: 30px;
  font-size: 1rem;
`;

const FadeIn = styled(SnackBar)`
  visibility: visible;
  opacity: 1;
  transition: visibility 0s linear 0s, opacity 300ms;
`;

const FadeOut = styled(SnackBar)`
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s linear 300ms, opacity 300ms;
`;

export { SnackBar, FadeIn, FadeOut };
