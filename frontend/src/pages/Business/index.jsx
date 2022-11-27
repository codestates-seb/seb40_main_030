import InputModal from '@/components/Business/InputModal/InputModal';
import NavigationBar from '@/components/Business/Nav/NavigationBar';
import StationList from '@/components/Business/Station/StationList';
import StationManagement from '@/components/Business/StationManagement/StationManagement';

import PageWrapper from '../../components/@commons/PageWrapper/PageWrapper';
import BatteryList from '../../components/Business/Battery/BatteryList';
import BatteryManagement from '../../components/Business/BatteryManagement/BatteryManagement';
import Filter from '../../components/Business/Filter/Filter';
import useGetBatteryList from '../../hooks/Business/useGetBatteryList';
import useGetStationList from '../../hooks/Business/useGetStationList';
import useToggle from '../../hooks/Business/useToggle';
import * as S from './Business.style';

const Business = () => {
  const { batteryInfo, isLoading } = useGetBatteryList();
  const { isClicked, clickToggleHandler } = useToggle();
  const { stationInfo } = useGetStationList();

  if (isLoading) {
    return <p>로딩중</p>;
  }
  const batteryContent = (
    <>
      <InputModal />
      <S.BodyWrapper>
        <BatteryManagement />
        <Filter countList={batteryInfo.countList} />
        <BatteryList batteryList={batteryInfo.batteryList} />
      </S.BodyWrapper>
    </>
  );

  const stationContent = (
    <>
      <S.BodyWrapper>
        <StationManagement />
        <div style={{ height: '65px' }}></div>
        <StationList stationList={stationInfo} />
      </S.BodyWrapper>
    </>
  );

  return (
    <PageWrapper title={'사장님'} path={'/'}>
      <NavigationBar
        isClicked={isClicked}
        clickToggleHandler={clickToggleHandler}
      />
      {isClicked ? stationContent : batteryContent}
    </PageWrapper>
  );
};

export default Business;
