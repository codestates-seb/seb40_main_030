import { useLocation } from 'react-router-dom';
import * as S from './Completed.styled'

const Completed = () => {
    const {state} = useLocation();
    console.log('잘 가져왔니?', state)
    const aaa = state.state;
    
    return (
        <S.CompletedLayout>
            <S.CompletedTitle>집나간 배터리</S.CompletedTitle>
            <S.CompletedLayOut>
                <div>예약 완료 되었습니다.</div>
            </S.CompletedLayOut>
                <S.ReservationTitle>예약내역(박스)</S.ReservationTitle>
            <S.ReservationLayout>
                <div>예약번호</div>
                <div>예약상품</div>
                <div>결제금액<p>{aaa.price}</p></div>
            </S.ReservationLayout>
            <button>마이페이지</button>
            <button>홈 화면 가기</button>
        </S.CompletedLayout>
    )
}

export default Completed