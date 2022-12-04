import styled from 'styled-components';

const ModalWrapper = styled.div`
  opacity: ${({ isActiveMode }) => (isActiveMode ? '1' : '0')};
  visibility: ${({ isActiveMode }) => (isActiveMode ? 'visible' : 'hidden')};
  transition: all 0.5s ease;
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 99999;
  top: 0;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalBackground = styled.div`
  width: 100%;
  height: 100vh;
  top: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  z-index: 888;
`;

const InputModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding: 25px 0;

  width: 300px;
  /* height: 450px; */
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
    width: 235px;
    & > .input-container {
      display: flex;
      flex-direction: column;

      & > label {
        font-size: 16px;
        font-weight: 600;
      }
    }
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
    /* width: 150px; */
  }

  & input {
    background-color: rgb(240, 240, 240);
    border: none;
    padding: 10px;
  }
  & select {
    background-color: rgb(240, 240, 240);
    border: none;
    font-size: 13px;
    /* width: 166px; */
    padding: 10px;
  }

  & .error-box {
    color: red;
    margin-left: auto;
    height: 13px;
    font-size: 13px;
  }

  & .submit-container {
    display: flex;
    justify-content: end;
    & > .submit {
      border-radius: 8px;
      background-color: #2161c0;
      color: white;
      border: none;
    }
  }
`;

const LocationListWrapper = styled.section`
  background-color: white;
  overflow-x: auto;
  height: 120px;
  width: 235px;
`;

const LocationListContainer = styled.ul`
  background-color: white;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const LocationContainer = styled.li`
  display: flex;
  flex-direction: column;

  & button {
    font-weight: bold;
    font-size: 16px;
    width: 100%;
    display: flex;
    justify-content: start;
  }
  & label {
    color: gray;
    width: 100%;
    display: flex;
    justify-content: start;
  }
`;

export {
  ModalWrapper,
  ModalBackground,
  InputModalContainer,
  LocationListContainer,
  LocationListWrapper,
  LocationContainer,
};
