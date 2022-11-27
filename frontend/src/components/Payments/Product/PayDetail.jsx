import * as S from './PayDetail.style';
import { useLocation } from 'react-router-dom';

const PayDetail = () => {
    const {state} = useLocation();
    const deposit = 50000;
    const total = state?.price + deposit;
    return (
            <S.PayLayout>
                <S.PayInformationLayout>
                    <S.PayInformation>상품 금액</S.PayInformation>
                    <S.PayDetails>{state?.price}원</S.PayDetails>
                </S.PayInformationLayout>
                <S.PayInformationLayout>
                    <S.PayInformation>보증금</S.PayInformation>
                    <S.PayDetails>+ {deposit}원</S.PayDetails>
                </S.PayInformationLayout>
                <S.PayDetailLayout>
                    <S.PayInformationLayout>
                        <S.TotalPay>결제 예정 금액</S.TotalPay>
                        <S.TotalPayDetail>{total}원</S.TotalPayDetail>
                    </S.PayInformationLayout>
                </S.PayDetailLayout>
            </S.PayLayout>
            );
    };

export default PayDetail
