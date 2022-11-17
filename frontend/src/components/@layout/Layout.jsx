import BottomNav from './BottomNav/BottomNav';
import * as S from './Layout.style';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import BatteryCharging from '../@commons/Loading/BatteryCharging';

const Layout = () => {
  return (
    <S.PageWrapper>
      <Suspense fallback={<BatteryCharging />}>
        <Outlet />
      </Suspense>
      <BottomNav />
    </S.PageWrapper>
  );
};

export default Layout;
