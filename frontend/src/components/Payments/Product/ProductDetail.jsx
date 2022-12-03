import { useLocation } from 'react-router-dom';

import * as S from './ProductDetail.style';

const ProductDetail = () => {
    const {state} = useLocation();
    
    return (
        <S.ItemLayout>        
            <S.ItemImg src={state?.photoURL}/>
            <S.ItemDetails>
                <S.ItemDetail>주유소 이름 :</S.ItemDetail>
                <S.ItemDetail>상품명 :</S.ItemDetail>
                <S.ItemDetail>용량 :</S.ItemDetail>
                <S.ItemDate>예약날짜 :</S.ItemDate>
            </S.ItemDetails>
            <S.PayDetails>
                <S.PayDetail>{state?.name}</S.PayDetail>
                <S.PayDetail>{state?.batteryName}</S.PayDetail>
                <S.PayDetail>{state?.capacity}</S.PayDetail>
                <S.PayDetail>{state?.startPoint.replace('T', ' ').replace(':','시 ')+'분'}<br/>{state?.endPoint.replace('T', ' ').replace(':','시 ')+'분'}</S.PayDetail>
            </S.PayDetails>
        </S.ItemLayout>
    );
};

export default ProductDetail
