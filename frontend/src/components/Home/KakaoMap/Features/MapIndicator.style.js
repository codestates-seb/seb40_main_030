import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  position: fixed;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 10px;
  z-index: 10;
`;

const IndicatorContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100px;
  height: 60px;
`;

const Button = styled.button`
  width: 75px;
  height: 30px;
  border-radius: 4px;
  background: #1070fc;
  font-size: 14px;
  color: white;
  font-weight: 500;

  padding: 0;

  span {
    position: relative;
    font-size: 14px;
  }
`;

const LocationMarker = styled.input`
  z-index: 1;
  width: 20px;
  height: 20px;
  margin-left: 40px;
`;

const LocationHover = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid #1070fc;
  padding: 10px;

  width: 40%;
  height: 40px;
  border-radius: 50px;

  background-color: #fff;

  span {
    text-align: center;
    margin-top: 2px;
  }

  svg {
    margin-right: 10px;
    margin-bottom: 2px;
  }
`;

const ReservationHover = styled(LocationHover)`
  width: 30%;
`;

export {
  Wrapper,
  IndicatorContainer,
  Button,
  LocationMarker,
  LocationHover,
  ReservationHover,
};
