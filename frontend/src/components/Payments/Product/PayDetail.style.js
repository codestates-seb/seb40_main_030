import styled from 'styled-components';

const PayLayout = styled.div`
height: 230px;
`
const PayInformationLayout = styled.div`
display: flex;
justify-content: space-between;
margin-left: 30px;
margin-right: 30px;
font-size: 20px;
font-weight: bold;
`
const PayInformation = styled.div`
margin-top: 20px;
`

const PayDetails = styled.div`
margin-top: 20px;
`

const PayDetailLayout = styled.div`
margin-top: 30px;
border-top: 2px solid gray;
margin-top: 40px;
margin-bottom: 50px;
padding-top: 30px;
font-size: 25px;
font-weight: bold;
`

const TotalPay = styled.div`
color: ${({ theme }) => theme.COLOR_FONT};
font-size: 25px;

`
const TotalPayDetail = styled.div`
color: red;
`

const PayButton = styled.button`
font-size: 30px;
font-weight: bold;
background-color: ${({ theme }) => theme.COLOR_MAIN};
color: white;
width: 300px;
height: 70px;
display: flex;
justify-content: center;
align-items: center;
border-radius: 10px;
margin: auto;
cursor: pointer;
`

export { PayLayout, PayInformationLayout, PayInformation, PayDetails, TotalPay, TotalPayDetail, PayDetailLayout, PayButton };
