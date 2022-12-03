import { useNavigate } from 'react-router-dom';

import { ArrowIcon } from '@/assets';
import { DESKTOP_MEDIA_QUERY } from '@/constants';
import { useMediaQuery } from '@/hooks';

import PayDetail from './Product/PayDetail'
import ProductDetail from './Product/ProductDetail';
import * as S from './SelectionHistory.style';


const SelectionHistory = () => {
    const matches = useMediaQuery(DESKTOP_MEDIA_QUERY);

    const navigate = useNavigate();
    
    function aClick() {
        navigate(-1)
      }
    
    return (
        <S.SelectLayout matches={matches} >
            <S.BackButton onClick={aClick} ><ArrowIcon /></S.BackButton>
            <S.ItemOrder>주문 / 결제</S.ItemOrder>
            <S.Product>주문 상품</S.Product>
            <ProductDetail />  
            <PayDetail />
        </S.SelectLayout>
    );
};

export default SelectionHistory

