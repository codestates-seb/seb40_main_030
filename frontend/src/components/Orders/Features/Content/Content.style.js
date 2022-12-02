import styled from 'styled-components';

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const DateContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  span {
    margin-top: 5px;
  }

  .border {
    margin: 5px 0;
  }

  .flex-center {
    display: flex;
    justify-content: center;
  }
`;

const DateStatus = styled.div`
  width: 40px;
  border: 1px solid lightgrey;
  border-radius: 50px;
  text-align: center;
  padding: 5px;
  background-color: transparent;
  color: red;

  font-size: 13px;

  margin-right: 10px;
`;

export { ButtonContainer, DateContainer, DateStatus };
