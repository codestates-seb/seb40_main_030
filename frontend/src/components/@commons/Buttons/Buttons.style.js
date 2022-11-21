import styled from 'styled-components';

const ShadowButton = styled.a`
  width: ${({ width }) => width};
  font-size: 18px;
  cursor: pointer;
  padding: ${({ padding }) => (padding ? padding : '20px 40px')};
  border: 1px solid none;
  border-radius: 8px;
  background-color: ${({ color }) => (color ? color : '#1070fc')};
  box-shadow: ${({ noShadow }) =>
    noShadow ? '' : '20px 30px 30px 0 rgb(0 31 68 / 30%)'};
  color: white;
  font-weight: 500;
  text-align: center;
  display: inline-block;
  text-decoration: none;

  letter-spacing: 1px;
`;

export { ShadowButton };
