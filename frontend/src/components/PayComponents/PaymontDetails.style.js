import styled from 'styled-components';

const PayLayout = styled.div`
display: flex;
justify-content: space-between;
margin-left: 10px;
margin-right: 10px;
height: 150px;
`
const LeftPay = styled.div`
width: 150px;
`
const PaymentItem = styled.div`
font-size: 20px;
margin-top: 30px;
`

const RightPay = styled.div`
width: 150px;
text-align: right;
`
const PayMoney = styled.div`
font-size: 20px;
margin-top: 30px;
font-weight: bold;
`

const ItemDeposit = styled.div`
margin-top: 30px;
`
const TotalPayLayout = styled.div`
display: flex;
justify-content: space-between;
padding: 30px 10px 30px 10px;
border-top: 1px solid gray;
`
const TotalPayLeft = styled.div`
font-size: 20px;
padding-top: 10px;
font-size: 25px;
font-weight: bold;
color: var(--font-01);
`
const TotlaPayRight = styled.div`
font-size: 20px;
padding-left: 10px;
padding-top: 10px;
font-size: 25px;
font-weight: bold;
color: red;
`
const PayButton = styled.button`
font-size: 30px;
font-weight: bold;
background-color: var(--main-01);
color: white;
width: 300px;
height: 70px;
margin-top: 20px;
display: flex;
justify-content: center;
align-items: center;
border-radius: 10px;
margin: auto;
`
export { PayLayout, LeftPay, RightPay, PaymentItem, ItemDeposit, TotalPayLeft, TotlaPayRight, PayButton, PayMoney, TotalPayLayout };
