import styled from 'styled-components';

const Header = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 10%;
  border: 1px solid black;
`;

const CategoryButton = styled.button`
  width: 30%;
  height: 50%;

  border: 1px solid red;
`;
export { Header, CategoryButton };
