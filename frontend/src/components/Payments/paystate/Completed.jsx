import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { CompletedIcon } from '@/assets';
import { DESKTOP_MEDIA_QUERY } from '@/constants';
import { useMediaQuery } from '@/hooks';
import cartInfo from '@/recoil/cart';

import * as S from './Completed.styled';

const Completed = () => {
  const stateCart = useRecoilValue(cartInfo);
  const matches = useMediaQuery(DESKTOP_MEDIA_QUERY);

  const navigate = useNavigate();
  const homeClick = () => {
    navigate('/');
  };

  const myPageClick = () => {
    navigate('/mypage');
  };

  return (
    <S.CompletedLayout matches={matches}>
      <S.CompletedTitle>보배빌림</S.CompletedTitle>
      <S.CompletedLayOut>
        <S.CompletedLayOutDetail>
          <b>예약</b>이
        </S.CompletedLayOutDetail>
        <S.CompletedLayOutDetail>
          <b>완료</b>되었습니다.
        </S.CompletedLayOutDetail>
        <S.Time>
          사용시간 : <br />
          {stateCart?.startPoint?.replace('T', ' ').replace(':', '시 ') + '분'}
          <br />
          {stateCart?.endPoint?.replace('T', ' ').replace(':', '시 ') + '분'}
        </S.Time>
        <S.CompletedIcon src={CompletedIcon} />
      </S.CompletedLayOut>
      <S.ReservationTitle>예약내역</S.ReservationTitle>
      <S.ReservationLayout>
        <S.Reservation>
          <S.ReservationDetail>예약상품</S.ReservationDetail>
          <S.ReservationDetail>결제금액</S.ReservationDetail>
        </S.Reservation>
        <S.ReservationItem>
          <S.ReservationDetail>{stateCart?.batteryName}</S.ReservationDetail>
          <S.ReservationDetail>
            {stateCart?.price + 50000}원
          </S.ReservationDetail>
        </S.ReservationItem>
      </S.ReservationLayout>
      <S.BtnLayout>
        <S.HomeBtn onClick={homeClick}>홈 화면 가기</S.HomeBtn>
        <S.MyPageBtn onClick={myPageClick}>마이페이지</S.MyPageBtn>
      </S.BtnLayout>
    </S.CompletedLayout>
  );
};

export default Completed;
