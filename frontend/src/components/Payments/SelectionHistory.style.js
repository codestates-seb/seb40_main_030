import styled from 'styled-components';

const SelectLayout = styled.div`
height: 640px;
margin: 0 auto;
margin-top: 30px;
`;

const BackButton = styled.button`
position: absolute;
margin-left: 20px;
`

const ItemOrder = styled.div`
font-size: 30px;
font-weight: bold;
text-align: center;
margin-bottom: 30px;
`

const Product = styled.div`
font-size: 25px;
background-color: ${({ theme }) => theme.COLOR_MAIN};
color: white;
height: 50px;
padding: 12px;
`

const PayButton = styled.button`
font-size: 30px;
font-weight: bold;
background-color: ${({ theme }) => theme.COLOR_MAIN};
color: white;
width: 300px;
height: 70px;
margin-top: 20px;
display: flex;
justify-content: center;
align-items: center;
border-radius: 10px;
margin: auto;
cursor: pointer;
`

export { SelectLayout, BackButton, ItemOrder, Product, PayButton };
