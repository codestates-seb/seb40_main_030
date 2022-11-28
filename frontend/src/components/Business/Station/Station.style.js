import styled from 'styled-components';

const StationListContainer = styled.ul`
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

const StationContainer = styled.div`
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
const StationImgContainer = styled.img`
  width: 45px;
  height: 45px;
`;
const StationDetailsContainer = styled.ul`
  font-size: 15px;
`;

const LeftAlignWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

const RightAlignWrapper = styled.div`
  display: flex;
  gap: 20px;
`;
const StationButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StationDeleteButtonContainer = styled.div`
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
};
