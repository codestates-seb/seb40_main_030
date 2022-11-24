import { Suspense } from 'react';
import { useLocation } from 'react-router-dom';

import { BatteryCharging, SplashScreen } from '@/components/@commons';
import BottomNav from '@/components/@layout/BottomNav/BottomNav';
import BottomSheet from '@/components/@layout/BottomSheet/BottomSheet';
import MapArea from '@/components/Home/Maps';
import Reservation from '@/components/Home/Reservation/Reservation';
import { ROUTES } from '@/constants';
import { useSplashScreen } from '@/hooks';

const Home = () => {
  const { pathname } = useLocation();
  const { isLoading, isSplashed } = useSplashScreen(3000);

  return isLoading ? (
    <SplashScreen />
  ) : (
    <>
      <Suspense fallback={<BatteryCharging />}>
        <MapArea />
        {/* Bottom Sheet 에 대한 visibility transition 이 들어가야함 */}
        {/* session storage 값으로 검증을 하는 방식이 맞는지 확인이 필요함 */}
        {isSplashed !== null ? (
          <div>
            {pathname === ROUTES.HOME.PATH && (
              <BottomSheet>
                <Reservation />
              </BottomSheet>
            )}
          </div>
        ) : null}
        <BottomNav />
      </Suspense>
    </>
  );
};

export default Home;
