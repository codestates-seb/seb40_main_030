import * as S from './SelectionHistory.style';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowIcon } from '@/assets';
import ProductDetail from './Product/ProductDetail';
import PayDetail from './Product/PayDetail'
const SelectionHistory = () => {
    // const {state} = useLocation();
    const deposit = 50000;
    const navigate = useNavigate();

    function aClick() {
        navigate(-1)
      }
    
    return (
        <S.SelectLayout>
            <S.BackButton onClick={aClick} ><ArrowIcon /></S.BackButton>
        <S.ItemOrder>주문 / 결제</S.ItemOrder>
        <S.Product>주문 상품</S.Product>
        <ProductDetail />  
        <PayDetail />
        <form method='post' action='/kakaoPay'>
            <S.PayButton>구매하기</S.PayButton>
        </form>
        </S.SelectLayout>
    );
};

export default SelectionHistory

