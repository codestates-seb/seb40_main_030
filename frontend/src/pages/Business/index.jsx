import * as S from './Business.style';
import { useQuery } from '@tanstack/react-query';
import { getAdminById } from '../../apis/admin';
import Management from '../../components/Business/Management/Management';
import Filter from '../../components/Business/Filter/Filter';
import BatteryList from '../../components/Business/Battery/BatteryList';

const Business = () => {
  const { data: batteryInfo, isLoading } = useQuery(['adminInfo'], () =>
    getAdminById('1')
  );

  if (isLoading) {
    return <p>로딩중</p>;
  }
  console.log('businessㅇㅇ');

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
