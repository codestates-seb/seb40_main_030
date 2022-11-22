import styled from 'styled-components';

const BatteryImgContaioner = styled.img`
  width: 45px;
  height: 45px;
`;

const BatteryDetailsContainer = styled.ul`
  font-size: 15px;
`;

const BatteryStatusContainer = styled.div`
  width: 76px;
  height: 27px;
  border: 2px solid black;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ status }) => (status ? '#7BEB5F' : '#DADADA')};
`;

const BatteryContainer = styled.div`
  width: 358px;
  height: 70px;
  border: 2px solid black;
  border-radius: 30px;

  padding: 0 17px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BatteryListContainer = styled.ul`
  height: 500px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow: scroll;
`;

export {
  BatteryDetailsContainer,
  BatteryStatusContainer,
  BatteryContainer,
  BatteryListContainer,
  BatteryImgContaioner,
};
