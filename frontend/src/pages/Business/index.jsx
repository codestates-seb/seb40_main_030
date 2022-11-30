import { login } from '@/apis/auth';
import NavigationBar from '@/components/Business/Nav/NavigationBar';

import PageWrapper from '../../components/@commons/PageWrapper/PageWrapper';
import useToggle from '../../hooks/Business/useToggle';
import BatteryContent from './BatteryContent';
import StationContent from './StationContent';

const Business = () => {
  const { clickPage, SelectStationModeHandler, SelectBatteryHandler } =
    useToggle();

  login(); //로그인 임시 테스트

  return (
    <PageWrapper title={'사장님'} path={'/'}>
      {clickPage === 'battery' ? (
        <BatteryContent clickPage={clickPage} />
      ) : (
        <StationContent clickPage={clickPage} />
      )}
      <NavigationBar
        clickPage={clickPage}
        SelectBatteryHandler={SelectBatteryHandler}
        SelectStationModeHandler={SelectStationModeHandler}
      />
    </PageWrapper>
  );
};

export default Business;
