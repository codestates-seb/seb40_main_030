import styled from 'styled-components';

const CounterContainer = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-around;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 20px;
`;

const TimeLineContainer = styled.div`
  display: flex;
  width: 70%;
  justify-content: space-around;
  font-size: 20px;
  align-items: center;
`;

const Time = styled.span`
  font-size: 30px;
  font-weight: 600;
  margin-right: 10px;
`;

const StatusContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const RentalStatus = styled.div`
  width: 50px;
  border: 1px solid lightgrey;
  border-radius: 50px;
  text-align: center;
  padding: 5px 10px;
  background-color: transparent;
  color: gray;
`;

export {
  CounterContainer,
  Wrapper,
  TimeLineContainer,
  Time,
  StatusContainer,
  RentalStatus,
};
