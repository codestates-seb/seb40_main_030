import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  overflow-x: auto;
  height: 140px;
  border-bottom: 1px solid gray;
`;

const ReservationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ReservationBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  span {
    font-size: 20px;
  }
`;

const DateStatus = styled.div`
  width: 50px;
  border: 1px solid lightgrey;
  border-radius: 50px;
  text-align: center;
  padding: 5px 10px;
  background-color: transparent;
  color: red;

  margin-right: 20px;
`;

const BookingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  button {
    width: 300px;
    height: 40px;
    border: 1px solid black;
  }
`;

export {
  Wrapper,
  ReservationContainer,
  ReservationBox,
  DateStatus,
  BookingContainer,
};
