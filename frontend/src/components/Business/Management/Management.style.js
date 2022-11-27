import styled from 'styled-components';

const ButtonContainer = styled.button`
  width: 140px;
  height: 50px;
  color: white;
  background-color: ${({ action }) =>
    action === 'add' ? '#2161C0' : action === 'remove' ? '#C01919' : null};
  border: ${({ action }) =>
    action === 'add'
      ? '2px solid #2161C0'
      : action === 'remove'
      ? '2px solid #C01919'
      : null};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;

  border-radius: 10px;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;

export { ButtonContainer, ButtonWrapper };
