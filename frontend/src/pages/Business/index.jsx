import BatteryList from '../../components/Business/Battery/BatteryList';
import Filter from '../../components/Business/Filter/Filter';
import Management from '../../components/Business/Management/ManageMent';
import * as S from './Business.style';
import { useQuery } from '@tanstack/react-query';
import { getAdminById } from '../../apis/admin';

const Business = () => {
  const { data: batteryInfo, isLoading } = useQuery(['adminInfo'], () =>
    getAdminById('1')
  );

  if (isLoading) {
    return <p>로딩중</p>;
  }
  console.log('business');
  return (
    <S.PageWrapper>
      <S.BodyWrapper>
        <Management />
        <Filter countList={batteryInfo.countList} />
        <BatteryList batteryList={batteryInfo.batteryList} />
      </S.BodyWrapper>
    </S.PageWrapper>
  );
};

export default Business;
