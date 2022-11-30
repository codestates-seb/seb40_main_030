import styled from 'styled-components';

const BatteryListWrapper = styled.div`
  border-top: 2px solid gray;
`;

const BatteryImgContainer = styled.div`
  & > img {
    width: 45px;
    height: 45px;
  }

  display: flex;
  justify-content: center;
  align-items: center;
`;

const BatteryDetailsContainer = styled.ul`
  font-size: 15px;
  width: 153px;
  white-space: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
`;

const BatteryStatusColorContainer = styled.div`
  width: 30px;
  height: 30px;

  background-color: ${({ status }) =>
    status === 'total' ? '#DADADA' : status ? '#7BEB5F' : '#EEDA25'};
  cursor: ${({ count }) => (count ? 'pointer' : null)};
  width: ${({ count }) => (typeof count === 'number' ? '65px' : null)};
  height: ${({ count }) => (typeof count === 'number' ? '65px' : null)};
  border-radius: ${({ count }) => (typeof count === 'number' ? '100px' : null)};
`;

const BatteryStatusContainer = styled.div`
  display: flex;
  gap: 10px;
  & .status-title {
    display: flex;
    align-items: center;
    font-size: 14px;
  }
  & .status-color {
    background-color: ${({ status }) =>
      status === 'total' ? '#DADADA' : status ? '#7BEB5F' : '#EEDA25'};
    cursor: ${({ count }) => (count ? 'pointer' : null)};
    width: ${({ count }) => (typeof count === 'number' ? '20px' : '28px')};
    height: ${({ count }) => (typeof count === 'number' ? '20px' : '28px')};
    border-radius: ${({ count }) =>
      typeof count === 'number' ? '15px' : '16px'};
  }
`;

const LeftAlignWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const RightAlignWrapper = styled.div`
  position: relative;
  left: 15px;
  bottom: 10px;
  gap: 10px;
`;

const BatteryContainer = styled.div`
  width: 320px;
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
  height: 620px;
  width: 330px;
  display: flex;
  flex-direction: column;

  align-items: center;
  gap: 15px;
  overflow: auto;
  padding-top: 5px;
  /* 
  border-top: 1px solid gray; */
  border-bottom: 1px solid gray;
`;

const DeleteButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DeleteButtonContainer = styled.button`
  position: relative;
  left: 15px;
  background-color: red;
  /* width: 20px;
  height: 20px; */
  color: white;
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
  DeleteButtonContainer,
  LeftAlignWrapper,
  RightAlignWrapper,
  DeleteButtonWrapper,
  BatteryStatusColorContainer,
  BatteryListWrapper,
};
