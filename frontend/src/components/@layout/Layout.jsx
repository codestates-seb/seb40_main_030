import Nav from './BottomNav/BottomNav';
import * as S from './Layout.style';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <S.PageWrapper>
      <Outlet />
      <Nav />
    </S.PageWrapper>
  );
};

export default Layout;
