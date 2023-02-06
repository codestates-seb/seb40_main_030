import styled from 'styled-components';

const Header = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  min-height: 10%;

  .active {
    border-bottom: 1px solid ${({ theme }) => theme.COLOR_BLUE};
  }
`;

const CategoryButton = styled.button<{ className?: string }>`
  width: 30%;
  height: 50%;

  font-size: 16px;
`;
export { Header, CategoryButton };
