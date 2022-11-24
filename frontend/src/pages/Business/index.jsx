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
    data: batteryInfo,
    isLoading,
    isSuccess,
    isError,
  } = useQuery(['adminInfo'], () => getAdminById('1'));

  return (
    <S.PageWrapper>
      <S.BodyWrapper>
        <Management />
        {isSuccess ? (
          <Filter countList={batteryInfo.countList} />
        ) : (
          <p>로딩중</p>
        )}
        {isSuccess ? (
          <BatteryList batteryList={batteryInfo.batteryList} />
        ) : (
          <p>로딩중</p>
        )}
      </S.BodyWrapper>
    </S.PageWrapper>
  );
};

export default Business;
