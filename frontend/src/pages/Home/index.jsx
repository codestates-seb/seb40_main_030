import useSplashScreen from '../../hooks/useSplashScreen';
import { SplashScreen } from '../../components/@commons';
import BottomSheet from '../../components/@layout/BottomSheet/BottomSheet';
import { useRecoilValue } from 'recoil';
import { navState } from '../../recoil/pagesState';

const Home = () => {
  // Home 은 landing page 의 역할
  const { isLoading, isSplashed } = useSplashScreen(3000);
  const isActive = useRecoilValue(navState);

  return isLoading ? (
    <SplashScreen />
  ) : (
    <>
      {/* 임시 */}
      <div style={{ width: '100%', height: '90vh', overflow: 'hidden' }}>
        <img
          height='100%'
          width='100%'
          src='../../../src/assets/mockImage.png'
        />
      </div>
      {/* Bottom Sheet 에 대한 visibility transition 이 들어가야함 */}
      {/* session storage 값으로 검증을 하는 방식이 맞는지 확인이 필요함 */}
      {isSplashed !== null ? (
        <div>
          <BottomSheet isActive={isActive} />
        </div>
      ) : null}
    </>
  );
};

export default Home;
