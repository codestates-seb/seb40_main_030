import { useNavigate } from 'react-router-dom';

import { ArrowIcon } from '@/assets';

import PayDetail from './Product/PayDetail'
import ProductDetail from './Product/ProductDetail';
import * as S from './SelectionHistory.style';


const SelectionHistory = () => {
    
    const navigate = useNavigate();
    
    function aClick() {
        navigate(-1)
      }
    
    return (
        <S.SelectLayout  >
            <S.BackButton onClick={aClick} ><ArrowIcon /></S.BackButton>
            <S.ItemOrder>주문 / 결제</S.ItemOrder>
            <S.Product>주문 상품</S.Product>
            <ProductDetail />  
            <PayDetail />
        </S.SelectLayout>
    );
};

export default SelectionHistory

