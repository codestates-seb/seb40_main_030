import styled from 'styled-components';
// #3978EF

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NumberBox = styled.div`
  width: 4rem;
  height: 2rem;
  border-radius: 0.6rem/0.6rem;
  background-color: #3978ef;
  background-color: lightgrey;
  overflow: hidden;
  box-shadow: inset 0 0 0.8rem 0.1rem rgba(darken(#3978ef, 20%), 0.2),
    0 20px 30px -10px rgba(darken(#3978ef, 20%), 0.26);
`;

const NumberInput = styled.input`
  height: 100%;
  width: 100%;
  background: none;
  border: none;
  text-align: center;
  color: ${({ theme }) => theme.WHITE};
  font-weight: 600;
  font-size: 1.5rem;
  outline: none;
  transition-property: transform, opacity;
  text-transform: linear;
  transition-duration: 0.25s;
`;

const UpDownButton = styled.div`
  background: none;
  border: none;
  padding: 0.8rem;
  font-size: 1.5rem;
  outline: none;
  cursor: pointer;
  transition: color 0.2s ease-in-out;
`;

export { Container, NumberInput, NumberBox, UpDownButton };
