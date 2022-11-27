import * as S from './SelectionHistory.style';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowIcon } from '@/assets';
import ProductDetail from './Product/ProductDetail';
import PayDetail from './Product/PayDetail'

const SelectionHistory = () => {
    const navigate = useNavigate();
    const {state} = useLocation();
    function aClick() {
        navigate(-1)
      }
    
    const handleClick = () => {
        navigate(`/payments/payment_completed`, state );
    }

    return (
        <S.SelectLayout>
            <S.BackButton onClick={aClick} ><ArrowIcon /></S.BackButton>
            <S.ItemOrder>주문 / 결제</S.ItemOrder>
            <S.Product>주문 상품</S.Product>
            <ProductDetail />  
            <PayDetail />
            <S.PayButton onClick={handleClick}>구매하기</S.PayButton>
        </S.SelectLayout>
    );
};

export default SelectionHistory

