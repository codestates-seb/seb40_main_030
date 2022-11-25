import styled from 'styled-components';

const BatteryImgContainer = styled.img`
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
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${({ status }) =>
    status === 'total' ? '#DADADA' : status ? '#7BEB5F' : '#EEDA25'};
  cursor: ${({ count }) => (count ? 'pointer' : null)};
  width: ${({ count }) => (count ? '65px' : null)};
  height: ${({ count }) => (count ? '65px' : null)};
  border-radius: ${({ count }) => (count ? '100px' : null)};
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

  align-items: center;
  gap: 15px;
  overflow: auto;

  border-top: 1px solid gray;
  border-bottom: 1px solid gray;
`;

const deleteButtonContainer = styled.button`
  position: relative;
  left: 13px;
  width: 20px;
  height: 20px;
  border: 1px solid black;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  visibility: ${({ deleteState, status }) =>
    deleteState === true && status === true ? '' : 'hidden'};
`;

export {
  BatteryDetailsContainer,
  BatteryStatusContainer,
  BatteryContainer,
  BatteryListContainer,
  BatteryImgContainer,
  deleteButtonContainer,
};
