import styled from 'styled-components';

const BatteryListWrapper = styled.div`
  /* border-top: 2px solid #d6d9dc; */
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

const BatteryTitleContainer = styled.div`
  & h1 {
    padding: 0 10px;
  }
  position: relative;
  top: -10px;
  font-size: 25px;
  font-weight: 600;
`;
const BatteryDetailsContainer = styled.ul`
  & h1 {
    font-size: 19px;
    font-weight: 800;
  }
  & h2 {
    font-size: 15px;
    font-weight: 500;
  }
  & h3 {
    font-size: 15px;
    font-weight: 500;
  }
  & h4 {
    font-size: 13px;
    font-weight: 500;
  }

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

const BatteryStatusTitleWrapper = styled.div`
  display: flex;
  justify-content: end;
  gap: 5px;
`;

const BatteryStatusTitleContainer = styled.div`
  /* width: 55px; */
  display: flex;
  justify-content: center;

  font-size: 15px;
  border-radius: 9px;
  & .status-box:empty {
    background-color: red;
    display: none;
  }

  background-color: ${({ status }) =>
    typeof status === 'boolean' && status
      ? 'rgb(254,249,236)'
      : 'rgb(240,250,255)'};

  background-color: ${({ status }) =>
    typeof status === 'number' && status > 0 ? '#FCEBEA' : null};

  color: ${({ status }) =>
    typeof status === 'boolean' && status
      ? 'rgb(181,150,112)'
      : 'rgb(134,157,197)'};

  color: ${({ status }) =>
    typeof status === 'number' && status > 0 ? '#F17C75' : null};
`;

const BatteryStatusContainer = styled.div`
  display: flex;
  /* gap: 10px; */
  border-radius: 30px;
  background-color: ${({ isSelected }) =>
    isSelected ? 'rgb(70,124,237)' : 'rgb(172,195,238)'};

  & .status-title {
    height: 30px;
    padding: 0 15px;
    color: white;
    display: flex;
    align-items: center;
    font-size: 14px;
  }
`;

const LeftAlignWrapper = styled.div`
  display: flex;
  gap: 15px;
`;

const RightAlignWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;

  bottom: 10px;
  gap: 9px;
`;
const BatteryLocation = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  & div {
    color: #959090;
  }
`;

const BatteryContainer = styled.div`
  width: 320px;
  height: 90px;

  border-radius: 30px;
  padding: 0 17px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-radius: 20px;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
`;

const BatteryListContainer = styled.ul`
  height: 580px;
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
  BatteryStatusTitleContainer,
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
  BatteryTitleContainer,
  BatteryLocation,
  BatteryStatusTitleWrapper,
};
