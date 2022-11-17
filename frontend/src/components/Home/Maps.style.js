import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const IndicatorContainer = styled.div`
  display: flex;
  position: absolute;

  input {
    width: 25px;
    height: 25px;
    position: absolute;
    top: 20px;
    left: 350px;
    z-index: 10;
    cursor: pointer;
  }
`;

const Button = styled.button`
  display: inline-block;
  position: absolute;
  width: 75px;
  height: 30px;
  border: 1px solid transparent;
  border-radius: 4px;
  background: black;
  font-size: 14px;
  color: white;
  font-weight: 500;
  z-index: 10;

  padding: 0;
  cursor: pointer;

  span {
    position: relative;
    font-size: 14px;
  }
`;

export { Wrapper, IndicatorContainer, Button };
