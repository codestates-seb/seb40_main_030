import MapArea from '../../components/Home/Maps';
import useSplashScreen from '../../hooks/useSplashScreen';
import BottomSheet from '../../components/@layout/BottomSheet/BottomSheet';
import Reservation from '../../components/Home/Reservation/Reservation';
import { SplashScreen } from '../../components/@commons';
import { useLocation } from 'react-router-dom';
import BottomNav from '../../components/@layout/BottomNav/BottomNav';

const Home = () => {
  const { pathname } = useLocation();
  // Home 은 landing page 의 역할
  const { isLoading, isSplashed } = useSplashScreen(3000);

  return isLoading ? (
    <SplashScreen />
  ) : (
    <>
      <MapArea />
      {/* Bottom Sheet 에 대한 visibility transition 이 들어가야함 */}
      {/* session storage 값으로 검증을 하는 방식이 맞는지 확인이 필요함 */}
      {isSplashed !== null ? (
        <div>
          {pathname === '/' && <BottomSheet children={<Reservation />} />}
        </div>
      ) : null}
      <BottomNav />
    </>
  );
};

export default Home;
