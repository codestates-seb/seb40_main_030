import * as S from './SelectionHistory.style';
import * as P from './PaymontDetails.style';
import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

const SelectionHistory = () => {
    const location = useLocation().state.data;
    const batteryAAA = location.battery;
    const stationAAA = location.sation;
    const { paymentId } = useParams();
    //보증금 금액은 아직 미정이므로 수정 필요
    let deposit = 50000;
    let total = deposit

    return (
        <S.SelectLayout>
            <S.ItemTitle>주문 / 결제</S.ItemTitle>
                <S.Product>주문 상품</S.Product>
                <S.ItemLayout>        
                <S.ItemImg src={batteryAAA.photoURL}/>
                <S.ItemLayout1>
                    <S.ItemName>{batteryAAA.batteryName}</S.ItemName>
                    <S.ItemDate>예약날짜</S.ItemDate>
                    <S.ItemDate>{location.createdAt}<br/>{location.modifiedAt}</S.ItemDate>
                </S.ItemLayout1>
            </S.ItemLayout>
            <P.PayLayout>
                <P.LeftPay>
                    <P.PaymentItem>상품 금액</P.PaymentItem>
                    <P.PaymentItem>보증금</P.PaymentItem>
                </P.LeftPay>
                <P.RightPay>
                    <P.PayMoney>{batteryAAA.price}원</P.PayMoney>
                    <P.PayMoney>+ {deposit}원</P.PayMoney>
                </P.RightPay>
            </P.PayLayout>
            <P.TotalPayLayout>
                <P.TotalPayLeft>결제 예정 금액</P.TotalPayLeft>
                <P.TotlaPayRight>{total + batteryAAA.price}원</P.TotlaPayRight>
            </P.TotalPayLayout>
            <form method='post' action='/kakaoPay'>
                <P.PayButton>구매하기</P.PayButton>
            </form>
        </S.SelectLayout>
    );
};

export default SelectionHistory
