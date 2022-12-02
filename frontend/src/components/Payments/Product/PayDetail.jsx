import { useLocation} from 'react-router-dom';

import { postKakao } from '@/apis/pay';
// import { useNavigate } from 'react-router-dom';
import { PRICE_REGEX } from '@/constants';

import * as S from './PayDetail.style';

const PayDetail = () => {
    const {state} = useLocation();
    const deposit = 50000;
    const totalAmount = state?.price + deposit;
    // const navigate = useNavigate();
    console.log(state)
    // const handleClick = () => {
    //     navigate(`/payments/payment_completed`,{state})
    // }
    
    const handleClick = async () => {
        postKakao(state, totalAmount)
    }

    return (
        <S.PayLayout>
                <S.PayInformationLayout>
                    <S.PayInformation>상품 금액</S.PayInformation>
                    <S.PayDetails>{state?.price.toString().replace(PRICE_REGEX, ',')}원</S.PayDetails>
                </S.PayInformationLayout>
                <S.PayInformationLayout>
                    <S.PayInformation>배터리 기본 요금</S.PayInformation>
                    <S.PayDetails>+ {deposit}원</S.PayDetails>
                </S.PayInformationLayout>
                <S.PayDetailLayout>
                    <S.PayInformationLayout>
                        <S.TotalPay>결제 예정 금액</S.TotalPay>
                        <S.TotalPayDetail>{totalAmount.toString().replace(PRICE_REGEX, ',')}원</S.TotalPayDetail>
                    </S.PayInformationLayout>
                </S.PayDetailLayout>
                <S.PayButton onClick={handleClick}>구매하기</S.PayButton>
            </S.PayLayout>
            );
    };

export default PayDetail
