import styled from 'styled-components';

const MapWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const CurrentLocationContainer = styled.div`
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;

  top: 85%;
  width: 50%;
  height: 40px;
  z-index: 1;
  border-radius: 50px;

  background-color: #fff;

  span {
    text-align: center;
  }
`;

export { MapWrapper, CurrentLocationContainer };
