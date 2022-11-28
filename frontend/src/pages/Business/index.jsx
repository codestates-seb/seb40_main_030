import { login } from '@/apis/auth';
import NavigationBar from '@/components/Business/Nav/NavigationBar';

import PageWrapper from '../../components/@commons/PageWrapper/PageWrapper';
import useToggle from '../../hooks/Business/useToggle';
import BatteryContent from './BatteryContent';
import StationContent from './StationContent';

const Business = () => {
  const { isClicked, clickToggleHandler } = useToggle();

  login(); //로그인 임시 테스트

  return (
    <PageWrapper title={'사장님'} path={'/'}>
      <NavigationBar
        isClicked={isClicked}
        clickToggleHandler={clickToggleHandler}
      />
      {isClicked ? <StationContent /> : <BatteryContent />}
    </PageWrapper>
  );
};

export default Business;
