import styled from 'styled-components';

const ModalWrapper = styled.div`
  opacity: ${({ isAddMode }) => (isAddMode ? '1' : '0')};
  visibility: ${({ isAddMode }) => (isAddMode ? 'visible' : 'hidden')};
  transition: all 0.5s ease;
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 99999;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalBackground = styled.div`
  width: 100%;
  height: 100vh;
  top: 0;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  z-index: 888;
`;

const InputModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 300px;
  height: 300px;
  border: 2px solid gray;
  background-color: #ffffff;

  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.3);
  z-index: 999;
  position: fixed;

  & form {
    padding: 10px;
    border: 1px solid red;
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  & div {
    display: flex;
    justify-content: space-between;
  }

  & label {
    padding: 8px;
  }
  & input {
    padding: 8px;
  }
  & select {
    width: 166px;
    padding: 8px;
  }
  & .submit-container {
    display: flex;
    justify-content: end;
  }
`;

export { ModalWrapper, ModalBackground, InputModalContainer };
