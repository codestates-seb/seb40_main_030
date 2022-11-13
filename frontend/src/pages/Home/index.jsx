import useSplashScreen from '../../hooks/useSplashScreen';
import { SplashScreen } from '../../components/@commons';
import Nav from '../../components/@layout/BottomNav';
import BaseLayer from '../../components/Home/BaseLayer';

const Home = () => {
  // Home 은 landing page 의 역할
  const { isLoading } = useSplashScreen(3000);

  return isLoading ? (
    <SplashScreen />
  ) : (
    <BaseLayer>
      <div style={{ width: '100%', height: '90vh', overflow: 'hidden' }}>
        <img
          height='100%'
          width='100%'
          src='../../../src/assets/mockImage.png'
        />
      </div>
      <Nav />
    </BaseLayer>
  );
};

export default Home;
