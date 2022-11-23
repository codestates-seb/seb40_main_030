import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  position: fixed;
  top: 90vh;
  align-items: center;
  gap: 40px;
  padding: 10px;
  height: 10vh;
  width: 90%;
  background: transparent;

  z-index: 30;

  .active {
    border: 1px solid red;
  }
`;

const IconBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 50px;
  height: 40px;
  padding: 10px;
  border-radius: 50px;
  background: lightgrey;

  border: 1px solid green;
`;

export { Wrapper, IconBox };
