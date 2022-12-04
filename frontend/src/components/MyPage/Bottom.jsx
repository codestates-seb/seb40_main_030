import { useEffect } from 'react';
import * as S from './Bottom.style';
import ReservingList from './List/ReservingList';
import UseNowList from './List/UseNowList';
import useMyPageBottom from '../../hooks/MyPage/useMyPageBottom';

const Bottom = () => {
  const { getUserPayment, listData } = useMyPageBottom();

  useEffect(() => {
    getUserPayment();
  }, []);

  const filterReserving = listData.filter((list) => {
    return list.status === 'WAITING_FOR_RESERVATION';
  });
  const filterUseNow = listData.filter((list) => {
    return list.status === 'USE_NOW';
  });
  return (
    <S.MyPageBottomContainer>
      <S.ReservingListDiv>
        <S.ReservingText>예약 현황</S.ReservingText>
        {filterReserving &&
          filterReserving.map((data) => (
            <ReservingList data={data} key={data.id} />
          ))}
      </S.ReservingListDiv>
      <S.UseNowListDiv>
        <S.UseNowText>사용 현황</S.UseNowText>
        {filterUseNow &&
          filterUseNow.map((data) => <UseNowList data={data} key={data.id} />)}
      </S.UseNowListDiv>
    </S.MyPageBottomContainer>
  );
};

export default Bottom;
