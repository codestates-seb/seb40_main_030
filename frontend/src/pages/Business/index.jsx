import BatteryList from '../../components/Business/Battery/BatteryList';
import Filter from '../../components/Business/Filter/Filter';
import Management from '../../components/Business/Management/ManageMent';
import * as S from './Business.style';
import { useQuery } from '@tanstack/react-query';
import {
  filterBatteryInfo,
  getEachStateNum,
} from '../../components/Business/utils';
import { getAdminById } from '../../apis/admin';

const Business = () => {
  let batteryList;
  let countList;
  const {
    data: adminInfo,
    isLoading,
    isSuccess,
    isError,
  } = useQuery(['adminInfo'], () => getAdminById('1'));

  if (isSuccess) {
    batteryList = filterBatteryInfo(adminInfo.data);
    countList = getEachStateNum(batteryList);
  }

  return (
    <S.PageWrapper>
      <S.BodyWrapper>
        <Management />
        {isSuccess ? <Filter countList={countList} /> : <p>로딩중</p>}
        {isSuccess ? <BatteryList batteryList={batteryList} /> : <p>로딩중</p>}
      </S.BodyWrapper>
    </S.PageWrapper>
  );
};

export default Business;
