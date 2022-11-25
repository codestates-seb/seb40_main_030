import * as S from './Business.style';
import { useQuery } from '@tanstack/react-query';
import { getAdminById } from '../../apis/admin';
import Filter from '../../components/Business/Filter/Filter';
import { useState } from 'react';
import Management from '../../components/Business/Management/Management';
import BatteryList from '../../components/Business/Battery/BatteryList';

const Business = () => {
  const [deleteState, setDeleteState] = useState(false);
  const deleteHandler = () => {
    setDeleteState((preState) => !preState);
  };
  const changeDelStateHandler = () => {
    if (deleteState) {
      setDeleteState(false);
    }
  };
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
        <Management
          deleteHandler={deleteHandler}
          changeDelStateHandler={changeDelStateHandler}
        />
        <Filter countList={batteryInfo.countList} />
        <BatteryList
          batteryList={batteryInfo.batteryList}
          deleteState={deleteState}
        />
      </S.BodyWrapper>
    </S.PageWrapper>
  );
};

export default Business;
