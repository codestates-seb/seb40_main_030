import styled from 'styled-components';

const Header = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  border: 1px solid black;
  min-height: 10%;

  .active {
    border-color: blue;
  }
`;

const CategoryButton = styled.button`
  width: 30%;
  height: 50%;

  border: 1px solid red;
`;
export { Header, CategoryButton };
