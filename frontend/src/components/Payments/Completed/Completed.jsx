import { useLocation, useNavigate } from 'react-router-dom';

import { CompletedIcon } from '@/assets';

import * as S from './Completed.styled'

const Completed = () => {
    const {state} = useLocation();
    console.log(state)
    const navigate = useNavigate();

    const homeClick = () => {
        navigate('/')
    }

    const myPageClick = () => {
        navigate('/')
    }
    return (
        <S.CompletedLayout>
            <S.CompletedTitle>집나간 배터리</S.CompletedTitle>
            <S.CompletedLayOut>
                <S.CompletedLayOutDetail><b>예약</b>이</S.CompletedLayOutDetail>
                <S.CompletedLayOutDetail><b>완료</b>되었습니다.</S.CompletedLayOutDetail>
                <S.Time>사용시간 : <br/>{state?.startPoint.replace('T', ' ').replace(':','시 ')+'분'}
                    <br/>{state?.endPoint.replace('T', ' ').replace(':','시 ')+'분'}</S.Time>
                <S.CompletedIcon src={CompletedIcon} />
            </S.CompletedLayOut>
                <S.ReservationTitle>예약내역</S.ReservationTitle>
            <S.ReservationLayout>
                <S.Reservation>
                    <S.ReservationDetail>예약번호</S.ReservationDetail>
                    <S.ReservationDetail>예약상품</S.ReservationDetail>
                    <S.ReservationDetail>결제금액</S.ReservationDetail>
                </S.Reservation>
                <S.ReservationItem>
                    <S.ReservationDetail>구현안됨</S.ReservationDetail>
                    <S.ReservationDetail>{state.batteryName}</S.ReservationDetail>
                    <S.ReservationDetail>{state.price + 50000}원</S.ReservationDetail>
                </S.ReservationItem>
            </S.ReservationLayout>
            <S.BtnLayout>
                <S.HomeBtn onClick={homeClick}>홈 화면 가기</S.HomeBtn>
                <S.MyPageBtn onClick={myPageClick}>마이페이지</S.MyPageBtn>
            </S.BtnLayout>
        </S.CompletedLayout>
    )
}

export default Completed
