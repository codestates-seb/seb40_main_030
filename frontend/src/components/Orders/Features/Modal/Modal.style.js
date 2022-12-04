import styled from 'styled-components';

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 10%;
  border-bottom: 1px solid ${({ theme }) => theme.LIGHT_GRAY};

  margin-bottom: 20px;
`;

const HeaderTitle = styled.h1`
  font-size: 20px;
  margin-bottom: 20px;
`;

const ModalCloseBtn = styled.button`
  width: 20px;
  height: 20px;
`;

export { Header, HeaderTitle, ModalCloseBtn };
