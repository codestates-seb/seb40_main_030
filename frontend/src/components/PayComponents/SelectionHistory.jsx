import * as S from './SelectionHistory.style';
import * as P from './PaymontDetails.style';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowIcon } from '@/assets';

const SelectionHistory = () => {
    const {state} = useLocation();
    let deposit = 50000;
    let navigate = useNavigate();

    function aClick() {
        navigate(-1)
      }
      
    return (
        <S.SelectLayout>
             <S.BackButton onClick={aClick}><ArrowIcon /></S.BackButton>
            <S.ItemOrder>주문 / 결제</S.ItemOrder>
                <S.Product>주문 상품</S.Product>
                <S.ItemLayout>        
                <S.ItemImg src={state?.photoURL}/>
                <S.ItemLayout1>
                    <S.ItemLeft>주유소 이름 :</S.ItemLeft>
                    <S.ItemLeft>상품명 :</S.ItemLeft>
                    <S.ItemLeft>용량 :</S.ItemLeft>
                    <S.ItemDate>예약날짜 :</S.ItemDate>
                </S.ItemLayout1>
                <S.ItemLayout2>
                    <S.ItemRight>{state?.name}</S.ItemRight>
                    <S.ItemRight>{state?.batteryName}</S.ItemRight>
                    <S.ItemRight>{state?.capacity}</S.ItemRight>
                    <S.ItemRight>{state?.startPoint}<br/>{state?.endPoint}</S.ItemRight>
                </S.ItemLayout2>
            </S.ItemLayout>
            <P.PayLayout>
                <P.LeftPayLayout>
                    <P.PaymentItem>상품 금액</P.PaymentItem>
                    <P.PaymentItem>보증금</P.PaymentItem>
                </P.LeftPayLayout>
                <P.RightPayLayout>
                    <P.PayMoney>{state?.price}원</P.PayMoney>
                    <P.PayMoney>+ {deposit}원</P.PayMoney>
                </P.RightPayLayout>
            </P.PayLayout>
            <P.TotalPayLayout>
                <P.TotalPayLeftLayout>결제 예정 금액</P.TotalPayLeftLayout>
                <P.TotalPayRightLayout>{state?.price + deposit}원</P.TotalPayRightLayout>
            </P.TotalPayLayout>
            <form method='post' action='/kakaoPay'>
                <P.PayButton>구매하기</P.PayButton>
            </form>
        </S.SelectLayout>
    );
};

export default SelectionHistory
