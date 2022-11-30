import styled from 'styled-components';

const EditModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding: 25px 0;

  width: 300px;
  height: 450px;
  border: 2px solid gray;
  border-radius: 15px;
  background-color: #ffffff;

  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.3);
  z-index: 999;
  position: fixed;
  top: 150px;

  & form {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  & div {
    display: flex;
    justify-content: space-between;
  }

  & label {
    font-weight: 600;
    width: 75px;
    font-size: 15px;
    line-height: 35px;
  }

  & .data-input {
    font-size: 12px;
    width: 150px;
  }

  & input {
    padding: 8px;
  }
  & select {
    font-size: 12px;
    width: 166px;
    padding: 8px;
  }

  & .error-box {
    color: red;
    margin-left: auto;
    height: 13px;
    font-size: 13px;
  }
  & .button-container {
    display: flex;
    justify-content: end;
    gap: 20px;
    & > .edit-button {
      width: 40px;
      height: 40px;
      background-color: #2161c0;
      color: white;
      border: none;
    }
    & > .delete-button {
      width: 40px;
      height: 40px;
      background-color: #2161c0;
      color: white;
      border: none;
    }
  }
`;
export { EditModalContainer };
