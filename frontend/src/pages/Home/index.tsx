import { Suspense } from 'react';
import { useLocation } from 'react-router-dom';

import { BatteryCharging, SnackBar, SplashScreen } from '@/components/@commons';
import BottomNav from '@/components/@layout/BottomNav/BottomNav';
import BottomSheet from '@/components/@layout/BottomSheet/BottomSheet';
import MapArea from '@/components/Home/Maps';
import Reservation from '@/components/Home/Reservation/Reservation';
import { DESKTOP_MEDIA_QUERY, ROUTES } from '@/constants';
import { useSplashScreen, useSnackBar, useMediaQuery } from '@/hooks';

const Home = () => {
  const matches = useMediaQuery(DESKTOP_MEDIA_QUERY);
  const { pathname } = useLocation();
  const { isLoading, isSplashed } = useSplashScreen();
  const { isActive, message } = useSnackBar();

  return (
    <>
      {isLoading && <SplashScreen matches={matches} />}

      <Suspense fallback={<BatteryCharging />}>
        <MapArea matches={matches} />
        {/* Bottom Sheet 에 대한 visibility transition 이 들어가야함 */}
        {isSplashed !== null ? (
          <div>
            {pathname === ROUTES.HOME.PATH && (
              <BottomSheet matches={matches}>
                <Reservation />
              </BottomSheet>
            )}
          </div>
        ) : null}
        {/* 임시 공지사항 카카오 페이 결제 */}
        <SnackBar isActive={isActive} message={message} />
        <BottomNav />
      </Suspense>
    </>
  );
};

export default Home;
