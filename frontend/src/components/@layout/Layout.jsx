import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { PageWrapper } from '@/components/@commons';
import BatteryCharging from '@/components/@commons';

import BottomNav from './BottomNav/BottomNav';

const Layout = () => {
  return (
    <PageWrapper>
      <Suspense fallback={<BatteryCharging />}>
        <Outlet />
      </Suspense>
      <BottomNav />
    </PageWrapper>
  );
};

export default Layout;
