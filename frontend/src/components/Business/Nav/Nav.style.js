import styled from 'styled-components';

import { BatteryPageIcon } from '@/assets';
import { PlusIcon } from '@/assets';
import { StationPageIcon } from '@/assets';

const NavigationBarWrapper = styled.div`
  position: relative;
  bottom: -10px;
  width: 100%;

  display: flex;
  justify-content: center;
`;

const NavigationBarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;

  & div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3px;

    & h3 {
      font-size: 15px;
      color: ${({ isclicked }) =>
        isclicked !== 'battery' ? 'black' : '#959090'};
    }
    & h1 {
      font-size: 15px;
      color: ${({ isclicked }) =>
        isclicked !== 'station' ? 'black' : '#959090'};
    }
  }
`;

const BatteryPageIconContainer = styled(BatteryPageIcon)`
  width: 30px;
  height: 30px;
  fill: ${({ isclicked }) => (isclicked === 'battery' ? 'black' : '#959090')};
`;
const StationPageIconContainer = styled(StationPageIcon)`
  width: 30px;
  height: 30px;
  fill: ${({ isclicked }) => (isclicked === 'station' ? 'black' : '#959090')};
`;
const PlusIconContainer = styled(PlusIcon)`
  width: 30px;
  height: 30px;
  fill: ${({ isclicked }) => (isclicked === 'addMode' ? 'red' : '#959090')};
`;

const ToggleButtonContainer = styled.button`
  width: 50px;
  height: 30px;
  border-radius: 30px;
  border: 1px solid gray;
  cursor: pointer;
  margin: 0 5px;

  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease-in-out;
`;

const CircleContainer = styled.div`
  background-color: #9e9d9d;
  width: 25px;
  height: 25px;
  border-radius: 50px;
  position: absolute;
  left: 5%;
  transition: all 0.5s ease-in-out;
  ${({ isClicked }) =>
    isClicked &&
    `transform: translate(18px, 0);
    transition: all 0.5s ease-in-out;
    `}
`;

export {
  NavigationBarWrapper,
  NavigationBarContainer,
  ToggleButtonContainer,
  CircleContainer,
  BatteryPageIconContainer,
  StationPageIconContainer,
  PlusIconContainer,
};
