import * as S from './SelectionHistory.style';
import * as P from './PaymontDetails.style'

const SelectionHistory = () => {
    return (
        <>
        <S.Select>
            <S.ItemTitle>선택내역</S.ItemTitle>
            <S.Items>배터리1</S.Items>
            <S.Items>배터리2</S.Items>
            <S.TotalItem>총 개수</S.TotalItem>
        </S.Select>
        <S.Select>
            <S.ItemTitle>선택내역</S.ItemTitle>
            <P.PaymentItem>배터리 대여</P.PaymentItem>
            <P.PaymentItem>보증금</P.PaymentItem>
            <S.TotalItem>총 결젝 금액</S.TotalItem>
        </S.Select>
        </>
    )
}

export {SelectionHistory}