import styled from 'styled-components';

import { DESKTOP_MAX_WIDTH } from '@/constants';

const Wrapper = styled.div<{ matches: boolean }>`
  display: flex;
  position: fixed;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 10px;

  z-index: ${({ theme }) => theme.MIDDLE};

  font-size: 14px;

  max-width: ${({ matches }) => matches && DESKTOP_MAX_WIDTH};
  cursor: pointer;
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
  background: ${({ theme }) => theme.COLOR_BLUE};
  font-size: 14px;
  color: white;
  font-weight: 500;

  cursor: pointer;

  padding: 0;

  span {
    position: relative;
    font-size: 14px;
  }
`;

const LocationMarker = styled.img`
  z-index: ${({ theme }) => theme.DEFAULT};
  width: 20px;
  height: 20px;
  align-items: center;
`;

const LocationHover = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid ${({ theme }) => theme.COLOR_BLUE};
  padding: 10px;

  width: 40%;
  height: 40px;
  border-radius: 50px;
  font-weight: 500;

  background-color: ${({ theme }) => theme.WHITE};

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
