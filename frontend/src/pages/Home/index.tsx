import { memo, Suspense } from 'react';
import { useLocation } from 'react-router-dom';

import { BatteryCharging, SnackBar, SplashScreen } from '@/components/@common';
import BottomNav from '@/components/@layout/BottomNav/BottomNav';
import BottomSheet from '@/components/@layout/BottomSheet/BottomSheet';
import MapArea from '@/components/Home/Maps';
import Reservation from '@/components/Home/Reservation/Reservation';
import { ROUTES } from '@/constants';
import { useSplashScreen, useSnackBar } from '@/hooks';

function Home() {
  const { pathname } = useLocation();
  const { isLoading, isSplashed } = useSplashScreen();
  const { isActive, message } = useSnackBar();

  return (
    <>
      {isLoading && <SplashScreen />}
      <Suspense fallback={<BatteryCharging />}>
        <MapArea />
        {isSplashed !== null ? (
          <div>
            {pathname === ROUTES.HOME.PATH && (
              <BottomSheet>
                <Reservation />
              </BottomSheet>
            )}
          </div>
        ) : null}
        <SnackBar isActive={isActive} message={message} />
        <BottomNav />
      </Suspense>
    </>
  );
}

export default memo(Home);
