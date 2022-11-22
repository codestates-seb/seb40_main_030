import styled from 'styled-components';

const ButtonContainer = styled.button`
  width: 140px;
  height: 110px;
  border: 2px solid black;

  background-color: ${({ action }) =>
    action === 'add' ? 'green' : action === 'remove' ? 'red' : null};
  background-color: 'red';
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  border-radius: 15px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;

export { ButtonContainer, ButtonWrapper };
