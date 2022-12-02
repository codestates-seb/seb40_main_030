import styled from 'styled-components';

const StationListWrapper = styled.div`
  /* border-top: 2px solid #d6d9dc; */
`;

const StationListContainer = styled.ul`
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

const StationContainer = styled.div`
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

  white-space: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
`;
const StationLocation = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  & div {
    color: #959090;
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

const StationStatusTitleContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 5px;
  font-size: 13px;
  border-radius: 9px;
  background-color: ${({ batteryCount }) =>
    batteryCount > 0 ? 'rgb(254,249,236)' : 'rgb(240,250,255)'};
  color: ${({ batteryCount }) =>
    batteryCount > 0 ? 'rgb(181,150,112)' : 'rgb(134,157,197)'};
`;

const StationStatusContainer = styled.div`
  display: flex;
  gap: 10px;
  border-radius: 30px;
  background-color: ${({ isSelectedStation }) =>
    isSelectedStation ? 'rgb(70,124,237)' : 'rgb(172,195,238)'};
  & .status-title {
    height: 30px;
    padding: 0 15px;
    color: white;
    display: flex;
    align-items: center;
    font-size: 14px;
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
  StationListWrapper,
  StationStatusTitleContainer,
  StationLocation,
};
