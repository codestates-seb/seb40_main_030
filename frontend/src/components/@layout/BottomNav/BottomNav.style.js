import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 35px;
  padding: 0 10px;
  align-items: center;
  width: 100%;
  height: 10vh;
  background: #fff;

  z-index: 10;

  .active {
    border-top: 3px solid green;
  }
`;

const IconBox = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

export { Wrapper, IconBox };
