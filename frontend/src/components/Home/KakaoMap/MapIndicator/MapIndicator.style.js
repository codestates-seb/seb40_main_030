import styled from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
  margin-top: 10px;
  z-index: 13;
`;

const IndicatorContainer = styled.div`
  display: flex;
  position: fixed;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  left: 300px;
  width: 100px;
  height: 60px;
  z-index: 10;
  cursor: pointer;
`;

const Button = styled.button`
  width: 75px;
  height: 30px;
  border-radius: 4px;
  background: black;
  font-size: 14px;
  color: white;
  font-weight: 500;

  padding: 0;
  cursor: pointer;

  span {
    position: relative;
    font-size: 14px;
  }
`;

const LocationMarker = styled.input`
  z-index: 20;
  width: 20px;
  height: 20px;
  margin-left: 40px;

  cursor: pointer;
`;

const LocationHover = styled.div`
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;

  width: 50%;
  height: 40px;
  z-index: 13;
  border-radius: 50px;

  background-color: #fff;

  span {
    text-align: center;
  }
`;

export { Wrapper, IndicatorContainer, Button, LocationMarker, LocationHover };
