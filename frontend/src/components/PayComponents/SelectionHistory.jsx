import * as S from './SelectionHistory.style';
import * as P from './PaymontDetails.style';
import { apiClient } from '../../apis/order';
import { getAllZones } from '../../apis/zone';
import { React, useState, useEffect } from 'react';

const SelectionHistory = () => {

    //보증금 금액은 아직 미정이므로 수정 필요
    let price = 100000;
    let deposit = 50000;
    let total = price + deposit
    return (
        <S.SelectLayout>
            <S.ItemTitle>주문 / 결제</S.ItemTitle>
                <S.Product>주문 상품</S.Product>
            <S.ItemLayout>
                {/* {data.map(({ zoneId, name, details }) => {
                    return (
                        <S.Items key={zoneId}>
                            <p>{details}</p>
                        </S.Items>
                    )
                })} */}

                {/* 예약하기 버튼을 누르면 데이터를 불러와야하는 부분 */}
                <S.ItemImg src='https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTNUJR13U8rtfrSZSbofcuDQ_l5YMw6vrYCf_04lsufCERPVsfTJXS9aw4X4c4epIiw5Z44_NlPXZA&usqp=CAc'/>
                <S.ItemLayout1>
                    <S.ItemName>100000mAh<br/>보조 배터리</S.ItemName>
                    <S.ItemPlace>100,000원</S.ItemPlace>
                    <S.ItemDate>2022-11-18(금) 15:00<br/>2022-11-19(토) 15:00</S.ItemDate>
                </S.ItemLayout1>
            </S.ItemLayout>
            <P.PayLayout>
                <P.LeftPay>
                    <P.PaymentItem>주문 금액</P.PaymentItem>
                    <P.PaymentItem>보증금</P.PaymentItem>
                </P.LeftPay>
                <P.RightPay>
                    <P.PayMoney>100,000원</P.PayMoney>
                    <P.PayMoney>+ {deposit}원</P.PayMoney>
                </P.RightPay>
            </P.PayLayout>
            <P.TotalPayLayout>
                <P.TotalPayLeft>결제 예정 금액</P.TotalPayLeft>
                <P.TotlaPayRight>{total}원</P.TotlaPayRight>
            </P.TotalPayLayout>
            <form method='post' action='/kakaoPay'>
                <P.PayButton>구매하기</P.PayButton>
            </form>
        </S.SelectLayout>
    );
};

export default SelectionHistory
