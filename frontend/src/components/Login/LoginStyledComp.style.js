import styled from 'styled-components';

const LoginPageWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid red;
  padding: 25px;
`;

const LoginContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid blue;
`;

export { LoginPageWrapper, LoginContainer };
