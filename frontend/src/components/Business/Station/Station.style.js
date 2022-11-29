import styled from 'styled-components';

const StationListContainer = styled.ul`
  height: 527px;
  width: 330px;
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

const StationContainer = styled.div`
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
const StationImgContainer = styled.div`
  & > img {
    width: 45px;
    height: 45px;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const StationDetailsContainer = styled.ul`
  font-size: 15px;
  width: 153px;
  white-space: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
`;

const LeftAlignWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const RightAlignWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const StationButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DeleteButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StationStatusContainer = styled.div`
  width: 76px;
  height: 27px;
  font-size: 15px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);

  background-color: ${({ batteryCount, status }) =>
    status === 'total'
      ? '#DADADA'
      : status === true || batteryCount > 0
      ? '#7BEB5F'
      : '#EEDA25'};
  cursor: ${({ status }) =>
    status === 'total' || typeof status === 'boolean' ? 'pointer' : null};
  width: ${({ status }) =>
    status === 'total' || typeof status === 'boolean' ? '65px' : null};
  height: ${({ status }) =>
    status === 'total' || typeof status === 'boolean' ? '65px' : null};
  border-radius: ${({ status }) =>
    status === 'total' || typeof status === 'boolean' ? '100px' : null};
  & .station-state-text {
    text-align: center;
  }
`;

const StationDeleteButtonContainer = styled.button`
  position: relative;
  left: 15px;
  background-color: red;
  /* width: 50px;
  height: 50px; */
  color: white;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  visibility: ${({ deleteState, status }) =>
    deleteState === true && status === 0 ? '' : 'hidden'};
`;

export {
  StationListContainer,
  StationContainer,
  StationDetailsContainer,
  LeftAlignWrapper,
  RightAlignWrapper,
  StationImgContainer,
  StationDeleteButtonContainer,
  StationButtonWrapper,
  DeleteButtonWrapper,
  StationStatusContainer,
};
