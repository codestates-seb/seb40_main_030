import styled from 'styled-components';

const Header = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 7%;
  border: 1px solid black;

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
