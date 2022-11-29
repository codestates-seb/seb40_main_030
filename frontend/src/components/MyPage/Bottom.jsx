import axios from 'axios';
import { useEffect, useState } from 'react';
import * as S from './Bottom.style';
import InProgressList from './List/InProgressList';
import SuccessList from './List/SuccessList';
import useMyPageBottom from '../../hooks/MyPage/useMyPageBottom';

const Bottom = () => {
  const { inProgress, success, getUserPayment } = useMyPageBottom();

  useEffect(() => {
    getUserPayment();
  }, []); // 저장해서 리랜더링되면 계속해서 실행돼서 상태값 계속 늘어남... 흠... 상관없나??

  console.log('inProgressList : ', inProgress);
  console.log('successList : ', success);

  return (
    <S.MyPageBottomContainer>
      <S.InProgressListDiv>
        <S.InProgressText>예약 현황</S.InProgressText>
        {inProgress.length &&
          inProgress.map((data) => (
            <InProgressList data={data} key={data.id} />
          ))}
      </S.InProgressListDiv>
      <S.SuccessListDiv>
        <S.SuccessText>사용 현황</S.SuccessText>
        {success.length &&
          success.map((data) => <SuccessList data={data} key={data.id} />)}
      </S.SuccessListDiv>
    </S.MyPageBottomContainer>
  );
};

export default Bottom;
