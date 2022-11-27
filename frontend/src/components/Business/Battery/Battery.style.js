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
  font-size: 15px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);

  background-color: ${({ status }) =>
    status === 'total' ? '#DADADA' : status ? '#7BEB5F' : '#EEDA25'};
  cursor: ${({ count }) => (count ? 'pointer' : null)};
  width: ${({ count }) => (typeof count === 'number' ? '65px' : null)};
  height: ${({ count }) => (typeof count === 'number' ? '65px' : null)};
  border-radius: ${({ count }) => (typeof count === 'number' ? '100px' : null)};
`;

const LeftAlignWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

const RightAlignWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

const BatteryContainer = styled.div`
  width: 358px;
  height: 70px;

  border-radius: 30px;
  padding: 0 17px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-radius: 20px;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
`;

const BatteryListContainer = styled.ul`
  height: 527px;
  width: 370px;
  display: flex;
  flex-direction: column;
  padding-top: 15px;
  padding-bottom: 15px;
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
  LeftAlignWrapper,
  RightAlignWrapper,
};
