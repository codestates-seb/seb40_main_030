import { useEffect } from 'react';
import * as S from './Bottom.style';
import ReservingList from './List/ReservingList';
import UseNowList from './List/UseNowList';
import useMyPageBottom from '../../hooks/MyPage/useMyPageBottom';

const Bottom = () => {
  const { getUserPayment, listData } = useMyPageBottom();

  useEffect(() => {
    getUserPayment();
  }, []); // 저장해서 리랜더링되면 계속해서 실행돼서 상태값 계속 늘어남... 흠... 상관없나??

  console.log('listData : ', listData);

  const filterReserving = listData.filter((list) => {
    return list.status === 'WAITING_FOR_RESERVATION';
  });
  console.log('filterReserving : ', filterReserving);
  const filterUseNow = listData.filter((list) => {
    return list.status === 'USE_NOW';
  });
  return (
    <S.MyPageBottomContainer>
      <S.ReservingListDiv>
        <S.ReservingText>예약 현황</S.ReservingText>
        {filterReserving.length &&
          filterReserving.map((data) => (
            <ReservingList data={data} key={data.id} />
          ))}
      </S.ReservingListDiv>
      <S.UseNowListDiv>
        <S.UseNowText>사용 현황</S.UseNowText>
        {filterUseNow.length &&
          filterUseNow.map((data) => <UseNowList data={data} key={data.id} />)}
      </S.UseNowListDiv>
    </S.MyPageBottomContainer>
  );
};

export default Bottom;
