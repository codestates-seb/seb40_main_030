import React from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import { postKakao } from '@/apis/pay';
import { PRICE_REGEX } from '@/constants';
import cartInfo from '@/recoil/cart';

import * as S from './PayDetail.style';


const PayDetail = () => {
    const {state} = useLocation();
    const [stateCart, setStateCart] = useRecoilState(cartInfo)
    const totalAmount = state?.price + state?.defaultPrice;
    useEffect(() => {
        setStateCart(state)
    }, [])

    const handleClick = async () => {
        postKakao(state, totalAmount)
    }
    return (
            <S.PayLayout>
                <S.PayInformationLayout>
                    <S.PayInformation>배터리 기본 금액</S.PayInformation>
                    <S.PayDetails>{state?.defaultPrice.toString().replace(PRICE_REGEX, ',')}원</S.PayDetails>
                </S.PayInformationLayout>
                <S.PayInformationLayout>
                    <S.PayInformation>배터리 이용 금액</S.PayInformation>
                    <S.PayDetails>+ {state?.price.toString().replace(PRICE_REGEX, ',')}원</S.PayDetails>
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
