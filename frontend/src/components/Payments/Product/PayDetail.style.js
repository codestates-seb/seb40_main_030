import styled from 'styled-components';

const PayLayout = styled.div`
height: 230px;
`
const PayInformationLayout = styled.div`
display: flex;
justify-content: space-between;
margin-left: 30px;
margin-right: 30px;
`
const PayInformation = styled.div`
margin-top: 20px;
font-size: 20px;
font-weight: bold;
`

const PayDetails = styled.div`
margin-top: 20px;
font-size: 20px;
font-weight: bold;
`

const PayDetailLayout = styled.div`
margin-top: 30px;
border-top: 2px solid gray;
/* border: 1px solid blue; */
margin-top: 40px;
padding-top: 30px;
font-size: 25px;
font-weight: bold;

`

const TotalPay = styled.div`
color: ${({ theme }) => theme.COLOR_FONT};

`
const TotalPayDetail = styled.div`
color: red;
`

export { PayLayout, PayInformationLayout, PayInformation, PayDetails, TotalPay, TotalPayDetail, PayDetailLayout};
