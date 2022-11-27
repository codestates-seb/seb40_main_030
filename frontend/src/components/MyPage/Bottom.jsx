import axios from 'axios';
import { useEffect, useState } from 'react';
import * as S from './Bottom.style';
import InProgressList from './List/InProgressList';
import SuccessList from './List/SuccessList';

const Bottom = () => {
  // 사용중 상태 (예약현환)
  const [inProgress, setInProgress] = useState([]);
  // 사용완료 상태 (사용현황)
  const [success, setSuccess] = useState([]);

  useEffect(() => {
    axios
      .get(`https://5e7b-222-233-138-154.jp.ngrok.io/members/1`, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'ngrok-skip-browser-warning': '111',
        },
      })
      .then((res) => {
        const payData = res.data.payment;
        console.log(
          'mypage-> 예약,사용현황 리스트 받아오는 요청 res.data.payment : ',
          res.data.payment,
        );

        for (let i = 0; i < payData.length; i++) {
          if (payData[i].status === 'IN_PROGRESS') {
            setInProgress([...inProgress, payData[i]]);
          } else {
            setSuccess([...success, payData[i]]);
          }
        }
      })
      .catch((err) => {
        console.log('mypage-> 예약,사용현황 리스트 받아오는 요청 err : ', err);
      });
  }, []); // 저장해서 리랜더링되면 계속해서 실행돼서 상태값 계속 늘어남... 흠... 상관없나??

  console.log('inProgressList : ', inProgress);
  console.log('successList : ', success);

  return (
    <S.MyPageBottomContainer>
      <S.InProgressListDiv>
        {inProgress.length &&
          inProgress.map((data) => (
            <InProgressList data={data} key={data.id} />
          ))}
      </S.InProgressListDiv>
      <S.SuccessListDiv>
        {success.length &&
          success.map((data) => <SuccessList data={data} key={data.id} />)}
      </S.SuccessListDiv>
    </S.MyPageBottomContainer>
  );
};

export default Bottom;
